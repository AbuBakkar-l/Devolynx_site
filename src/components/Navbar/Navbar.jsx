import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitter, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
return (
    <>
    {/* top-bar */}
    <div className='flex justify-between p-3 items-center'>
        <div className='flex gap-4 cursor-pointer'>
            <span className='flex items-center gap-1'> +1 (718) 73493 <IoIosCall /> </span>
            <span className='flex items-center'>info@example.com <MdEmail /></span>
        </div>
        <div className='flex gap-3'>
                <a href='/'><FaFacebook/></a>
                <a href='/'><FaTwitter/></a>
                <a href='/'><FaInstagram/></a>
                <a href='/'><FaYoutube/></a>
                <a href='/'><FaGithub/></a> 
        </div>
    </div>
        <header className='flex justify-between p-5 bg-slate-100 text-black items-center'>
            <div className='cursor-pointer text-lg'> <Link to="/">Devolynx</Link></div>
            <div className=''>
                <ul className='flex gap-x-5'>    
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Pricing">Pricing</Link></li>
                </ul>
            </div>
            <div>
                <button className='bg-sky-600 px-2 py-1 rounded'>Get a Quote</button>
            </div>
        </header>
    </>
)
}

export default Navbar
