import React from "react";
import './About.css'

function About({ content }) {
    const resumeLink = content[1]?.fields.resume_link;

    return (
        <div
            name="about"
            id="about"
            className="w-full min-h-screen sm:h-screen bg-[#FAFAFA] relative pt-20"
        >
            <div className="flex flex-col justify-center pt-[120px] md:pt-0 items-center w-full h-full">
                <p className="text-4xl font-bold inline border-b-4 border-cyan-500 pt-8 lg:pt-20 absolute top-20 ">
                    About
                </p>

                <div className="w-full sm:w-max px-4 sm:px-6 justify-between -mt-4 sm:-mt-0 py-6 sm:py-16 rounded-md bg-[#4188ba] bg-opacity-100 flex flex-col items-center">
                    <div className="sm:w-2/3 sm:max-w-[1000px]">


                        <article className="text-md md:text-xl text-white mb-0 sm:mb-6 md:mb-12 md:leading-8 grow">
                            <p>
                                {content[0]?.fields.intro1}
                            </p>

                            <p className="mt-2 sm:mt-6">
                                {content[0]?.fields.intro2}
                            </p>
                            <p className="mt-2 sm:mt-6">
                                {content[0]?.fields.intro3}
                            </p>
                        </article>

                        <div className="flex space-between md:self-start mt-4 sm:mt-12">

                            <form action={resumeLink} target="_blank" rel="noopener noreferrer" >
                                <button className="resume">
                                    Resume
                                    <span></span>
                                </button>
                            </form>

                            <div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default About