import React from "react";
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navigation from "../../commons/Navigation";
import SideBar from "../../commons/SideBar";
import ScrollToTop from "../../commons/ScrollToTop";


const Main = ( props ) => {
    return(
        <HelmetProvider>
            <ScrollToTop/>
            <Helmet titleTemplate="%s | Gopi Krishna M" defaultTitle="Gopi Krishna M" defer={false}>
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
            <div id="wrapper">
                <Navigation/>
                <div id="main">
                    {props.children}
                </div>
                {props.fullPage ? null : <SideBar/>}
            </div>
        </HelmetProvider>
    );
}

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};
    Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Oscarmild's personal website.",
};

export default Main;