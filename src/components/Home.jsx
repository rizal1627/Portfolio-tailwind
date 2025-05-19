import "../index.css"
import React from "react";
import Resume from "../assets/Resume.pdf"

import FileDownloadIcon from '@mui/icons-material/FileDownload';

import Layout from "./Layout/Layout";
import Projects from "../main/section/Projects";
import Skills from "../main/section/Skills";
import About from "../main/section/About";
import Contact from "../main/section/Contact";
// import Comment from "../main/comment/comment";


const home = () => {
    return (
        <>
            <Layout>         
                <section className="HTop md:w-full xss:w-full flex flex-col" id="home">
                    <div className="TNxss flex flex-col gap-5 justify-center items-center font-mono font-bold tracking-wide ">
                        <div>
                            <h1>Hello, I'am</h1>
                        </div>
                        <div className="text-pink-800">
                            <h1>Rizal Setio Aji</h1>
                            <h2>QA Enginer</h2>
                        </div>
                    </div>
                    <div className="DescCard__ xsss:text-justify xss:text-xs grid grid-cols-1">
                        <div className="DescCard__ DHxss grid grid-cols-1">
                            <h2 className="xss:text-lg xss:m-2 2xl:m-1 font-sans font-bold">QA Manual </h2>
                            <p className="xss:px-10 xl:px-20 text-lg font-sans">This is my web Portfolio.
                                    I have 2+ Years of Experience in QA Manual for 2+ years now. I Started My Career From QA Manual PT Palu Bisnis Servis with Project Tokopedia as QA manual WEB Platform.
                                    I am So Glad with my work, because my project is Very Useful for others.</p>
                            <div className="flex xss:m-10 xl:h-12 lg:h-12 md:h-12 sm:h-10 justify-center">
                                <button className="border justify-center shadow-lg shadow-blue-500/50 w-44 rounded-lg border-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex py-2">
                                    <FileDownloadIcon />  
                                    <a className="font-mono text-center p-1" href={Resume} download>Download Resume</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                    <Projects />
                    <Skills/>
                    <About/>
                    <Contact/>
                    {/* <Comment/> */}
            </Layout>
        </>
        
    )

}

export default home;



