import "../index.css"
import React from "react";

import Img1 from "./img/pd1.png";
import LogoFooter from "./img/RSALogo_with_name.png";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Navbar from "./headerNav/Navbar";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import Contact from "./section/Contact";
import About from "./section/About";

const Home = () => {
    return (
        <div className="Main xs:w-full">
            <Navbar/>
            <div className="Menu__">
                    <section className="HTop md:w-full xs:w-full xss:w-full grid grid-cols-1 " id="home">
                        <h1  className="TNxss font-mono font-bold tracking-wide ">Hello, I'am 
                            <br></br><span className="text-pink-800"> Rizal Setio Aji</span>
                        </h1>
                        <h2 className="TWxss font-sans font-bold ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">QA Manual </h2>
                        <div className="DescCard__ DHxss grid grid-cols-1">
                            <p className="xss:px-10 text-lg font-sans">This is my web Portfolio.
                            I have 2+ Years of Experience in QA Manual for 2+ years now. I Started My Career From QA Manual PT Palu Bisnis Servis with Project Tokopedia as QA manual WEB Platform.
                            I am So Glad with my work, because my project is Very Useful for others.
                            </p>
                            <div className="flex xss:m-10 justify-center">
                                <button className="border justify-center shadow-lg shadow-blue-500/50 w-44 rounded-lg border-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex py-2">
                                <FileDownloadIcon />  
                                    <a className="font-mono text-center p-1" href={Img1} download>
                                      Download Resume
                                    </a>
                                </button>
                            </div>
                        </div>
                    </section>
                    <Projects/>
                    <Skills />
                    <About />
                    <Contact />
            </div>
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

export default Home;



