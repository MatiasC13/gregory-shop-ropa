
import Product from "../interfaces/Product";

export const curency="UYU"



export const urlPreferences = "https://api.mercadopago.com/checkout/preferences";

export const responseUrl = (url: string): string => {
  const urlBase = "http://drive.google.com/uc?export=view&id=";
  const start = url.indexOf("/d/") + 3;
  const end = url.indexOf("/view");

  return urlBase + url.slice(start, end);
};

export const parseCurrency = (value: number): string => {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: curency,
  });
};



export const filter = (text: string, products: Product[]) => {
  const filteredProducts = [];



  products.forEach((product) => {
    if (
      ignoreAccentAndCase(product.category).includes(
        ignoreAccentAndCase(text)
      ) ||
      ignoreAccentAndCase(product.description).includes(
        ignoreAccentAndCase(text)
      ) ||
      ignoreAccentAndCase(product.title).includes(ignoreAccentAndCase(text))
    ) {
      if (!filteredProducts.some((p) => p.id === product.id)) {
        filteredProducts.push(product);
      }
    }
  });

  return filteredProducts;
};


export const ignoreAccentAndCase = (pValue) => {

  const arr = [...pValue].map((ch) => repalceAccents(ch)).join().replaceAll(" ", "").replaceAll(",", "").toLocaleLowerCase();

  return arr;
};

const repalceAccents = (value) => {
  switch (value) {
    case "á":
      return "a";
    case "é":
      return "e";
    case "í":
      return "i";
    case "ó":
      return "o";
    case "ú":
      return "u";
    case "ü":
      return "u";
    default:
      return value;
  }
};

export const urlWhatsaapp = (text:string, whatshapNumber:string)=>`https://wa.me/${whatshapNumber}?text=${encodeURIComponent(
  text
)}`

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

export  const rgbDataURL = (arr) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, arr[0], arr[1]) + triplet(arr[2], 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;



