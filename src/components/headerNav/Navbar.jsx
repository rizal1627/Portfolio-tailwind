import React from "react";
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import PhoneIcon from '@mui/icons-material/Phone';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import Logo from '../img/RSALogo.png';


// import Logo from "../img/RSALogo.png"


import Logo from "../img/RSALogo.png"

const Navbar = () => {
    
    return (
        <>
            <div className="Header_Main shadow-lg bg-slate-900 text-slate-100 fixed z-10 w-full">
                <div className="Nav__ flex md:flex-row md:-mt-0 xss:flex-col gap-2">
                        <div className="Logo__ basis-1/4 flex xss:justify-center md:justify-start xl:w-full xss:w-full xss:p-0 md:p-4">
                            <a className="" href="/">
                                 <img className=" xl:h-12 lg:h-12 md:h-12 sm:h-12 xss:h-12 " alt="logo" src={Logo}></img>
                            </a>
                        </div>
                        <div className="MenuLink__ basis-1/2 flex xss:justify-center md:justify-start xl:w-full font-sans text-lg font-bold xss:p-0 md:p-4">
                            <div className="ListMenu__  xss:justify-center xss:content-center md:justify-center md:content-center md:pl-5 ">
                                <ul className="flex">
                                    <li><a className="p-4 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition delay-150 ease-in-out " href="#home">Home</a></li>
                                    <li><a className="p-4 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition delay-150 ease-in-out" href="#projects">Projects</a></li>
                                    <li><a className="p-4 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition delay-150 ease-in-out" href="#skills">Skill</a></li>
                                    <li><a className="p-4 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition delay-150 ease-in-out" href="#about">About</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Search__ basis-1/2 flex xss:justify-center md:justify-start xl:w-full xss:p-0 md:p-4">
                            <div className="Search__ ">
                                {/* <Paper elevation={3} component="form"
                                    sx={{ p: '2px', display: 'flex', asgnItems: 'center', width: 400 }}>
                                    <InputBase
                                        sx={{ ml: 2, flex: 1, }}
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                </Paper> */}
                            </div>
                        </div>
                        <div className="ContactLink__ basis-1/4 xss:justify-center md:justify-startr xl:w-full gap-4 xss:p-0 md:p-4">
                            {/* <a className="flex font-sans font-bold" href="#contact"><PhoneIcon className="mx-2 "/> Contact</a> */}
                        </div>
                </div>
            </div>
                            {/* <div className="Darkmode__ ">
                                <button><Brightness4Icon /></button>
                            </div>
                            <div className="MoreInfo">
                                <MoreVertIcon />
                            </div> */}
                            {/* <div className="ToggleSidebar__ absolute xs:mx-10 xss:mx-5 xl:invisible lg:invisible md:visible sm:visible xss:visible">
                                <MenuIcon type="button" className="MenuIcon__ cursor-pointer" id="ToggleMenuIcon__"/>
                            </div> */}
            
            {/* Start SideBar */}
                {/* <div className="Sidenav__ fixed text-center h-full w-60 z-10 bg-black text-yellow-50" id="mySidenav" >
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
                </div> */}
            {/* End SideBar */}
        </>
    )

}


export default Navbar;