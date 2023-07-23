import React from "react";

import { 
    SiGmail, SiRocketdotchat, SiLinkedin, SiInstagram, SiFacebook, SiWhatsapp 
    } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <section className="Contact_ md:w-full xss:w-full xss:px-10 font-mono" id="contact">
                <h1 className="TitlelContact__ xss:text-3xl xss:pb-16 xss:pt-24 font-bold" > Contact Me</h1>
                    <h2>Contact Me Today!</h2>
                        <p>Hubungi Saya melalui salah satu social media saya yang telah ada di bawah ini.</p>
                        <div className="formContact_ my-10 xl:px-32">
                            <form action="#" className="grid grid-cols-1 gap-4">
                                <div className="nameInput_">
                                    <label className="flex py-1 text-gray-700 text-sm font-bold items-start "> User Name</label>
                                    <div className="border border-solid border-slate-400 rounded w-full p-2 shadow-md">
                                        <span class="flex pl-1"><FaRegUser />
                                        <input className="flex pl-4 h-5 outline-none w-full text-xs" id="username" type="text" placeholder="Username"></input></span>
                                    </div>
                                </div>
                                <div className="mailInput_">
                                    <label className="flex py-1 text-gray-700 text-sm font-bold items-start "> Email</label>
                                    <div className="border border-solid border-slate-400 rounded w-full p-2 shadow-md">
                                        <span class="flex pl-1"><SiGmail />
                                        <input className="flex pl-4 h-5 outline-none w-full text-xs " id="username" type="text" placeholder="Mail"></input></span>
                                    </div>
                                </div>
                                <div className="massageInput_">
                                    <label className="flex py-1 text-gray-700 text-sm font-bold items-start "> Massage</label>
                                    <div className="border border-solid border-slate-400 rounded w-full p-2 shadow-md">
                                        <span class="flex pl-1"><SiRocketdotchat />
                                        <textarea className="flex pl-4 h-5 outline-none w-full text-xs" id="username" type="text" placeholder="Message ..."></textarea></span>
                                    </div>
                                </div>
                                <div className="flex justify-end p-3 ">
                                <button className="flex w-20 h-8 justify-center justify-items-end py-1 border border-slate-500 rounded-md shadow-md bg-blue-500/25 text-sm">Send</button>
                                </div>
                            </form>
                            <div className="socialmedia__ leading-relaxed">
                                <a href="#" className="flex"><SiLinkedin className="my-1 mx-1" color='#063970'/>Linkedin</a>
                                <a href="#" className="flex"><SiInstagram className="my-1 mx-1" color='#FF6969'/>Instagram</a>
                                <a href="#" className="flex"><SiFacebook className="my-1 mx-1" color='3E54AC'/>Facebook</a>
                                <a href="#" className="flex"><SiWhatsapp className="my-1 mx-1" color='03C988'/>Whatsapp</a>
                            </div>
                        </div>
            </section>
        </>
    )
}

export default Contact;
