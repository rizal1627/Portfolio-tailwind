import "../index.css"
import React from "react";
import Img1 from "./img/pd1.png"

import FileDownloadIcon from '@mui/icons-material/FileDownload';

import Layout from "./Layout/Layout";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import About from "./section/Abouts";
import Contact from "./section/Contact";


const Home = () => {
    return (
        <div className="Main xs:w-full">
            <Layout>         
                <div className="Menu__">
                    <section className="HTop md:w-full xss:w-full grid grid-cols-1 " id="home">
                        <h1  className="TNxss font-mono font-bold tracking-wide ">Hello, I'am 
                            <br></br><span className="text-pink-800"> Rizal Setio Aji</span>
                        </h1>
                        <h2 className="xss:text-lg xss:m-2 2xl:m-1 font-sans font-bold">QA Manual </h2>
                        <div className="DescCard__ xsss:text-justify xss:text-xs grid grid-cols-1">
                            <div className="DescCard__ DHxss grid grid-cols-1">
                                <p className="xss:px-10 xl:px-20 text-lg font-sans">This is my web Portfolio.
                                    I have 2+ Years of Experience in QA Manual for 2+ years now. I Started My Career From QA Manual PT Palu Bisnis Servis with Project Tokopedia as QA manual WEB Platform.
                                    I am So Glad with my work, because my project is Very Useful for others.
                                </p>
                                <div className="flex xss:m-10 xl:h-12 lg:h-12 md:h-12 sm:h-10 justify-center">
                                    <button className="border justify-center shadow-lg shadow-blue-500/50 w-44 rounded-lg border-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex py-2">
                                        <FileDownloadIcon />  
                                        <a className="font-mono text-center p-1" href={Img1} download>
                                            Download Resume
                                        </a>
                                     </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Projects />
                    <Skills/>
                    <About/>
                    <Contact/>
                </div>
            </Layout>
        </div>
        
    )

}

export default Home;



