import React, { useState } from 'react'
import img from '../image/logo.png'
import { Link } from 'react-scroll'
import Buttons from './Buttons'
const Navbar = () => {
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)
  const [showList, setShowList] = useState(false)
  const MenuNav = [
    {
      nama: 'Home',
      target: "home"
    },

    {
      nama: 'About',
      target: "about"
    },
    {
      nama: 'Unit',
      target: "show"
    },
    {
      nama: 'Comments',
      target: "comments"
    },
    {
      nama: 'Article',
      target: "article"
    },

  ]
  return (

    <nav className="fixed top-0 z-20 w-full bg-white border-b border-gray-200 shadow-md">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a
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
          <div className='hidden md:block'>

        <Buttons/>
          </div>
          <button
            onClick={() => setShowList(showList ? false : true)}
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
          className={`items-center ${showList ? 'block' : 'hidden'} justify-between  w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky`}
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {
              MenuNav.map((e, i) => (
                <li key={i}>
                  <Link
                    activeClass="active"
                    to={e.target}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={closeMenu}
                    className="block px-3 py-2 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0"
                  >
                      {e.nama}
                  </Link>

              
                </li>
              ))
            }
<div className='flex justify-center w-full mt-2 md:hidden'>

<Buttons/>
  </div>

          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Navbar
