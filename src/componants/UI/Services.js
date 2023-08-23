import React from 'react';
import fontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/design.png'
import backDataImg from '../../assets/images/backend.png'
import psdImg from '../../assets/images/design.png'
import appsImg from '../../assets/images/apps.png'

const Services = () => {
    return (
        <section id='services'>
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className='text-headingColor font-[800] text-[2.4em] mb-6'>What services I provide</h2>
                    <p className='text-smallTextColor md:max-w-5xl lg:mx-auto font-[500] text-[16px] leading-7'>I'm a front-end web developer. For many years I'm responsible as a Front-end Web Developer. There are some technologies that I know such as, HTML5, CSS3, Bootstrap5, JavaScript, React.js, Redux with toolkit, Next.js. Also, tools that I use for projects purposing like Figma for UI and Git & Github for version controlling. My experience has provided me with the experience and technical skills necessary to successfully support a company & its IT team with proper & sustainable software solutions in any web-based platform.</p>
                </div>

                <div className="flex justify-center flex-col sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-smallTextColor antialiased text-sm text-semibold">

                            {/* =========== vertical line running through the middle ======== */}
                            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                            {/* ======== left card ======== */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        {/* single card */}
                                        <div data-aos='fade-right'
                                            data-aos-duration='1200'
                                            className="bg-secondaryColor p-4 rounded shadow group hover:bg-primaryColor hover:text-white cursor-pointer ease-in duration-150">
                                            <h3 className='text-headingColor font-[700] mb-3 group-hover:text-headingColor group-hover:font-[600] text-xl'>Web Design</h3>
                                            <p className='text-[15px] '>Responsive modern website design using Html5, Css3, Javascript, scss, bootstrap5 with w3 validation, cross browser compatibility, readable code, nice structured and many more.</p>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={fontendImg} alt="" />
                                        </figure>
                                    </div>
                                </div>


                            </div>

                            {/* ====== right card ======= */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        {/* single card */}
                                        <div data-aos='fade-left'
                                            data-aos-duration='1400'
                                            className="bg-secondaryColor p-4 rounded shadow group hover:bg-primaryColor hover:text-white cursor-pointer ease-in duration-150">
                                            <h3 className='text-headingColor font-[700] mb-3 group-hover:text-headingColor group-hover:font-[600] text-xl'>Front-end Development</h3>
                                            <p className='text-[15px] '>Fully Responsive modern single page web application using react.js, redux, firebase, scss, bootstrap / reactStrap with reuseable components, maintainable code, API integration etc.</p>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={backendImg} alt="" />
                                        </figure>
                                    </div>
                                </div>


                            </div>

                            {/* ======== left card ======== */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        {/* single card */}
                                        <div data-aos='fade-right'
                                            data-aos-duration='1500'
                                            className="bg-secondaryColor p-4 rounded shadow group hover:bg-primaryColor hover:text-white cursor-pointer ease-in duration-150">
                                            <h3 className='text-headingColor font-[700] mb-3 group-hover:text-headingColor group-hover:font-[600] text-xl'>Frontend with Backend</h3>
                                            <p className='text-[15px] '>Fullstack web application development using Next.js, API routes, mongoDB database, with payment integration, third Party api integration etc. Scalable, maintainable code.</p>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={backDataImg} alt="" />
                                        </figure>
                                    </div>
                                </div>


                            </div>

                            {/* ====== right card ======= */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        {/* single card */}
                                        <div data-aos='fade-left'
                                            data-aos-duration='1200'
                                            className="bg-secondaryColor p-4 rounded shadow group hover:bg-primaryColor hover:text-white cursor-pointer ease-in duration-150">
                                            <h3 className='text-headingColor font-[700] mb-3 group-hover:text-headingColor group-hover:font-[600] text-xl'>PSD to HTML</h3>
                                            <p className='text-[15px] '>I will convert any kind of psd file using html5, css3, javascript, bootstrap with fully responsive, w3 validation, cross browser compatibility, readable code, nice structured and many more</p>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={psdImg} alt="" />
                                        </figure>
                                    </div>
                                </div>


                            </div>
                            {/* ======== left card ======== */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        {/* single card */}
                                        <div data-aos='fade-right'
                                            data-aos-duration='1200'
                                            className="bg-secondaryColor p-4 rounded shadow group hover:bg-primaryColor hover:text-white cursor-pointer ease-in duration-150">
                                            <h3 className='text-headingColor font-[700] mb-3 group-hover:text-headingColor group-hover:font-[600] text-xl'>Figma to React / NextJs</h3>
                                            <p className='text-[15px] '>I will convert any kind of figma file to react.js or next.js with reuseable components, firebase authentication, mongoDB with next.js, maintainable code, API integration, etc.</p>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={appsImg} alt="" />
                                        </figure>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;