import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            <Header />
                <>{children}</>
            <Footer />
        </div>
    )

}


export default Layout;