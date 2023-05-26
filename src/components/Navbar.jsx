import React, { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { BsPersonVcardFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

function Navbar( {content} ) {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const resumeLink = content?.fields.resume_link;
    const linkedInLink = content?.fields.linkedin_link;
    const githubLink = content?.fields.github_link;

    return (
        <div className='top-0 sticky w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white z-40'>
            <div>
                <h1 className='text-2xl italic'>A.M.</h1>
            </div>

            {/* menu */}
            <ul className='hidden md:flex md:items-center gap-x-8'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <li>
                    {' '}
                    <form action={resumeLink} target="_blank" rel="noopener noreferrer" className="">
                        <button className="resume-nav">
                            Resume
                            <span></span>
                        </button>
                    </form>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href={resumeLink} target="_blank" rel="noopener noreferrer"
                        >
                            Resume <BsPersonVcardFill size={30} />

                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href={linkedInLink} target="_blank" rel="noopener noreferrer"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href={githubLink} target="_blank" rel="noopener noreferrer"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Navbar;