import React, { useState } from 'react'
import Dashboard from '../template/Dashboard'

const Home = () => {
  const [data, setData] = useState([
    {
      judul: 'Me-Menejemen Kendaraan',
      page: 'Kendaraan',
      teks: 'Admin rutin mengelola data kendaraan meliputi pengecekan dan pembaharuan data baru'
    },
   
    {
      judul: 'Kelola Data User',
      page: 'User',
      teks: 'Admin menambah data client pada table user untuk data yang belum terdaftar'
    },
    {
      judul: 'Membuat Peminjaman',
      page: 'Kendaraan',
      teks: 'Admin mengelola seluruh peminjaman, melakukan penginputan data secara menyeluruh dan benar'
    },
    {
      judul: 'Kelola dan Pantau Status Peminjaman',
      page: 'Peminjaman',
      teks: 'Admin melakukan pengecekan status Peminjaman pada table Peminjaman'
    },
    {
      judul: 'Cek Pengembalian',
      page: 'Pengembalian',
      teks: 'Admin melakukan pengecekan dan melihat detail Pengembalian pada table Pengembalian'
    },
    {
      judul: 'Melakukan Cetak',
      page: 'Cetak',
      teks: 'Admin mencetak rekap Peminjaman - Pengembalian dalam bentuk PDF'
    },
  ])

  
  

  return (
    <Dashboard title={'Pengenalan'}>
      <div className='px-8 py-4'>
        <ol className="relative border-gray-200 border-s dark:border-gray-700">
          
          {
            data.map((item, i) => (

              <li key={i} className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-cyan-700 bg-cyan-500">
                  <svg
                    className="w-2.5 h-2.5  text-blue-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {item.judul}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                  {item.page}, Pinjemin
                </time>
                <p className="text-base font-normal text-gray-500 ">
                 {item.teks}
                </p>
              </li>

            ))
          }
        </ol>
      </div>

    </Dashboard>
  )
}

export default Home
