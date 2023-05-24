import React from "react";
import LogoFooter from "../img/RSALogo_with_name.png"

const Footer = () => {
    return (
        <>
            <footer className="Footer__ md:w-full xss:w-full xss:max-h-max xss:p-3 xss:grid xss:grid-cols-2 bg-slate-900">
                    <div className="px-8">
                        <img className="FooterLogo__ xss:p-2 w-36 h-30" src={LogoFooter} alt="rizal seto aji" />
                    </div>
                    <div className="FooterCopyRight__ grid xss:text-sm xss:p-2 xl:justify-end xl:px-20 sm:justify-end sm:px-16 text-gray-300/25">
                        <p>ALL RIGHTS RESERVED.</p>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS OF USE &#169;</p>
                    </div>
            </footer>
        </>
    )

}

export default Footer;