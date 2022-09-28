import {
  email as ownerEmail,
  footer,
  msgPrincipal,
  textDisplayBtn,
} from "utils/ownerData";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import emailTempate from "utils/emailTemplate";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.body.data?.id) {
    const order = req.body.data.id;

    const data = await obtenerDatos(order);

    const [user, items, transaction_amount, status] = data;
    const { email } = user;

    const mailData = {
      from: {
        name: `${process.env.BUSINESS_NAME}`,
        address: "servicio.notificaciones.compras@gmail.com",
      },
      replyTo: ownerEmail,
      to: email,
      bcc: [ownerEmail, "servicio.notificaciones.compras@gmail.com"],
      subject: `Order number: ${order} `,

      html: emailTempate(
        items,
        order,
        user,
        transaction_amount,
        msgPrincipal(status),

        footer,
        textDisplayBtn,
        process.env.LOCAL_URL
      ),
    };
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);

          res.status(500).json(reject(err));
        } else {
          console.log(info);

          res.status(200).json(resolve(info));
        }
      });
    });

    // res.status(200).json({ status: "OK" });
  } else {
    //
    res.status(400).json({ msg: "null id notification" });
    res.end();
  }
}

async function obtenerDatos(id: any) {
  const url = `https://api.mercadopago.com/v1/payments/${id}?access_token=${process.env.ACCESS_TOKEN}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const {
    transaction_amount,
    external_reference: user,
    additional_info,
    status,
  } = data;

  const { items } = additional_info;

  return [JSON.parse(user), items, transaction_amount, status];
}
