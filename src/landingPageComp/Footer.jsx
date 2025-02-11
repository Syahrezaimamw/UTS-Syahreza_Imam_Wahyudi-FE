import React from 'react'
import img from '../image/logo.png'
import { FaYoutube, FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const ic=[
        <FaTwitter/>,<FaInstagram/>,<FaLinkedin/>,<FaYoutube/>
    ]
    const Data = [
        {
            title: 'Pinjemin',
            isi: ['Home', 'About', 'Pricing', 'Features']
        },
        {
            title: 'Product',
            isi: ['Sepeda Motor', 'Mobil', 'Sepeda Listrik', 'Kendaraan Lainnya']
        },
        {
            title: 'Resource',
            isi: ['FAQs', 'Quick Start', 'Documentation', 'User Guide']
        },
        {
            title: 'Blogs',
            isi: ['News', 'Tips and Tricks', 'New Updates', 'Events']
        },
    ]
    return (
        <footer className="w-full ">
            <div className="max-w-screen-xl mx-auto ">
                <div className="grid grid-cols-2 gap-3 py-10 sm:grid-cols-4 lg:grid-cols-6 md:gap-8 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div className="mb-10 col-span-full lg:col-span-2 lg:mb-0">
                        <div className='flex items-center justify-center md:justify-start'>
                            <img src={img} alt="" className='w-[30px]' />
                            <p className='text-2xl font-medium ms-2'>Pinjemin</p>
                        </div>
                        <p className="py-8 text-sm text-center text-gray-500 lg:max-w-xs lg:text-left">
                            Trusted in more than 100 countries &amp; 5 million customers. Have any
                            query ?
                        </p>
                        <a
                        
                            className="py-2.5 px-5 h-9 block w-fit bg-cyan-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-cyan-700 lg:mx-0"
                        >
                            Contact us
                        </a>
                    </div>
               
                    {
                        Data.map((e, i) => (
                            <div className="text-left lg:mx-auto " key={i}>
                                <h4 className="text-lg font-medium text-gray-900 mb-7">{e.title}</h4>
                                <ul className="text-sm transition-all duration-500">
                                    {e.isi.map((en, ind) => (
                                        <li className="mb-6" key={ind}>
                                            <a
                                            
                                                className="text-gray-600 hover:text-gray-900"
                                            >
                                                {en}
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        ))
                    }


                </div>
                {/*Grid*/}
                <div className="border-t border-gray-200 py-7">
                    <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-500 ">
                            ©<a href="https://pagedone.io/">Pinjemin</a> 2024, All rights
                            reserved.
                        </span>
                        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                            {
                                ic.map((e,i)=>(
                                    
                            <a
                            key={i}
                                className="flex items-center justify-center text-white bg-gray-600 rounded-full w-9 h-9 hover:bg-cyan-600"
                            >
                              {e}
                            </a>
                                ))
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
