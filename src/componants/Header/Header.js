import React from 'react';

const Header = () => {
    return (
        <header className='w-full h-[80px] leading-[80px] flex items-center'>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* ========= Logo =========== */}
                    <div className="flex items-center gap-[10px]">
                        <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>N</span>

                        <div className="leading-[20px]">
                            <h2 className="text-xl text-headingColor font-[700]">Nazmul</h2>
                            {/* <p className="text-smallTextColor text-[16px] font-[500] ">personal</p> */}
                        </div>
                    </div>
                    {/* ============ logo end ============ */}
                    {/* ============ menu start ============ */}
                    <div className="menu">
                        <ul className='flex items-center gap-10'>
                            <li><a className='text-headingColor font-[600]' href="#about">About</a></li>
                            <li><a className='text-headingColor font-[600]' href="#services">Services</a></li>
                            <li><a className='text-headingColor font-[600]' href="#project">Projects</a></li>
                            <li><a className='text-headingColor font-[600]' href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    {/* ============ menu end ============ */}
                    {/* ============ menu right start ============ */}
                    <div className="flex items-center gap-4">
                        <button className='flex items-center gap-2 font-[600] text-headingColor border border-solid border-headingColor rounded-[8px] py-2 px-4 max-h-[40px] hover:bg-primaryColor hover:text-white hover:font-[500] ease-in duration-400'>
                            <i className="ri-send-plane-line"></i> Let's Talk
                        </button>

                        <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                    {/* ============ menu right end ============ */}

                </div>
            </div>
        </header>
    );
};

export default Header;