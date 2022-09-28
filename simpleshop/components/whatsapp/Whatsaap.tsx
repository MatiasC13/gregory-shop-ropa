import React from "react";
import { Link, IconButton, Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import { urlWhatsaapp } from "../../utils/helper";
import { whatsaapNumber } from "../../utils/ownerData";

const Whatsaap = (): JSX.Element => {
  const { getNumberOfItems, textMessage } = useCart();

  return (
    <IconButton
    colorScheme="whatsapp"
    title="realiza tu compra de forma directa"
      isExternal
      as={Link}
      href={urlWhatsaapp(textMessage(), whatsaapNumber)}
      aria-label={"link de whatssap  para confirmar la compra"}
    >
      <Icon as={FaWhatsapp} boxSize={"2rem"}>
        Completar pedido ({getNumberOfItems()} productos)
      </Icon>
    </IconButton>
  );
};

export default Whatsaap;
