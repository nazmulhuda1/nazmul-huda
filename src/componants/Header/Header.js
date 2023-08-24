import React, { useEffect, useRef } from 'react';

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();
        return window.removeEventListener('scroll', stickyHeaderFunc)
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };

    const menuToggle = () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('show_menu')
    };
    return (
        <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center ease-in duration-300'>
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
                    <div className="menu" ref={menuRef} onClick={menuToggle} >
                        <ul className='flex items-center gap-10'>
                            <li>
                                <a onClick={handleClick} className='text-headingColor font-[600]' href="#about">About</a>
                            </li>
                            <li>
                                <a onClick={handleClick} className='text-headingColor font-[600]' href="#services">Services</a>
                            </li>
                            <li>
                                <a onClick={handleClick} className='text-headingColor font-[600]' href="#projects">Projects</a>
                            </li>
                            <li>
                                <a onClick={handleClick} className='text-headingColor font-[600]' href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* ============ menu end ============ */}
                    {/* ============ menu right start ============ */}
                    <div className="flex items-center gap-4">
                        <button className='flex items-center gap-2 font-[600] text-headingColor border border-solid border-headingColor rounded-[8px] py-2 px-4 max-h-[40px] hover:bg-primaryColor hover:text-white hover:font-[500] ease-in duration-400'>
                            <i className="ri-send-plane-line"></i> Let's Talk
                        </button>

                        <span onClick={menuToggle} className='text-2xl text-smallTextColor md:hidden cursor-pointer' >
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