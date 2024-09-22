import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import { getAllDataKendaraan } from '../service/kendaraan'
import CardKendaraan from '../components/CardKendaraan'
const Kendaraan = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getAllDataKendaraan().then((result) => setData(result.data.datas))
  }, [])
  return (
    <Dashboard title={'Kendaraan'}>
      <div className='flex flex-wrap items-center gap-6'>

        {data.map((dt, i) => (
          <CardKendaraan dt={dt} key={i}/>
        ))}

        {/* {
          [1, 2, 3, 4, 5, 6, 7, 8].map((a, i) => (
            <div key={i} className="max-w-[275px] overflow-hidden rounded-md shadow-md hover:shadow-lg">
              <div className="relative">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                  alt="Product Image"
                />
                <div className="absolute top-0 right-0 px-2 py-1 m-2 text-sm font-medium text-white bg-red-500 rounded-md">
                  SALE
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-medium">Product Title</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                  vel eros fermentum faucibus sit amet euismod lorem.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$19.99</span>
                  <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

          ))
        } */}
      </div>
    </Dashboard>
  )
}

export default Kendaraan
