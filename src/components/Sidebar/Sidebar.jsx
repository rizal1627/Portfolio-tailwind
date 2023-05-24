import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
    
    return (
        <div>
            {/* Start SideBar */}
                <div className="Sidenav__ fixed h-full w-60 z-10 bg-black text-yellow-50 invisible" id="mySidenav" >
                    <div className="m-10">
                        <CloseIcon className="absolute inset-y-5 right-5"/>
                    </div>
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


export default Sidebar;