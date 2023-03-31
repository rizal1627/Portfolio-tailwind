import "../index.css"
import React from "react";
import Img1 from "./img/pd1.png"

import FileDownloadIcon from '@mui/icons-material/FileDownload';
<<<<<<< HEAD
import Layout from "./Layout/Layout";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import About from "./section/About";
import Contact from "./section/Contact";
=======
import Navbar from "./headerNav/Navbar";
import TailwindIcon from "./icons/TailwindIcon";
>>>>>>> 96102b03fe784771a822d145143d7a63b8d59d54

const Home = () => {
    return (
        <div className="Main xs:w-full">
            <Layout>         
            <div className="Menu__">
                    <section className="HTop md:w-full xss:w-full grid grid-cols-1 " id="home">
                        <h1  className="TNxss font-mono font-bold tracking-wide ">Hello, I'am 
                            <br></br><span className="text-pink-800"> Rizal Setio Aji</span>
                        </h1>
<<<<<<< HEAD
                        <h2 className="xss:text-lg xss:m-2 font-sans font-bold">QA Manual </h2>
                        <div className="DescCard__ xsss:text-justify xss:text-xs grid grid-cols-1">
=======
                        <h2 className="TWxss font-sans font-bold ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">QA Manual </h2>
                        <div className="DescCard__ DHxss grid grid-cols-1">
>>>>>>> 96102b03fe784771a822d145143d7a63b8d59d54
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
<<<<<<< HEAD
                    <Projects />
                    <Skills/>
                    <About/>
                    <Contact/>
=======
                    <section className="Projects_ md:w-full xss:w-full xss:max-h-max bg-gradient-to-t from-sky-300/25 to-slate-100/0" id="projects">
                        <div className="ProjectList__ xss:p-5">
                            <h3 className="titleProjects__ xss:text-3xl xss:py-10 font-mono font-bold">My Project Completed</h3><hr className="xss:py-5 xss:mx-20"></hr>
                            <div className="cardListProjects__ grid xss:grid-cols-1 xss:gap-4">
                                <div className="cardProject__ border xss:max-h-max xss:w-72 xss:m-auto shadow-lg rounded-lg bg-gray-50 ">
                                    <img className="xss:object-cover rounded-t-lg xss:h-48 xss:w-full" src={Img1} alt="" />
                                    <div className="titleCard__ xss:p-2">
                                        <h3 className="xss:text-md font-sans font-bold">My Portfolio</h3>
                                    </div>
                                    <p className="px-5 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam praesentium aperiam molestias officiis voluptates, asperiores incidunt hic provident dolores neque unde cupiditate </p>
                                    <div className="flex xss:justify-center xss:m-2 font-sans font-light">
                                        <div className="grid xss:grid-cols-2 xss:p-4">
                                            <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >Html</p>
                                            <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" ><TailwindIcon /></p>
                                            <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >JS</p>
                                            <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >React</p>
                                            <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >Mysql</p>
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
                                            <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >Html</p>
                                            <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >Tailwind</p>
                                            <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >JS</p>
                                            <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >React</p>
                                            <p className="border border-solid rounded-xl w-20 m-2 shadow-md outline outline-blue-700 shadow-blue-500/50" >Mysql</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="Skills_ md:w-full xss:w-full xss:p-5 bg-gradient-to-t from-slate-100/0 to-sky-300/25" id="skills">
                        <h1 className="TitleSkills_ xss:text-3xl font-mono font-bold xss:py-16" >Skills</h1>
                    </section>
                    <section className="About_ md:w-full xss:w-full xss:max-h-max xss:px-10 xss:pb-10 bg-slate-100 " id="about">
                        <h1 className="TilteAbout__ xss:text-3xl xss:pt-16 font-mono font-bold">About me</h1>
                        <div className="ListAbout__ grid xss:grid-col-1 xss:text-justify gap-4">
                            <h2 className="xss:pt-10 font-mono font-bold">Lulus Sekolah SMK Tunas Bangsa</h2>
                            <p>Saya berasal dari sekolah menengah kejuruan SMK Tunas Bangsa Tangerang di bidang akuntansi, seiring berjalan nya waktu saya memutuskan untuk bekerja dan kuliah di Universitas Pamulang jurusan Teknik Informatika. Meskipun memiliki beberapa kendala dalam kuliah, saya tetap tidak pantang menyerah untuk meraih cita-cita saya.</p>
                            <h2 className="xss:pt-10 font-mono font-bold">Lulus Universitas Pamulang</h2>
                            <p>Saya memulai kuliah di tahun 2015. Dan Pada tahun 2020, akhirnya saya dapat lulus dari Universitas saya walaupun dengan nilai yang belum cukup memuaskan. Dengan lulus nya saya, saya kemudian melanjutkan karir saya untuk bekerja. Saya pun akhirnya mendapatkan pekerjaan pertama setelah lulus kuliah sebagai QA manual outsourcing yang bekerja sama dengan PT. Tokopedia</p>
                            <h2 className="xss:pt-10 font-mono font-bold">Bekerja Sebaga QA Manual di Tokopedia</h2>
                            <p>Saya bekera sebagai QA Manual di Tokopedia pada akhir tahun 2020, pada pekerjaan ini saya sangat bersyukur bisa bergabung di salah satu perushaan e-commerce terbesar di Indonesia. Di sini saya sangat mendapat banyak ilmu, yang dari sebelumnya belum mengetahui banyak teknologi sekarang telah mendapatkan nya walau masih perlu untuk belajar lebih giat lagi. Dan untuk saat ini, saya sangat menikmati pekerjaan saya di bidang Startup seperti ini.</p>
                        </div>
                    </section>
                    <section className="Contact_ md:w-full xss:w-full" id="contact">
                        <h1 className="TitlelContact__ xss:text-3xl xss:py-16 font-mono font-bold" > Contact Me</h1>
                        <h2>Contact Me Today!</h2>
                        <p>Hubungi Saya melalui salah satu social media saya yang telah ada di bawah ini.</p>
                    </section>
>>>>>>> 96102b03fe784771a822d145143d7a63b8d59d54
            </div>
            </Layout>
        </div>
        
    )

}

export default Home;



