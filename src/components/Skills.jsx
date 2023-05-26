import React from "react";

function Skills( {content} ) {
    return (
        <div name='skills' className='w-full h-screen bg-[#FAFAFA] pt-20 relative'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className=' w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center absolute top-20 pt-4 lg:pt-20'>Skills</p>
                </div>


                <div className='mx-auto sm:w-full grid grid-cols-2 sm:grid-cols-5 sm:grid-rows-2 gap-4 text-center py-8'>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src={content?.fields.skills[0].skill_logo_source} alt={content?.fields.skills[0].skill_name} title={content?.fields.skills[0].skill_name} className="object-contain" />
                        {/* <p className='my-4'>HTML</p> */}
                    </div>

                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src={content?.fields.skills[1].skill_logo_source} alt={content?.fields.skills[1].skill_name} title={content?.fields.skills[1].skill_name} className="object-contain" />
                        {/* <p className='my-4'>CSS</p> */}
                    </div>

                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src={content?.fields.skills[2].skill_logo_source} alt={content?.fields.skills[2].skill_name} title={content?.fields.skills[2].skill_name} className="object-contain" />
                        {/* <p className='my-4'>Tailwind CSS</p> */}
                    </div>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src={content?.fields.skills[3].skill_logo_source} alt={content?.fields.skills[3].skill_name} title={content?.fields.skills[3].skill_name} className="object-contain max-h-full" />
                        {/* <p className='my-4'>JavaScript</p> */}
                    </div>

                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src={content?.fields.skills[4].skill_logo_source} alt={content?.fields.skills[4].skill_name} title={content?.fields.skills[4].skill_name} className="object-contain" />
                        {/* <p className='my-4'>React.js</p> */}
                    </div>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src={content?.fields.skills[5].skill_logo_source} alt={content?.fields.skills[5].skill_name} title={content?.fields.skills[5].skill_name} className="object-contain" />
                        {/* <p className='my-4'>Node.js</p> */}
                    </div>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src={content?.fields.skills[6].skill_logo_source} alt={content?.fields.skills[6].skill_name} title={content?.fields.skills[6].skill_name} className="object-contain" />
                        {/* <p className='my-4'>Express.js</p> */}
                    </div>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src={content?.fields.skills[7].skill_logo_source} alt={content?.fields.skills[7].skill_name} title={content?.fields.skills[7].skill_name} className="object-contain" />
                        {/* <p className='my-4'>PostgreSQL</p> */}
                    </div>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src={content?.fields.skills[8].skill_logo_source} alt={content?.fields.skills[8].skill_name} title={content?.fields.skills[8].skill_name} className="object-contain" />
                        {/* <p className='my-4'>GitHub</p> */}
                    </div>

                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src={content?.fields.skills[9].skill_logo_source} alt={content?.fields.skills[9].skill_name} title={content?.fields.skills[9].skill_name} className="object-contain" />
                        {/* <p className='my-4'>Ubuntu</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;