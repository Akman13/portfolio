import React from "react";
import './About.css'

function About() {
    return (
        <div
            name="about"
            id="about"
            className="w-full h-screen bg-[#FAFAFA] relative pt-20 relative"
        >
            <div className="flex flex-col justify-center pt-[120px] md:pt-0 items-center w-full h-full">
                <p className="text-4xl font-bold inline border-b-4 border-cyan-500 pt-8 lg:pt-20 absolute top-20 ">
                    About
                </p>

                <div className="w-full px-6 justify-between py-16 rounded-md bg-[#4188ba] bg-opacity-100 flex flex-col items-center">
                    <div className="sm:w-2/3 sm:max-w-[1000px]">


                        <p className="text-lg text-white mb-6 md:mb-12">
                            {/* TODO: Write up my About */}
                            A software developer with experience in building Responsive and
                            Scalable Web apps. I am well-knowledged in UI/UX principles and
                            practices. In addition to software development, I am also a
                            technical writer--simplifying topics/concepts on the web.
                        </p>


                        {/* <a href="https://drive.google.com/file/d/1TpmjH7kE261_3Y83HJ1S9V-8waVYbHoi/view?usp=sharing" target="_blank" rel="noopener noreferrer" className=" md:self-start mt-12"> */}
                        <form action="https://drive.google.com/file/d/1TpmjH7kE261_3Y83HJ1S9V-8waVYbHoi/view?usp=sharing" target="_blank" rel="noopener noreferrer" className=" md:self-start mt-12">
                            <button className="resume">
                                Resume
                                <span></span>
                            </button>
                        </form>
                        {/* </a> */}

                    </div>
                </div>

            </div>
            
            {/* TODO: Projects Carousel */}
            {/* TODO: Contact section */}
            {/* TODO: CMS integration */}

            {/* TODO: Deploy to GitHub */}
            {/* TODO: Improve TrackAJet readme and get a gif from it */}
            {/* TODO: Update Resume (include portfolio, format project section) */}
            {/* TODO: Update GitHub profile */}
        </div>
    )
}

export default About