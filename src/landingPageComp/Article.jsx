import React from 'react'
import nyetir from '../image/orang Nyetir.jpg'
import service from '../image/service motor.jpg'
import happy from '../image/hppy.webp'

const Article = () => {
   const data = [
        {
            title:'All complete vehicles',
            img:nyetir
        },
        {
            title:'Free vehicle service',
            img:service
            
        },
        {
            title:'Customer satisfaction',
            img:happy
            
        }
    ]
  return (
    <div className='max-w-screen-xl mx-auto  text-gray-900 mb-[110px]' id='article'>
        <div className='flex flex-col items-center'>

        <h1 className='mb-4 text-3xl font-semibold'>Check out our latest article</h1>
        <div className='w-[130px] h-[3px] bg-cyan-600 rounded-lg mx-auto '></div>

        </div>

        <div className='flex flex-wrap justify-between mx-5 mt-24 lg:gap-0 gap-14 xl:mx-0 '>
            { data.map((e,i)=>(
                
                <div key={i} className="overflow-hidden rounded shadow-md w-full md:w-[46%] lg:w-[32%] xl:w-[410px]">
                <img
                  className="w-full min-h-[255px]"
                  src={e.img}
            
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">{e.title}</div>
                  <p className="text-base text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                    nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 [&>span]:inline-block [&>span]:px-3 text-gray-700 [&>span]:py-1 [&>span]:mb-2 [&>span]:mr-2 [&>span]:text-sm [&>span]:font-semibold [&>span]:rounded-full [&>span]:bg-gray-100 ">
                  <span >
                    #Vehicle
                  </span>
                  <span >
                    #Otomotif
                  </span>
                  <span >
                    #Pinjemin
                  </span>
                </div>
              </div>
                          ))

              
            }
            
        </div>
    
      
    </div>
  )
}

export default Article
