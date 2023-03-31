import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import { ReactNode } from "react"


const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            <Header />
            <h1>{children}</h1>
            <Footer />
        </div>
    )

}


export default Layout;