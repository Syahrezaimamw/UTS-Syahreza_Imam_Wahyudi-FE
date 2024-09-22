import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Dashboard from '../template/Dashboard'
import { Link } from 'react-router-dom';
import { convertToRp } from '../service/currency';
import { FaAngleRight } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { getAllDataKendaraanById } from '../service/kendaraan'
import BtnK from '../components/BtnK';
const PerKendaraan = () => {
    const { id } = useParams()
    const [data, setData] = useState({
        nama: ''
    })
    useEffect(() => {
        getAllDataKendaraanById(id).then((result) => {
            setData(result)
        })
    }, [])
    console.log(data)
    return (
        <Dashboard title={'Kendaraan'}>
            <div className='flex gap-2 items-center [&_h1]:font-semibold [&_span]:font-medium [&_span]:text-[12px]  [&_span]:pt-[2px]   [&_h1]:text-md [&_h1]:hover:cursor-pointer'> <h1 className=''><Link to='/kendaraan'>
                Kendaraan </Link></h1> <span><FaAngleRight /></span> <h1>{data.merk}</h1> <span><FaAngleRight /></span> <h1>{data.nama}</h1> <span><FaAngleRight /></span> <h1>{data.tipe}</h1>
            </div>
            <div className='flex mt-9 justify-between w-full min-h-[480px] '>
                <div className=' w-[40%]  flex items-center justify-center overflow-hidden'>
                    <img src={data.gambar} className='w-[75%]' alt="" />
                </div>
                <div className='  w-[55%] flex items-center'>

                <div className='flex flex-col [&_h1]:text-gray-700  justify-center px-10 py-8 rounded-lg shadow-lg border-2 border-gray-200 w-fit '>
                    <div className='flex gap-2 pb-3 mb-4 border-b-2 '>

                        <h1 className='text-[35px] font-bold '>{data.nama}</h1>
                        <h1 className='text-[35px] font-bold '>( {data.merk} )</h1>
                    </div>
                    <div className='flex justify-between gap-6 pr-[35px] w-full'>

                        <div className='flex items-center '><h1 className='text-[25px] font-semibold '>Plat_Nomer : </h1>  <span className='font-medium  text-[20px] ms-2 mt-1'>{data.nomer_plat}</span></div>
                        <div className='flex items-center '><h1 className='text-[25px] font-semibold '>Warna : </h1>  <span className='font-medium  text-[20px] ms-2 mt-1'>{data.warna}</span></div>
                    </div>
                    <div className='flex justify-between w-full pb-3 mt-3 border-b-2 pr-[35px]'>

                        <div className='flex items-center '><h1 className='text-[25px] font-semibold '>Tahun_Pembuatan : </h1>  <span className='font-medium text-[20px] ms-2 mt-1'>{data.tahun_pembuatan}</span></div>
                        <div className='flex items-center '><h1 className='text-[25px] font-semibold '>Type : </h1>  <span className='font-medium  text-[20px] ms-2 mt-1'>{data.tipe}</span></div>
                    </div>
                    <div className='flex items-center pb-3 mt-3 border-b-2 '><h1 className='text-[25px] font-semibold '>Harga : </h1>  <span className='font-medium  text-[20px] ms-2 mt-1'>{convertToRp(data.harga)} <span className='font-normal'>/ hari</span></span></div>
                    <div className='flex justify-between mt-4'>
                        <div className='flex items-center gap-2'>
                            {
                                data.status?<></>:
                                <BtnK warna='bg-red-500'><FaTrash/></BtnK>
                            }
                            <BtnK warna='bg-gray-500'><FaPen/></BtnK>
                        </div>
                        <BtnK warna='bg-cyan-400'>
                            Peminjaman
                        </BtnK>
                    </div>
                </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default PerKendaraan
