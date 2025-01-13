import React, { useRef } from 'react'
import Containt1 from '../landingPageComp/Containt1'
import Containt2 from '../landingPageComp/Containt2'
import Footer from '../landingPageComp/Footer'
import Corousell from '../landingPageComp/Corousell'
import { useState } from 'react'
import Navbar from '../landingPageComp/Navbar'
import img from '../image/logo.png'
import Article from '../landingPageComp/Article'
import AboutCont from '../landingPageComp/AboutCont'
import ShowUnit from '../landingPageComp/ShowUnit'


const LandingPage = () => {
  const [showList,setShowList]=useState(false)
  const ref= useRef(null)
  const handleScroll=()=>{
    // ref.current?.scrollIntoView({behavior:'smooth'})
  }
  const MenuNav = [
    {
      nama: 'Home',
      target: ""
    },
    {
      nama: 'Contact',
      target: ""
    },
    {
      nama: 'About',
      target: ""
    },
    {
      nama: 'Comemnts',
      target: "Coments"
    },
  ]
  return (
    <div className='w-full '>
      
    {/* <nav className="fixed top-0 z-20 w-full bg-white border-b border-gray-200 shadow-md">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={img}
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Pinjemin
          </span>
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-center border-2 me-3 border-cyan-700 text-cyan-700"
          >
            Login
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-center text-white border-2 border-cyan-700 bg-cyan-700"
          >
            Register
          </button>
          <button
          onClick={()=>setShowList(showList?false:true)}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
          
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center ${showList?'block':'hidden'} justify-between  w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky`}
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {
              MenuNav.map((e, i) => (
                <li key={i} onClick={handleScroll}>
                  <a
                    href={e.target}
                    className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    {e.nama}
                  </a>
                </li>
              ))
            }


          </ul>
        </div>
      </div>
    </nav> */}

      <div className=''>
        <Navbar></Navbar>
        <Containt1></Containt1>
        <AboutCont></AboutCont>
        <ShowUnit></ShowUnit>
        {/* <Containt2></Containt2> */}
        <Corousell ></Corousell>
        <Article/>
        <Footer/>
      </div>
    </div>
  )
}

export default LandingPage
