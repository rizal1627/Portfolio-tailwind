import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/Header";
import Appbar from "../Header/Appbar";


const Layout = (props) => {
    const { children } = props;
    return (
        <>
            {/* <Header /> */}
            <Appbar />
                <>{children}</>
            <Footer />
        </>
    )

}


export default Layout;