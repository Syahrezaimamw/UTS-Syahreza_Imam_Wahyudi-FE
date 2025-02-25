import React from 'react'
import { convertToRp } from '../service/currency'
import { Link } from 'react-router-dom'

const CardKendaraan = ({ title, dt, sub }) => {
  return (
    <div className="w-full md:w-[260px] lg:w-[279px] overflow-hidden rounded-md shadow-md ">
      <div className="relative">
        <div className=' h-[180px] flex items-center justify-center overflow-hidden'>

          <img
            className="w-[85%]"
            src={dt.url ? dt.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:AN...'}
            alt="Product Image"
          />
        </div>
        <div className={`absolute top-0 right-0 px-2 py-1 m-2 text-sm font-medium text-white ${dt.status ? 'bg-cyan-500/50 ' : " bg-red-500/50"} rounded-sm`}>
          {
            dt.status ? 'Kosong' : "Penuh"
          }

        </div>
      </div>
      <div className="px-4 py-3 pb-4 ">
        <div className='flex items-end justify-between w-full'>

          <h3 className="pb-1 mb-1 text-xl font-bold border-b-2">{dt.nama} <span className='text-sm'>({dt.merk})</span></h3>
          <h2 className='pb-1 mb-1 text-sm font-semibold'>{dt.kategori}</h2>
        </div>
        <div className='pb-1 mb-1 border-b-2'>

          <div className='flex items-center justify-between'>

            <h3 className="mb-1 font-medium text-md">Type : <span className="mb-4 text-sm text-gray-600"> {dt.tipe} </span></h3>
            <h3 className="mb-2 font-medium text-md">Warna :<span className="mb-4 text-sm text-gray-600"> {dt.warna} </span></h3>
          </div>
          <div className='flex items-center justify-between'>

            <h3 className="mb-1 font-medium text-md">plat : <span className="mb-4 text-sm text-gray-600"> {dt.nomer_plat} </span></h3>
            <h3 className="mb-2 font-medium text-md">Tahun :<span className="mb-4 text-sm text-gray-600"> {dt.tahun_pembuatan} </span></h3>
          </div>

        </div>
        <div className="flex flex-col justify-end">
          <span className="mb-2 font-bold text-md">{convertToRp(dt.harga)} <span className='text-sm font-medium'>/ Hari</span></span>
          {title === 'user' ?
          dt.status=== false?            <button className={`bg-gray-600  flex justify-center px-2 py-1 font-bold text-white  transition-all duration-75 rounded  hover:scale-105 hover:shadow-md`}>Request Pinjam</button> 
          :
            <button onClick={() => sub(dt)} className={`bg-gradient-to-l from-blue-400 to-cyan-300 flex justify-center px-2 py-1  font-bold text-white transition-all duration-75 rounded  hover:scale-105 hover:shadow-md`}>Request Pinjam</button> :

            dt.status ?
              <Link to={`/kendaraan/${dt.id}`} className={`flex justify-center px-2 py-1 font-bold text-white transition-all duration-75 rounded bg-gradient-to-l from-blue-400 to-cyan-300 hover:scale-105 hover:shadow-md`}>
                Pinjam
              </Link> :

              <Link to={`/kendaraan/${dt.id}`} className="flex justify-center px-2 py-1 font-bold text-white transition-all duration-75 bg-gray-400 rounded hover:bg-red-600 hover:scale-105 hover:shadow-md">
                Kembalikan

              </Link>

          }



        </div>
      </div>
    </div>
  )
}

export default CardKendaraan
