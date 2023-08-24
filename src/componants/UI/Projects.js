import React, { useEffect, useState } from 'react';
import data from '../../assets/data/portfolioData';
import Modal from './Modal';

const Projects = () => {

    const [nexItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    }
    const showModalHandler = id => {
        setShowModal(true)
        setActiveID(id)
    }
    useEffect(() => {
        if (selectTab === 'all') {
            setPortfolios(data)
        }
        if (selectTab === 'web-design') {
            const filteredData = data.filter(item => item.category === 'Web Design')
            setPortfolios(filteredData)
        }
        if (selectTab === 'ux-design') {
            const filteredData = data.filter(item => item.category === 'Ux')
            setPortfolios(filteredData)
        }
    }, [selectTab])

    return (
        <section id='projects' className='relative'>
            <div className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <p className='text-smallTextColor text-xl font-[500] mb-3'>Explore my work samples that I have done so far</p>
                        <h2 className='text-headingColor font-[700] text-[40px]'>Portfolio</h2>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={() => setSelectTab('all')} className='text-smallTextColor border border-solid border-secondaryColor py-2 px-4 rounded-[8px] shadow-md'>All
                        </button>
                        <button onClick={() => setSelectTab('web-design')} className='text-smallTextColor border border-solid border-secondaryColor py-2 px-4 rounded-[8px] shadow-md'>Web Design
                        </button>
                        <button onClick={() => setSelectTab('ux-design')} className='text-smallTextColor border border-solid border-secondaryColor py-2 px-4 rounded-[8px] shadow-md'>UX Design
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {
                        portfolios?.slice(0, nexItems)?.map((portfolio, index) =>
                            <>
                                <div
                                    key={index}
                                    data-aos='fade-zoom-in'
                                    data-aos-delay='50'
                                    data-aos-duration='1200'
                                    className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                                    <figure>
                                        <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
                                    </figure>

                                    <div className="w-full h-full bg-primaryColor absolute z-[5] bg-opacity-40 top-0 left-0 hidden group-hover:block rounded-[8px]">
                                        <div className="flex items-center justify-center w-full h-full">
                                            <button onClick={() => showModalHandler(portfolio.id)} className='bg-secondaryColor hover:bg-headingColor text-headingColor hover:text-secondaryColor font-[500] text-[18px] py-2 px-4 rounded-[8px] ease-in duration-200'>See Details</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    };
                </div>

                <div className="text-center mt-6">
                    {
                        nexItems < portfolios.length && data.length > 6 &&
                        <>
                            <button onClick={loadMoreHandler} className='bg-primaryColor hover:bg-secondaryColor text-headingColor  font-[500] text-[18px] py-2 px-4 rounded-[8px] ease-in duration-200'>Loade more</button>
                        </>
                    }

                </div>

            </div>
            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
            }
        </section>
    );
};

export default Projects;