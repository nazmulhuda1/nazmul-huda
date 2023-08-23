import React from 'react';
import portfolios from '../../assets/data/portfolioData';


const Modal = ({ activeID, setShowModal }) => {
    const portfolio = portfolios.find(portfolio => portfolio.id === activeID)
    return (
        <div className='w-full h-full fixed top-0 left-0 z-10 bg-secondaryColor bg-opacity-40'>
            <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-headingColor rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5 ">
                <div>
                    <figure>
                        <img className='rounded-[8px] h-80 w-full' src={portfolio.imgUrl} alt="" />
                    </figure>
                </div>
                <div>
                    <h2 className='text-2xl text-primaryColor font-[700] my-3'>{portfolio.title}</h2>
                    <p className='text-[15px] text-secondaryColor leading-6'>{portfolio.description}</p>

                    <div className="mt-5 flex items-center gap-3 flex-wrap">
                        <h4 className='text-secondaryColor text-[18px] font-[700]'>Technologies:</h4>
                        {
                            portfolio.technologies.map((item, index) => (
                                <span key={index} className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'>{item}</span>
                            ))
                        }
                    </div>
                    <div className="flex gap-5 items-center">
                        <a href={portfolio.siteUrl}>
                            <button className='bg-primaryColor hover:bg-secondaryColor flex items-center gap-2 text-headingColor py-2 px-4 rounded-[8px] my-5 ease-in duration-300'> <i class="ri-external-link-line"></i> Live </button>
                        </a>
                        <a href={portfolio.siteUrl}>
                            <button className='bg-primaryColor hover:bg-secondaryColor flex items-center gap-2 text-headingColor py-2 px-4 rounded-[8px] my-5 ease-in duration-300'> <i class="ri-github-line"></i> Github </button>
                        </a>
                    </div>
                </div>
                <button onClick={() => setShowModal(false)} className='w-[1.8em] h-[1.8em] bg-[white] absolute top-[1em] right-[1em] text-[25px] rounded-lg flex items-center justify-center'> &times; </button>
            </div>
        </div>
    );
};

export default Modal;