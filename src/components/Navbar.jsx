import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/ak.webp"
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
                <img src={logo} className='mx-2' width={80} height={60} />
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://linkedin.com/in/anik005" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'><FaLinkedin/></a>
            <a href="https://www.github.com/anikkk" target='_blank' rel='noopener noreferrer' aria-label='Github'><FaGithub/></a>
            <a href="https://www.instagram.com/anik_005" target='_blank' rel='noopener noreferrer' aria-label='Instagram'><FaInstagram/></a>
            <a href="https://linkedin.com/in/anik005" target='_blank' rel='noopener noreferrer' aria-label='Twitter'><FaXTwitter/></a>
        </div>
    </nav>
  )
}

export default Navbar
