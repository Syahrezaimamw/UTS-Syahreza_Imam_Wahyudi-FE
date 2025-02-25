import React, { useState } from 'react'
import { convertToRp } from '../service/currency'

const CardHistory = ({ peran, batal, name, sub, e, cancel }) => {
    return (
        <div className="relative flex-col transition-shadow duration-300 bg-white border rounded-lg shadow-sm cursor-pointer w-[280px] w-flex group border-slate-200 hover:shadow-lg">
            <div className="relative h-44 m-2.5 overflow-hidden text-white rounded-md">
                <img
                    onClick={() => window.open(e.Kendaraan.url, "_blank")}
                    className="transition-transform w-[100%] duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                    src={e.Kendaraan.url}
                />
            </div>
            <div className="p-4 py-0 ">

                <div className='flex justify-between w-full'>
                    <div className='flex items-end justify-between w-full gap-2'>
                        <h6 className="mb-2 text-2xl font-semibold text-slate-800">
                            {e.Kendaraan.nama}
                        </h6>
                        <h6 className="mb-2 font-semibold text-md text-slate-800">
                            ({e.Kendaraan.merk})
                        </h6>
                    </div>
                </div>
                <div className='pb-1 mb-1 border-b-2'>

                    <div className='flex items-center justify-between'>

                        <h3 className="mb-1 font-medium text-md">Type : <span className="mb-4 text-sm text-gray-600"> {e.Kendaraan.tipe} </span></h3>
                        <h3 className="mb-2 font-medium text-md">Warna :<span className="mb-4 text-sm text-gray-600"> {e.Kendaraan.warna} </span></h3>
                    </div>
                    <div className='flex items-center justify-between'>

                        <h3 className="mb-1 font-medium text-md">plat : <span className="mb-4 text-sm text-gray-600"> {e.Kendaraan.nomer_plat} </span></h3>
                        <h3 className="mb-2 font-medium text-md">Tahun :<span className="mb-4 text-sm text-gray-600"> {e.Kendaraan.tahun_pembuatan} </span></h3>
                    </div>

                </div>


                <div className='flex w-full gap-2 jus'>

                    <h6 className="mb-2 text-md text-slate-800">
                        {e.tanggal_peminjaman.substring(0, 10)}
                    </h6>
                    -

                    <h6 className="mb-2 text-md text-slate-800">
                        {e.tanggal_peminjaman.substring(0, 10)}
                    </h6>
                </div>

                <div className='flex w-full'>

                    <h6 className="font-semibold text-md text-slate-800">
                        Total Harga :
                    </h6>
                    <h6 className="mb-2 ms-2 text-md text-slate-800">
                        {convertToRp(e.total_harga)}
                    </h6>


                </div>

            </div>
            <div className={`w-full gap-2 px-3 pb-2 `} >
                {e.status === "Diminta" && e.Kendaraan.status === false
                    ? "" : <div onClick={() => sub(e)} className={`${e.status === "Diminta" ?
                        'bg-gray-600' : e.status === 'Berhasil' ? 'bg-cyan-600' : "bg-red-500"
                        } py-1 text-md font-semibold text-white flex justify-center items-center`}>
                        {
                            peran === 'admin' ?
                                'Meminta request' :
                                e.status === "Diminta" ?
                                    'Diproses...' : e.status === 'Berhasil' ? 'Berhasil' : "Gagal"
                        }
                    </div>

                }
                {batal ? <button onClick={batal} className='w-full py-1 mt-2 font-bold text-white bg-red-600'>Batalkan</button> : ''}
                {
                    peran === 'admin' ?
                        e.status === 'Diminta' && e.Kendaraan.status === false ?
                            <div className='flex justify-end w-full'>
                                <div onClick={() => cancel(e)} className='px-3 py-1 mt-2 font-semibold text-white bg-red-600'>Cancel</div>
                            </div>
                            : ''
                        : ''
                }
            </div>

        </div>
    )
}

export default CardHistory
