import React from 'react';

const Contact = () => {
    return (
        <section id='contact'>
            <div className="container">
                <div className="">
                    <h2 className='text-headingColor text-[35px] font-[700] mb-10'>Get In Touch</h2>
                </div>
                <div className="lg:flex items-start   ">
                    <div className="basis-[56%] flex items-center lg:justify-start justify-center gap-4 flex-wrap">
                        <div className="group md:max-w-full sm:w-[46.5%] w-full md:w-[48%] bg-secondaryColor py-5 px-6 rounded-[8px] border-b-2 border-primaryColor shadow-lg leading-7">
                            <h3 className='text-headingColor text-[22px] font-[600]'>Address</h3>
                            <p className='text-smallTextColor text-[16px]'>Bangladesh, Asian Country</p>
                        </div>
                        <div className="group md:max-w-full sm:w-[46.5%] w-full md:w-[48%] bg-secondaryColor py-5 px-6 rounded-[8px] border-b-2 border-primaryColor shadow-lg leading-7">
                            <h3 className='text-headingColor text-[22px] font-[600]'>Phone</h3>
                            <p className='text-smallTextColor text-[16px]'>+880 1303080572</p>
                        </div>
                        <div className="group md:max-w-full sm:w-[46.5%] w-full md:w-[48%] bg-secondaryColor py-5 px-6 rounded-[8px] border-b-2 border-primaryColor shadow-lg leading-7">
                            <h3 className='text-headingColor text-[22px] font-[600]'>Email</h3>
                            <p className='text-smallTextColor text-[16px]'>
                                nazmulhuda3130@gmail.com</p>
                        </div>
                        <div className="group md:max-w-full sm:w-[46.5%] w-full md:w-[48%] bg-secondaryColor py-5 px-6 rounded-[8px] border-b-2 border-primaryColor shadow-lg leading-7">
                            <h3 className='text-headingColor text-[22px] font-[600]'>Location</h3>
                            <p className='text-smallTextColor text-[16px]'>Meherpur - 7100, Bangladesh</p>
                        </div>
                    </div>
                    <div className=" basis-1/2 grid lg:justify-center mt-6 lg:mt-0">
                        <div className="bg-secondaryColor py-7 px-9 rounded-[8px] ">
                            <form action="" className='w-[100%] gap-6  grid'>
                                <input
                                    className='outline-0 border-0 py-2 px-3 w-[100%] bg-[#102048] text-headingColor rounded-md '
                                    type="text" placeholder='Your Name' />
                                <input
                                    className='outline-0 border-0 py-2 px-3 w-[100%] bg-[#102048] text-headingColor rounded-md '
                                    type="text" placeholder='Your Email' />
                                <textarea
                                    className='outline-0 border-0 py-2 px-3 w-[100%] bg-[#102048] text-headingColor rounded-md '
                                    name="" id="" cols="32" rows="4" placeholder='Write Message'>
                                </textarea>
                                <button className='bg-primaryColor text-headingColor text-[18px] font-[300] w-[150px] py-2 px-4 rounded-[8px] hover:bg-secondaryColor ease-in duration-300 shadow-lg border  border-primaryColor hover:border-primaryColor hover:border'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;