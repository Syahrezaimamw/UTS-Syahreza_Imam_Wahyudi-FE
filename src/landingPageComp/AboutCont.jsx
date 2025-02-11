import React from 'react'

const AboutCont = () => {
  return (
    <div className='flex items-center justify-center md:h-[600px]  'id='about'>

      <div className='py-[50px] md:min-h-[430px] w-full bg-gradient-to-t from-cyan-600 to-cyan-400 flex items-center' >

        <div className='flex flex-col items-center max-w-screen-xl mx-auto text-white '>
          <h1 className='text-3xl font-semibold text-center'>About Us</h1>
          <div className='w-[130px] h-[3px] bg-white mt-4 rounded-lg mx-auto'></div>

          <p className='text-center md:w-[80%] w-[90%] mt-12 leading-9 text-gray-200 font-medium text-lg  '>" We provide easy and reliable vehicle lending services for your various needs. With a wide selection of quality vehicles, we are ready to help you plan your trip comfortably and safely. From private vehicles to commercial vehicles, our services are designed to be flexible to meet a variety of transportation needs. We are dedicated to providing a fast and practical lending experience, and are supported by a professional team. Discover the convenience of driving with us today! "</p>

        </div>
      </div>
    </div>
  )
}

export default AboutCont
