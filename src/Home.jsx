import "./index.css"
import React from "react";
// import Img1 from "./img/pd1.png"
import LogoFooter from "../src/components/img/RSALogo.png"// import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Navbar from "./components/navbar/Navbar";
import HeaderNav from "./components/headerNav/Navbar";
import Skills from "./section/About";
import About from "./section/Skills";
import Hero from "./section/Hero";
import Project from "./section/Project";
import Contact from "./section/Contact";
import Footer from "./components/footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar/>
            <HeaderNav/>
            <div className="Main flex flex-col bg-gradient-to-r from-blue-200 to-blue-900 lg:pt-24 xss:pt-16">
                    <Hero/>
                    <Project/>
                    <About/>
                    <Skills/>
                    <Contact/>
                    <Footer/>
                {/* <footer className="Footer__ md:w-full xss:w-full xss:max-h-max xss:p-3 xss:grid xss:grid-cols-2 bg-slate-900">
                        <img className="FooterLogo__ xss:p-2 w-36 h-30" src={LogoFooter} alt="rizal seto aji" />
                        <div className="FooterCopyRight__ xss:text-sm xss:p-2 text-gray-300/25">
                            <p>ALL RIGHTS RESERVED.</p>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS OF USE &#169;</p>
                        </div>
                </footer> */}
            </div>
        </>
        
    )

}

export default Home;



