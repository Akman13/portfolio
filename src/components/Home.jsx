import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me-blurred.jpg';
import { Link } from "react-scroll";

function Home() {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#FAFAFA] pb-6 sm:pb-0"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-1/3 sm:h-1/3">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E]">
                            Hi there, my name is
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#112D4E]">
                            Akram Mansour
                        </h2>
                        <h3 className="text-3xl mt-2">
                            I'm a Software Engineer
                        </h3>
                    </div>

                    <div className="mb-6 sm:mb-0">
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 mt-7 mb-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            About Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="max-h-[250px] max-w-[250px] md:max-h-[350px] md:max-w-[350px] md:h-96 md:w-96 mx-auto relative">
                    <img
                        src={me}
                        alt="my profile"
                        className="mx-auto sm:h-95 sm:w-95 md:w-full rounded-full object-cover border-8 border-[#1E56A0] shadow-2xl"
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;