import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact( {content} ) {
    return (
        <div name='contact' className='relative w-full h-screen bg-[#FAFAFA] relative flex p-4 pt-20 overflow-hidden'>

            <div className="mx-auto p-4 flex flex-col justify-center w-full h-full items-center">


                <div className='pt-4 pb-8 flex flex-col w-full justify-center items-center absolute top-20 lg:pt-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Contact</p>

                    <p className='md:text-lg text-[#163172] p-4 text-center'>If you're interested in working together or just want to chat, don't hesitate to reach out!</p>
                </div>


                <form action="https://formspree.io/f/xbjeedpj"
                    method="POST" className="flex flex-col mx-auto w-full p-2 pt-4 mt-24 lg:mt-0 md:pt-8  md:max-w-[550px] justify-center bg-[#D6E4F0] md:p-4 rounded-xl">

                    <input className='shadow-sm shadow-[#4188ba] p-2 rounded-md' type="text" placeholder='Name' name='name' required />

                    <input className='my-4 p-2 shadow-sm shadow-[#4188ba] rounded-md' type="email" placeholder='Email' name='email' required />

                    <textarea className='shadow-sm shadow-[#4188ba] p-2 rounded-md max-h-[105px] md:max-h-[150px] lg:max-h-[300px]' name="message" rows="10" placeholder='Message'></textarea>

                    <button type="submit" className='collaborate my-4 sm:my-8 mx-auto flex items-center'>Let's Collaborate
                    </button>


                </form>

                <div className="flex justify-evenly space-x-5 w-[150px] h-fit pt-4 h-auto">
                    <a href={content?.fields.github_link} target="_blank" rel="noopener noreferrer" className="h-fit">
                        <FaGithub stroke="#005691" fill="#005691" className="w-[40px] h-[40px] hover:scale-110 duration-300"></FaGithub>

                    </a>

                    <a href={content?.fields.linkedin_link} target="_blank" rel="noopener noreferrer" className="h-fit m-0">
                        <FaLinkedin stroke="#005691" fill="#005691" className="w-[40px] h-[40px] hover:scale-110 duration-300"></FaLinkedin>

                    </a>

                </div>

            </div>

            <footer className="absolute flex flex-col w-full justify-around bottom-0 left-0 z-40 h-[55px] block border-t-2 border-[#D6E4F0] pt-2">

                <div className="w-fit mx-auto flex flex-col items-center">
                    <p>© Akram Mansour 2023</p>

                    <a href="https://buttercms.com" target="_blank" rel="noopener noreferrer" className="-mt-2 sm:mt-0">
                        <img src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt="ButterCMS Logo" className="max-h-[30px]" />
                    </a>
                </div>

            </footer>


        </div>
    )
}

export default Contact