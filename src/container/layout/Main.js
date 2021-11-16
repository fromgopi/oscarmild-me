import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../../commons/ScrollToTop";

const Main = ( props ) => {
    return(
        <HelmetProvider>
            <ScrollToTop/>
            <Helmet titleTemplate="%s | Gopi Krishna M" defaultTitle="Gopi Krishna M" defer={false}>
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
            <div id="wrapper"></div>
        </HelmetProvider>
    );
}