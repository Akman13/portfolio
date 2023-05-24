import React from "react";

function Skills() {
    return (
        <div name='skills' className='w-full h-screen bg-[#FAFAFA] pt-20 relative'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className=' w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center absolute top-20 pt-4 lg:pt-20'>Skills</p>
                </div>


                <div className='mx-auto sm:w-full grid grid-cols-2 sm:grid-cols-5 sm:grid-rows-2 gap-4 text-center py-8'>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" className="object-contain" />
                        {/* <p className='my-4'>HTML</p> */}
                    </div>

                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" className="object-contain" />
                        {/* <p className='my-4'>CSS</p> */}
                    </div>

                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS" className="object-contain" />
                        {/* <p className='my-4'>Tailwind CSS</p> */}
                    </div>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" className="object-contain max-h-full" />
                        {/* <p className='my-4'>JavaScript</p> */}
                    </div>

                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React.js" title="React.js" className="object-contain" />
                        {/* <p className='my-4'>React.js</p> */}
                    </div>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" className="object-contain" />
                        {/* <p className='my-4'>Node.js</p> */}
                    </div>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express.js" title="Express.js" className="object-contain" />
                        {/* <p className='my-4'>Express.js</p> */}
                    </div>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL" className="object-contain" />
                        {/* <p className='my-4'>PostgreSQL</p> */}
                    </div>
                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" title="GitHub" className="object-contain" />
                        {/* <p className='my-4'>GitHub</p> */}
                    </div>

                    <div className='shadow-sm shadow-[#4188ba] hover:scale-110 duration-300 flex aspect-square max-h-16 lg:max-h-56 md:max-h-44 md:max-h-44 sm:max-h-36 '>
                        <img src="https://user-images.githubusercontent.com/25181517/186884153-99edc188-e4aa-4c84-91b0-e2df260ebc33.png" alt="Ubuntu" title="Ubuntu" className="object-contain" />
                        {/* <p className='my-4'>Ubuntu</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;