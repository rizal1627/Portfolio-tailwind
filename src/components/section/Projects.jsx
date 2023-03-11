import React from "react";
import Img1 from "../img/pd1.png";
import { 
    SiTailwindcss, SiHtml5, SiJavascript, SiReact, SiMysql, SiCss3, 
    } from "react-icons/si";


const Projects = () => {
    return (
        <>
            <section className="Projects_ md:w-full xss:w-full xss:max-h-max bg-gradient-to-t from-sky-300/25 to-slate-100/0" id="projects">
                <div className="ProjectList__ xss:p-5">
                    <h3 className="titleProjects__ xss:text-3xl xss:py-10 font-mono font-bold">My Project Completed</h3>
                    <hr className="xss:py-5 xss:mx-20"></hr>
                    <div className="cardListProjects__ grid xss:grid-cols-1 xss:gap-4">
                            <div className="cardProject__ border xss:max-h-max xss:w-72 xss:m-auto shadow-lg rounded-lg bg-gray-50 ">
                                <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                                <div className="titleCard__ xss:p-2">
                                    <h3 className="xss:text-md font-sans font-bold">My Portfolio</h3>
                                </div>
                                <p className="px-5 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam praesentium aperiam molestias officiis voluptates, asperiores incidunt hic provident dolores neque unde cupiditate </p>
                                <div className="flex xss:justify-center xss:m-2 font-sans font-light">
                                    <div className="grid xss:grid-cols-2 xss:p-4">
                                        <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiHtml5 color='#e44d26' /></p>
                                        <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiTailwindcss color='#06b6d4' /></p>
                                        <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiJavascript color='#f7df1e' /></p>
                                        <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiCss3 color='#1483b2' /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="cardProject__ border xss:max-h-max xss:w-72 xss:m-auto shadow-lg rounded-lg bg-gray-50 ">
                                <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                                <div className="titleCard__ xss:p-2">
                                     <h3 className="xss:text-md font-sans font-bold">E-commerce App (Coming Soon)</h3>
                                </div>
                                <p className="px-5 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam praesentium aperiam molestias officiis voluptates, asperiores incidunt hic provident dolores neque unde cupiditate </p>
                                <div className="flex xss:justify-center xss:m-2 font-sans font-light">
                                    <div className="grid xss:grid-cols-2 xss:p-4">
                                        <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiHtml5 color='#e44d26' /></p>
                                        <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiTailwindcss color='#06b6d4' /></p>
                                        <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiJavascript color='#f7df1e' /></p>
                                        <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiReact color='#00d8ff' /></p>
                                        <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-1" ><SiMysql size={22} /></p>
                                        <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiCss3 color='#1483b2' /></p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )

}


export default Projects;