import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/Header";


const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
                <>{children}</>
            <Footer />
        </>
    )

}


export default Layout;