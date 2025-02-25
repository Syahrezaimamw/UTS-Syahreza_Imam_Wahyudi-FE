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
import Map from '../landingPageComp/Map'

const LandingPage = () => {


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
    <div className='w-full'>

      <div >
        <Navbar></Navbar>
        <Containt1></Containt1>
        <AboutCont></AboutCont>
        <ShowUnit></ShowUnit>
        {/* <Containt2></Containt2> */}
        <Corousell ></Corousell>
        <Article/>
        <Map/>
        <Footer/>
      </div>
    </div>
  )
}

export default LandingPage
