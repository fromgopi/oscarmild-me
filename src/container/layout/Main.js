import React from "react";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../../commons/ScrollToTop";

const Main = ( props ) => {
    return(
        <HelmetProvider>
            <ScrollToTop/>
        </HelmetProvider>
    );
}