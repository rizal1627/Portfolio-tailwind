import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import PhoneIcon from '@mui/icons-material/Phone';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../assets/img/RSALogo.png";


const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    return (
        <>
            <div className="Header_Main flex flex-row fixed w-full h-20 md:px-10 shadow-lg bg-gray-50 ">
                <div className="NavList__ flex flex-row items-center justify-center xss:basis-2/12 ">
                    <div className="Logo__  lg:w-full xss:w-20 md:w-32">
                        <a className="" href="/">
                            <img className=" xl:h-12 lg:h-12 md:h-12 sm:h-12 xss:h-12 " alt="logo" src={Logo}></img>
                        </a>
                    </div>
                    <div className="Search__ xss:w-0 lg:w-auto xss:invisible lg:visible">
                        <Paper elevation={3} component="form"
                            sx={{ p: '2px', display: 'flex', asgnItems: 'center', width: 400 }}>
                            <InputBase
                                sx={{ ml: 2, flex: 1, }}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                        </Paper>
                    </div>
                    <div className="MenuLink__ md:w-auto xss:w-0 text-lg md:visible xss:invisible font-sans font-bold">
                            <ul className="flex md:justify-end">
                                <li><a className="p-4 hover:text-pink-800 transition delay-150 ease-in-out " href="#home">Home</a></li>
                                <li><a className="p-4 hover:text-pink-800 transition delay-150 ease-in-out" href="#projects">Projects</a></li>
                                <li><a className="p-4 hover:text-pink-800 transition delay-150 ease-in-out" href="#skills">Skill</a></li>
                                <li><a className="p-4 hover:text-pink-800 transition delay-150 ease-in-out" href="#about">About</a></li>
                            </ul>
                    </div>
                    <div className="ContactLink__  flex items-center md:visible xss:invisible">
                        <a className="flex font-sans font-bold" href="#contact">
                            <PhoneIcon className="mx-2 "/> Contact</a>
                        <div className="Darkmode__ ">
                            <button><Brightness4Icon /></button>
                        </div>
                        <div className="MoreInfo">
                            <MoreVertIcon />
                        </div>
                    </div>
                </div>
                <div className="ToggleSidebar__ flex items-center justify-end pr-4 md:invisible xss:visible xss:basis-10/12">
                    <MenuIcon 
                        type="button" className="MenuIcon__ cursor-pointer right-0" 
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    />
                </div>
            </div>
            
        </>
    )
    
}


export default Header;