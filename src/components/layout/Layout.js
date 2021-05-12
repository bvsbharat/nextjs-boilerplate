import React from "react";
import PropTypes from "prop-types";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
    return (
        <>
            <div className="absolute bg-gray-200 w-full h-full">
                <Navbar />
                <div className="container mx-auto  h-full  px-10 py-10">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
