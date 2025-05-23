import React from "react";
import Img1 from "../../assets/img/pd1.png";
import { 
    SiTailwindcss, SiHtml5, SiJavascript, SiReact, SiMysql, SiCss3, 
    } from "react-icons/si";


const Projects = () => {
    return (
         <>
            <section className="Projects_ grid grid-cols-1 bg-gradient-to-t from-sky-300/25 to-slate-100/0" id="projects">
                <div className="ProjectList__ md:mx-10 xss:mx-5 flex flex-col">
                    <h1 className="titleProjects__ xss:text-2xl md:text-3xl md:py-10 xss:py-5 font-mono font-bold flex justify-center">My Project Completed</h1>
                    <hr className="xss:py-5 xss:mx-20"></hr>
                    <div className="cardListProjects__ grid xss:grid-cols-1 gap-4 xl:grid-cols-3 sm:grid-cols-2 xl:px-20">
                        <div className="cardProject__ border h-full max-w-max xss:m-auto shadow-lg rounded-lg bg-gray-50 ">
                            <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                            <div className="titleCard__ xss:p-2">
                                 <h3 className="xss:text-md font-sans font-bold hover:text-pink-800 transition delay-150 ease-in-out"> <a href="/"> My Portfolio</a></h3>
                            </div>
                            <p className="px-5 text-sm text-center">Ini adalah Web portfolio saya, yang di mana di rancang menggunakan teknologi Html, Css, Javascript, Tailwind, React. pada web portfolio ini akan terus di kembangkan untuk menjadi portfolio profesional saya. </p>
                            <div className="flex xss:justify-center xss:m-2 font-sans font-light">
                                <div className="grid xss:grid-cols-2 xss:p-4">
                                    <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiHtml5 color='#e44d26' /></p>
                                    <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiTailwindcss color='#06b6d4' /></p>
                                    <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiJavascript color='#f7df1e' /></p>
                                    <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50 flex justify-center py-2" ><SiCss3 color='#1483b2' /></p>
                                </div>
                            </div>
                        </div>
                        <div className="cardProject__ border h-full max-w-max xss:m-auto shadow-lg rounded-lg bg-gray-50 ">
                                <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                                <div className="titleCard__ xss:p-2">
                                     <h3 className="xss:text-md font-sans font-bold hover:text-pink-800 transition delay-150 ease-in-out">
                                        <a href="https://tokorizals.vercel.app">
                                            E-commerce App ( #Still Develop )
                                        </a>
                                     </h3>
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
                        <div className="cardProject__ border h-full max-w-max xss:m-auto shadow-lg rounded-lg bg-gray-50 ">
                                <div className="cardProject__ border h-full max-w-max xss:m-auto shadow-lg rounded-lg bg-gray-50 ">
                                    <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                                    <div className="titleCard__ xss:p-2">
                                     <h3 className="xss:text-md font-sans font-bold hover:text-pink-800 transition delay-150 ease-in-out"><a href="./">Asy-Syatibiyyah Web (Coming Soon)</a></h3>
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
                    <div className="all_project flex justify-end mx-20 my-10 font-mono font-bold">
                        <a href="/all-projects"> See All Projects</a>
                    </div>
                </div>
                </section>
        </>
        )
    
    }
    
    export default Projects;