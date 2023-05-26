import React from "react";
import { Carousel } from '@mantine/carousel';
import './Projects.css'
import goodCatchGif from '../../assets/carousel/good-catch/user-signup.gif'
import goodCatchStatic from '../../assets/carousel/good-catch/home-page.png'
import pragmaticEnergyStatic from '../../assets/carousel/pragmatic-energy/default-display.png'
import pragmaticEnergyGif from '../../assets/carousel/pragmatic-energy/spotlight-station.gif'
import trackAJetStatic from '../../assets/carousel/trackajet/trackajet-home-page.png'
import trackAJetGif from '../../assets/carousel/trackajet/jet-tracked.gif'
import portfolioStatic from '../../assets/carousel/portfolio/home-page.png'

function Projects( {content} ) {

    const carouselStyle = {
        control: {
            '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
            },
        },
    }

    return (
        <div name='projects' className='w-full h-screen bg-[#FAFAFA] relative pt-20 overflow-hidden'>
            
            <div className='mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 pt-4 lg:pt-20 absolute top-20'>
                        Projects
                    </p>
                </div>


                {/* Carousel Container */}
                <div className="flex justify-center mt-8 min-h-[60%] max-w-full max-h-fit overflow-hidden md:h-[55%] md:w-[90%] mx-auto md:mt-0 ">

                    <Carousel sx={{ flex: 1 }} mx="auto" withIndicators slideSize="80%" slideGap="lg" controlSize={25} width="100%" height="100%" controlsOffset="xl" styles={carouselStyle} className="rounded-lg">

                        <Carousel.Slide className="rounded-lg bg-[#D6E4F0] h-full pr-0 md:mr-4 mr-2">

                            <div className="flex flex-col justify-between md:flex-row h-full p-2 md:justify-between md:h-[90%] md:p-4">

                                {/* Preview Image+Gif div */}
                                <div className="relative md:w-[60%] h-auto self-center">
                                    <img src={content[0]?.fields.project[0].project_image_static} alt="GoodCatch project preview" className="static rounded-md shadow-md max-w-[100%] max-h-[100%]" />

                                    <img src={content[0]?.fields.project[0].project_image_gif} alt="GoodCatch project preview" className="rounded-md shadow-md" />
                                </div>

                                {/* Text */}
                                <section className="md:w-[40%] md:px-4 md:h-fit self-center text-center">
                                    <h3 className="text-2xl text-[#163172] font-bold border-b-2 border-cyan-500 md:pt-4 md:mb-2 min-w-[50%] inline-block">{content[0]?.fields.project[0].project_title}</h3>

                                    <div className="my-1 md:my-2 flex mx-auto justify-between max-w-[50%] md:text-lg">
                                        <a href={content[0]?.fields.project[0].github_repo_source} target="_blank" rel="noopener noreferrer" className="underline mr-1">GitHub</a>
                                        <a href={content[0]?.fields.project[0].demo_link_source} target="_blank" rel="noopener noreferrer" className="underline ml-1">Demo</a>
                                    </div>

                                    <p className="text-sm md:text-lg md:pb-0">
                                    {content[0]?.fields.project[0].project_description}
                                    </p>

                                    <div className="flex justify-around mx-auto max-w-[80%] md:max-w-[60%] mt-2 pb-6">

                                        <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                    </div>
                                </section>

                            </div>
                        </Carousel.Slide>


                        <Carousel.Slide className="rounded-lg bg-[#D6E4F0] h-full pr-0 md:mr-4 mr-2">

                            <div className="flex flex-col justify-evenly md:flex-row h-full p-2 md:justify-between md:h-[90%] md:p-4">

                                {/* Preview Image+Gif div */}
                                <div className="relative md:w-[60%] h-auto self-center">
                                    <img src={content[0]?.fields.project[1].project_image_static} alt="GoodCatch project preview" className="static rounded-md shadow-md max-w-[100%] max-h-[100%]" />

                                    <img src={content[0]?.fields.project[1].project_image_gif} alt="GoodCatch project preview" className="rounded-md shadow-md" />
                                </div>

                                {/* Text */}
                                <section className="md:w-[40%] md:px-4 md:h-fit self-center text-center">
                                    <h3 className="text-2xl text-[#163172] font-bold border-b-2 border-cyan-500 md:pt-4 md:mb-2 min-w-[50%] inline-block">{content[0]?.fields.project[1].project_title}</h3>

                                    <div className="my-1 md:my-2 flex mx-auto justify-between max-w-[50%] md:text-lg">
                                        <a href={content[0]?.fields.project[1].github_repo_source} target="_blank" rel="noopener noreferrer" className="underline mr-1">GitHub</a>
                                        <a href={content[0]?.fields.project[1].demo_link_source} target="_blank" rel="noopener noreferrer" className="underline ml-1">Demo</a>
                                    </div>

                                    <p className="text-sm md:text-lg md:pb-0">
                                        {content[0]?.fields.project[1].project_description}
                                    </p>

                                    <div className="flex justify-around mx-auto max-w-[80%] md:max-w-[60%] mt-2 pb-6">

                                        <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" title="GitHub" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                    </div>
                                </section>

                            </div>
                        </Carousel.Slide>


                        <Carousel.Slide className="rounded-lg bg-[#D6E4F0] h-full pr-0 md:mr-4 mr-2">

                            <div className="flex flex-col justify-evenly md:flex-row h-full p-2 md:justify-between md:h-[90%] md:p-4">

                                {/* Preview Image+Gif div */}
                                <div className="relative md:w-[60%] h-auto self-center">
                                    <img src={content[0]?.fields.project[2].project_image_static} alt="GoodCatch project preview" className="static rounded-md shadow-md max-w-[100%] max-h-[100%]" />

                                    <img src={content[0]?.fields.project[2].project_image_gif} alt="GoodCatch project preview" className="rounded-md shadow-md" />
                                </div>

                                {/* Text */}
                                <section className="md:w-[40%] md:px-4 md:h-fit self-center text-center">
                                    <h3 className="text-2xl text-[#163172] font-bold border-b-2 border-cyan-500 md:pt-4 md:mb-2 min-w-[50%] inline-block">{content[0]?.fields.project[2].project_title}</h3>

                                    <div className="my-1 md:my-2 flex mx-auto justify-between max-w-[50%] md:text-lg">
                                        <a href={content[0]?.fields.project[2].github_repo_source} target="_blank" rel="noopener noreferrer" className="underline mr-1">GitHub</a>
                                        <a href={content[0]?.fields.project[2].demo_link_source} target="_blank" rel="noopener noreferrer" className="underline ml-1">Demo</a>
                                    </div>

                                    <p className="text-sm md:text-lg md:pb-0">
                                        {content[0]?.fields.project[2].project_description}
                                    </p>

                                    <div className="flex justify-around mx-auto max-w-[80%] md:max-w-[60%] mt-2 pb-6">

                                        <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                    </div>
                                </section>

                            </div>
                        </Carousel.Slide>


                        <Carousel.Slide className="rounded-lg bg-[#D6E4F0] h-full pr-0 md:mr-4">

                            <div className="flex flex-col justify-evenly md:flex-row h-full p-2 md:justify-between md:h-[90%] md:p-4">

                                {/* Preview Image+Gif div */}
                                <div className="relative md:w-[60%] h-auto self-center">
                                    <img src={content[0]?.fields.project[3].project_image_static} alt="GoodCatch project preview" className="rounded-md shadow-md max-w-[100%] max-h-[100%]" />

                                </div>

                                {/* Text */}
                                <section className="md:w-[40%] md:px-4 md:h-fit self-center text-center">
                                    <h3 className="text-2xl text-[#163172] font-bold border-b-2 border-cyan-500 pt-4 mb-2 min-w-[50%] inline-block">{content[0]?.fields.project[3].project_title}</h3>

                                    <div className="my-1 md:my-2 flex mx-auto justify-between max-w-[50%] md:text-lg">
                                        <a href={content[0]?.fields.project[3].github_repo_source} target="_blank" rel="noopener noreferrer" className="underline mr-1">GitHub</a>
                                        <a href={content[0]?.fields.project[3].demo_link_source} target="_blank" rel="noopener noreferrer" className="underline ml-1">Demo</a>
                                    </div>

                                    <p className="text-sm md:text-lg md:pb-0">
                                        {content[0]?.fields.project[3].project_description}
                                    </p>

                                    <div className="flex justify-around mx-auto max-w-[80%] md:max-w-[60%] mt-2 pb-6">

                                        <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                        <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" className="object-contain max-w-[15%] sm:max-w-[20%]" />

                                    </div>
                                </section>

                            </div>
                        </Carousel.Slide>

                    </Carousel>

                </div>


            </div>
        </div>
    )
}

export default Projects;