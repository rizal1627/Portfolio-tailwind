import React from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import PhoneIcon from '@mui/icons-material/Phone';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import "./Navbar.css"


import Logo from "../img/RSALogo.png"

const Navbar = () => {
    
    return (
        <div>
            <div className="Header_Main flex sm:fixed xs:fixed xss:fixed xl:w-full lg:w-full md:w-full sm:w-full xs:w-full xss:w-full xl:h-20 lg:h-20 md:h-20 sm:h-20 xs:h-20 xss:h-20 shadow-lg bg-gray-50 ">
                <div className="Nav__ flex sm:py-2 xs:py-2 xss:m-3 xss:p-2 xl:w-full lg:w-full md:w-full sm:w-full xs:w-full xss:w-full items-center">
                    <div className="NavList__ flex items-center">
                        <div className="Logo__ xss:absolute md:mx-1">
                            <a className="" href="/">
                                 <img className=" xl:h-12 lg:h-12 md:h-12 sm:h-12 xss:h-12 " alt="logo" src={Logo}></img>
                            </a>
                        </div>
                        <div className="MenuLink__ xl:pr-100 lg:mx-1 md:px-20 sm:p-2 sm:w-96 xs:w-50 xss:w-32 font-sans text-lg xl:visible lg:visible md:visible xss:invisible font-bold">
                            <div className="ListMenu__ md:pl-5 ">
                                <ul className="flex">
                                    <li><a className="p-4 hover:text-pink-800 transition delay-150 ease-in-out " href="#home">Home</a></li>
                                    <li><a className="p-4 hover:text-pink-800 transition delay-150 ease-in-out" href="#projects">Projects</a></li>
                                    <li><a className="p-4 hover:text-pink-800 transition delay-150 ease-in-out" href="#skills">Skill</a></li>
                                    <li><a className="p-4 hover:text-pink-800 transition delay-150 ease-in-out" href="#about">About</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Search__ xl:w-96 md:px-20 md:w-60 sm:w-10 xs:w-48 xss:w-5 xss:invisible xs:invisible sm:invisble md:invisible lg:invisible xl:visible">
                            <div className="Search__ ">
                                <Paper elevation={3} component="form"
                                    sx={{ p: '2px', display: 'flex', asgnItems: 'center', width: 400 }}>
                                    <InputBase
                                        sx={{ ml: 2, flex: 1, }}
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                </Paper>
                            </div>
                        </div>
                        <div className="ContactLink__ flex xl:pl-96 lg:pl-52 md:px-20 sm:px-5 xs:ml-0 justify-end gap-5 xl:visible lg:visible md:visible sm:invisible xss:invisible">
                            <a className="flex font-sans font-bold" href="#contact"><PhoneIcon className="mx-2 "/> Contact</a>
                            <div className="Darkmode__ ">
                                <button><Brightness4Icon /></button>
                            </div>
                            <div className="MoreInfo">
                                <MoreVertIcon />
                            </div>
                            <div className="ToggleSidebar__ absolute xs:mx-10 xss:mx-5 xl:invisible lg:invisible md:visible sm:visible xss:visible">
                                <MenuIcon type="button" className="MenuIcon__ cursor-pointer" id="ToggleMenuIcon__"/>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
            <div>
            </div>
            {/* Start SideBar */}
                <div className="Sidenav__ fixed h-full w-60 z-10 bg-black text-yellow-50" id="mySidenav" >
                    <CloseIcon/>
                    <div className="grid grid-cols-1">
                        <h1 className="font-mono font-bold text-green-600 text-2xl p-5">Menu Utama</h1>
                        <ul className="grid grid-cols-1 gap-4 font-mono font-bold">
                            <ul><a href="#home">Home</a></ul>
                            <ul><a href="#projects">Projects</a></ul>
                            <ul><a href="#skills">Skils</a></ul>
                            <ul><a href="#about">About</a></ul>
                            <ul><a href="#contact">Contact</a></ul>
                        </ul>
                    </div>
                </div>
            {/* End SideBar */}
        </div>
    )

}


export default Navbar;