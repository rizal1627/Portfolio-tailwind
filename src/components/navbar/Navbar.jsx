import React from "react";
import Logo from "../img/RSALogo.png"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <div>
            <nav className="p-5 bg-cyan-500 shadow md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-[popins]">
                    <img className="h-10 inline" src={Logo} alt="" />
                        Rizal
                    </span>
                    <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                        <MenuIcon />
                    </span>
                </div>
                <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400] transition-all ease-in duration-500">
                    <li className="mx-4 my-6 md:my-0">
                        <a href="/" className="text-xl font-[popins] hover:text-slate-100 duration-500">Home</a>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <a href="/" className="text-xl font-[popins] hover:text-slate-100 duration-500">Project</a>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <a href="/" className="text-xl font-[popins] hover:text-slate-100 duration-500">About</a>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <a href="/" className="text-xl font-[popins] hover:text-slate-100 duration-500">Contact</a>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <a href="/" className="text-xl font-[popins] hover:text-slate-100 duration-500">Skiils</a>
                    </li>
                    <button className="bg-green-400 text-white font-[popins] duration-500 px-6 py-2 mx-4 hover:bg-green-300 rounded">
                        Get Started
                    </button>
                </ul>
            </nav>
        </div>
    )

}


export default Navbar;