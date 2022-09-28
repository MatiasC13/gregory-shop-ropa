import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { ShoppingProvider } from "../context/context";
import LandingLayout from "../components/layouts/layout";
import theme from "../theme";
import {themeOwner} from "utils/ownerData"



const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ShoppingProvider>
      <ChakraProvider theme={theme}>
        <LandingLayout>
          <Component Component {...pageProps} />
        </LandingLayout>
        <style jsx global>{`
          body::-webkit-scrollbar {
            width: 12px;
          }
          body::-webkit-scrollbar-thumb {
            background-color: ${themeOwner["100"]};
            border-radius: 20px;
          }
        `}</style>
      </ChakraProvider>
    </ShoppingProvider>
  );
};

export default App;

// <ChakraProvider theme={theme}>

// </ChakraProvider>
