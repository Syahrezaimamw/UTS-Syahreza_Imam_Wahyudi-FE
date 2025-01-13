import React, { useEffect, useState } from 'react'
import { getAllData } from '../service/get'

const ShowUnit = () => {
    const [data, setData] = useState([])
    const [jumlah, setJumlah] = useState(3)
    const [msg, setMsg] = useState(false)
    const urlKendaraan = 'http://localhost:3100/kendaraan/'

    useEffect(() => {
        getAllData(urlKendaraan).then((result) => setData(result))
    }, [])
    function handleToggle() {
        if (jumlah > 3) {
            setJumlah(3)
            setMsg(false)
        } else {

            setMsg(true)
            setJumlah(data.length)
        }
    }
    return (
        <div className='' id='show'>
            <div className='max-w-screen-xl  mt-[80px] mx-auto text-gray-900'>
                <h1 className='text-3xl font-semibold text-center '> Show Unit</h1>
                <div className='w-[130px] h-[3px] bg-cyan-600 mt-4 rounded-lg mx-auto'></div>

                <div className='mt-20'>
                    {/* <div className='flex justify-end gap-2 font-semibold text-cyan-600'>
                        <p>
                            Penuh
                        </p>
                        <p>
                            
                    Kosong 
                        </p>
                    </div> */}
                    <div className='flex flex-wrap w-full gap-[69px] mt-4  '>
                        {

                            data.map((dt, i) => {
                                if (i <= jumlah) {

                                    return (
                                        <div className="max-w-sm max-h-[260px] shadow-lg rounded-lg p-2 lg:max-w-[600px] lg:flex">
                                            <div className='w-[490px] h-full flex items-center '>

                                                <img
                                                    className='w-full '
                                                    src={dt.gambar}
                                                ></img>
                                            </div>
                                            <div className="flex flex-col justify-between p-4 leading-normal bg-white ">
                                                <div className="mb-8">

                                                    <div className="mb-2 text-xl font-bold text-gray-900">
                                                        <div className='flex items-end justify-between pb-1 mb-1 text-2xl font-bold border-b-2'>

                                                            <h3 className="">{dt.nama} <span className='text-lg'>({dt.merk})</span></h3>
                                                            <p className='text-sm'>Pinjemin</p>
                                                        </div>
                                                    </div>
                                                    <div className='w-[300px] mt-4 '>

                                                        <div className='pb-1 border-b-2'>

                                                            <div className='flex items-center justify-between'>

                                                                <h3 className="mb-1 text-xl font-medium">Type : <span className="mb-4 text-sm text-gray-600"> {dt.tipe} </span></h3>
                                                                <h3 className="mb-2 text-xl font-medium">Warna :<span className="mb-4 text-sm text-gray-600"> {dt.warna} </span></h3>
                                                            </div>
                                                            <div className='flex items-center justify-between'>

                                                                <h3 className="mb-1 text-xl font-medium">plat : <span className="mb-4 text-sm text-gray-600"> {dt.nomer_plat} </span></h3>
                                                                <h3 className="mb-2 text-xl font-medium">Tahun :<span className="mb-4 text-sm text-gray-600"> {dt.tahun_pembuatan} </span></h3>
                                                            </div>

                                                        </div>
                                                        <p className='mt-1 text-xl font-medium text-gray-900'>Status : <span className='text-sm font-medium'>

                                                            {
                                                                dt.status ? 
                                                                (

                                                                 <span className='text-cyan-600'>Kosong</span>   
                                                                )
                                                               
                                                                 :  (

                                                                    <span className='text-red-600'>Sedang Dipinjam</span>   
                                                                   )
                                                            }


                                                        </span></p>
                                                        <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa rem quiasa dolores!</p>
                                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    )
                                }
                            }
                            )
                        }
                    </div>
                </div>


                <div className='flex w-full mt-20'>

                    <button
                        onClick={handleToggle}
                        className='px-6 py-2 mx-auto border-2 rounded-xl text-cyan-600 fotn-semibold border-cyan-600'>{msg ? 'Close' : 'View All'}</button>
                </div>
            </div>

        </div>
    )
}

// {/* <div key={i} className="w-full bg-white border-2 md:w-[290px] lg:w-[370px] overflow-hidden rounded-md shadow-md ">
// <div className="relative">
//     <div className=' h-[230px] flex items-center justify-center overflow-hidden'>

//         <img
//             className="w-[85%]"
//             src={dt.gambar ? dt.gambar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:AN...'}
//             alt="Product Image"
//         />
//     </div>
//     {/* <div className={`absolute top-0 right-0 px-2 py-1 m-2 text-sm font-medium text-white ${dt.status ? 'bg-cyan-600/50 ' : " bg-gray-500/50"} rounded-sm`}>
//         {
//             dt.status ? 'Kosong' : "Penuh"
//         }

//     </div> */}
// </div>
// <div className="px-4 py-3 ">
//     <h3 className="pb-1 mb-1 text-2xl font-bold border-b-2">{dt.nama} <span className='text-lg'>({dt.merk})</span></h3>
//     <div className='pb-1 border-b-2'>

//         <div className='flex items-center justify-between'>

//             <h3 className="mb-1 text-lg font-medium">Type : <span className="mb-4 text-sm text-gray-600"> {dt.tipe} </span></h3>
//             <h3 className="mb-2 text-lg font-medium">Warna :<span className="mb-4 text-sm text-gray-600"> {dt.warna} </span></h3>
//         </div>
//         <div className='flex items-center justify-between'>

//             <h3 className="mb-1 text-lg font-medium">plat : <span className="mb-4 text-sm text-gray-600"> {dt.nomer_plat} </span></h3>
//             <h3 className="mb-2 text-lg font-medium">Tahun :<span className="mb-4 text-sm text-gray-600"> {dt.tahun_pembuatan} </span></h3>
//         </div>

//     </div>
//         <p className='mt-1 text-xl font-semibold text-center text-cyan-600'>Pinjemin</p>
// </div>
// </div> */}


export default ShowUnit
