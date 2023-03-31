import React from "react";
import LogoFooter from "../img/RSALogo_with_name.png"

const Footer = () => {
    return (
        <div>
            <footer className="Footer__ md:w-full xss:w-full xss:max-h-max xss:p-3 xss:grid xss:grid-cols-2 bg-slate-900">
                    <img className="FooterLogo__ xss:p-2 w-36 h-30" src={LogoFooter} alt="rizal seto aji" />
                    <div className="FooterCopyRight__ xss:text-sm xss:p-2 text-gray-300/25">
                        <p>ALL RIGHTS RESERVED.</p>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS OF USE &#169;</p>
                    </div>
            </footer>
        </div>
    )

}

export default Footer;