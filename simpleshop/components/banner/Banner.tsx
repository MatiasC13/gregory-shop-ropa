import React from 'react'
import { Container, Image} from "@chakra-ui/react";
import { showBannerType } from 'utils/ownerData';

const Banner = () => {
  return (
    <Container
      maxWidth="container.lg"
      mt={["2rem", "3rem"]}
      paddingInlineStart={["0rem"]}
      paddingInlineEnd={["0rem"]}
    >
      <Image
        src={showBannerType}
        alt="banner"
        objectFit="cover"
        maxHeight={"sm"}
        width={"100%"}
      />
    </Container>
  );
}

export default Banner
