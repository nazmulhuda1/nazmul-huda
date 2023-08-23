import React from 'react';

import HeroImg from '../../assets/images/me.webp';
// import CountUp from 'react-countup' 12.6k 4.4k 


const Hero = () => {
    return (
        <section className='pt-0' id='about'>
            <div className="container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/* =========== hero left content =========== */}
                    <div className="w-full md:basis-1/2">
                        <h5
                            data-aos='fade-right'
                            data-aos-duration='1500'
                            className='text-smallTextColor font-[300] text-[16px] mb-6'>Welcome to my world!
                        </h5>
                        <h1
                            data-aos='fade-up'
                            data-aos-duration='1500'
                            className='text-headingColor font-[800] text-[1.4rem] sm:text-[40px] leading-[35px] sm:leading-[45px] mb-8' >I'm Nazmul Huda <br />
                            <span className=''>Frontend Developer </span>
                        </h1>

                        <div
                            data-aos='fade-up'
                            data-aos-duration='1800'
                            data-aos-delay='200'
                            className="flex items-center gap-6 mt-7">
                            <a href="#contact">
                                <button className='flex items-center gap-2 bg-primaryColor font-[500] hover:bg-primaryColor  text-headingColor ease-in duration-300 py-2 px-4 rounded-[8px] '>
                                    <i className="ri-mail-line"></i> Hire Me
                                </button>
                            </a>
                            <a href="#portfolio" className='text-headingColor text-[16px] font-[600] border-b border-slid border-smallTextColor'>See Portfolio</a>
                        </div>

                        <p data-aos='fade-left'
                            data-aos-duration='1500'
                            className='flex gap-2 font-[500] text-[16px] text-smallTextColor mt-14 leading-7 sm:pl-1 sm:pr-10'>
                            <span><i className="ri-apps-2-line"></i></span>
                            Front-end Web Developer. High level experience in front-end web application
                            development knowledge and producing quality work.
                        </p>

                        <div
                            data-aos='fade-right'
                            data-aos-duration='1800'
                            className="flex items-center mt-8 gap-7 ">
                            <span className='text-smallTextColor font-[600] text-[15px]'>
                                Follow Me :
                            </span>
                            <span>
                                <a className='text-smallTextColor font-[600] text-[18px] flex items-center' href="/">
                                    <i className="ri-youtube-line"></i>
                                </a>
                            </span>
                            <span>
                                <a className='text-smallTextColor font-[600] text-[18px] flex items-center' href="/">
                                    <i className="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a className='text-smallTextColor font-[600] text-[18px] flex items-center' href="/">
                                    <i className="ri-facebook-line"></i>
                                </a>
                            </span>
                            <span>
                                <a className='text-smallTextColor font-[600] text-[18px] flex items-center' href="/">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    {/* =========== hero left end =========== */}
                    {/* =========== hero img  =========== */}
                    <div className="md:basis-1/2 mt-10 sm:mt-0 ">
                        <figure className='flex items-center justify-center'>
                            <img
                                data-aos='fade-left'
                                data-aos-duration='1800'
                                className='object-cover bg-cover bg-primaryColor h-[500px] p-2 rounded-t-full flex justify-start'
                                src={HeroImg} alt="" />
                        </figure>
                    </div>
                    {/* =========== hero img end =========== */}
                </div>
            </div>
        </section>
    );
};

export default Hero;