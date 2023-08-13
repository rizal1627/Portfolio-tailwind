import React from "react";
import { 
    SiTailwindcss, SiHtml5, SiJavascript, SiReact, SiMysql, SiCss3, SiGithub
    } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const Skills = () => {
    return (
        <>
            <section className="Skills_ md:w-full xss:w-full xss:pb-10 xss:max-h-max bg-gradient-to-t from-slate-100/0 to-sky-300/25" id="skills">
                    <h1 className="text-3xl xss:pb-10 xss:pt-24 font-mono font-bold flex justify-center" >Skills</h1>
                    <hr className="xss:py-5 xss:mx-20"></hr>
                    <div className="ListSkillS_ grid xss:grid-cols-2 justify-items-center gap-10 xss:m-5">
                        <div className="skill1_"><SiHtml5 color='#e44d26' size={100} /></div>
                        <div className="skill5_"><SiCss3 color='#1483b2' size={100} /></div>
                        <div className="skill2_"><SiTailwindcss color='#06b6d4' size={100} /></div>
                        <div className="skill3_"><SiJavascript color='#f7df1e' size={100} /></div>
                        <div className="skill4_"><SiReact color='#00d8ff' size={100} /></div>
                        <div className="skill5_"><SiMysql color='#00758f' size={100} /></div>
                        <div className="skill5_"><SiGithub color='#000000' size={100} /></div>
                        <div className="skill5_"><FaFigma color='#ed645a' size={100} /></div>
                    </div>
            </section>
        </>
    )

}


export default Skills;