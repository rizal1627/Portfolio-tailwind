import React from "react";

import Img1 from "../components/img/pd1.png"


const Project = () => {
    return (
        <>
            <section className="Projects_ lg:p-10 xss:p-5 flex flex-col w-full xss:max-h-max bg-gradient-to-t from-sky-300/50 to-slate-100/0" id="projects">
                <div className="flex justify-center bg-blue-400 rounded-lg shadow-lg my-5">
                    <hr className=""></hr>
                    <h1 className="titleProjects__ xss:text-3xl xss:py-10 lg:text-5xl font-mono font-bold ">
                        <a className="xss:p-2 lg:p-5 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-800 transition delay-150 ease-in-out" href="/projects">My Project</a>    
                    </h1>                
                </div>
                <div className="ProjectList__ grid xss:grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="cardProject xss:max-h-max xss:w-full shadow-lg rounded-lg bg-gray-50 ">
                        <div className="cardImage">
                            <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                        </div>
                        <div className="titleCard__ xss:p-2 lg:px-10">
                            <a href="./">
                                <h3 className="xss:text-md font-sans font-bold">QA Manual Tester "Project Tokopedia"</h3>
                            </a>
                        </div>
                        <div className="desc pb-5">
                            <p className="xss:px-2 lg:px-10 text-sm text-start">PT. Palu Bisnis Servis As QA Tester Manual With Tokopedia Project on November 2020 until June 2023. Testing Aplication on Android, WEB, IOS. My Jobsdesk Performing Regression Testing, Smoke Testing, Functional Testing, Exploratory Testing, and Test Execution via Jira, reporting bugs, and submitting daily reports.
                            </p>
                        </div>
                        {/* <div className="flex flex-col xss:m-2 font-sans font-light">
                            <div className="grid xss:grid-cols-2 xss:p-4">
                                <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >Html</p>
                                <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >Tailwind</p>
                                <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >JS</p>
                                <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >React</p>
                                <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >Mysql</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="cardProject xss:max-h-max xss:w-full shadow-lg rounded-lg bg-gray-50 ">
                        <div className="cardImage">
                            <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                        </div>
                        <div className="titleCard__ xss:p-2 lg:px-10">
                            <a href="./">
                                <h3 className="xss:text-md font-sans font-bold">QA Manual Tester PT Sharing Vision Indonesia</h3>
                            </a>
                        </div>
                        <div className="desc pb-5">
                            <p className="xss:px-2 lg:px-10 text-sm text-start">PT Sharing Vision Indonesia As QA Tester Manual with Project BRI OCEAN on January 2024 – April 2025 Tetsing Desktop, Web App. My Job Desk From Read and analyze software requirement documents, Create manual test scenarios and Run manual tests to evaluate software functions and ensure there are no errors or defects in the product with specifications and results
                            Coordinate with developers, business analysts, and project managers to ensure a clear understanding of testing needs and software specifications.
                            Compile test documentation that includes test plans, test cases, test results, and bug reports.
                            </p>
                        </div>
                    </div>
                    <div className="cardProject xss:max-h-max xss:w-full shadow-lg rounded-lg bg-gray-50 ">
                        <div className="cardImage">
                            <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                        </div>
                        <div className="titleCard__ xss:p-2 lg:px-10">
                            <a href="https://syathibi.com/">
                                <h3 className="xss:text-md font-sans font-bold">Wordpress Asy-Syathibiyyah</h3>
                            </a>
                        </div>
                        <div className="desc pb-5">
                            <p className="xss:px-2 lg:px-10 text-sm text-start">Creating Wordpress for the Majelis Asy-Syathibiyyah with some programs like B. arab, Asy-Syathibiyyah Berbagi Kasih, Media Center Asy-Syathibiyyah and other.
                            </p>
                        </div>
                    </div>
                    <div className="cardProject xss:max-h-max xss:w-full shadow-lg rounded-lg bg-gray-50 ">
                        <div className="cardImage">
                            <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                        </div>
                        <div className="titleCard__ xss:p-2 lg:px-10">
                            <a href="./">
                                <h3 className="xss:text-md font-sans font-bold">Project E-Commerce</h3>
                            </a>
                        </div>
                        <div className="desc pb-5">
                            <p className="xss:px-2 lg:px-10 text-sm text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti sequi minima eveniet eos eius in, corrupti, laudantium maxime perferendis rem? Asperiores labore molestiae sit alias, velit quos doloremque. Eligendi?.
                            </p>
                        </div>
                    </div>
                    <div className="cardProject xss:max-h-max xss:w-full shadow-lg rounded-lg bg-gray-50 ">
                        <div className="cardImage">
                            <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                        </div>
                        <div className="titleCard__ xss:p-2 lg:px-10">
                            <a href="https://aniwedding.vercel.app/">
                                <h3 className="xss:text-md font-sans font-bold">Project Wedding APP</h3>
                            </a>
                        </div>
                        <div className="desc pb-5">
                            <p className="xss:px-2 lg:px-10 text-sm text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis impedit nihil odit adipisci ab! Aliquam totam laboriosam deserunt cupiditate illo ab exercitationem sint quaerat vero, illum modi non possimus sequi!.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}


export default Project;