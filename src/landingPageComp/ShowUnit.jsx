import React, { useEffect, useState } from 'react'
import { getAllData } from '../service/get'
import { convertToRp } from '../service/currency'
import { useNavigate } from 'react-router-dom'
const ShowUnit = () => {
    const [data, setData] = useState([])
    const [jumlah, setJumlah] = useState(5)
    const [msg, setMsg] = useState(false)
    const urlKendaraan = 'http://localhost:3100/kendaraan/'

    useEffect(() => {
        getAllData(urlKendaraan).then((result) => setData(result))
    }, [])
    function handleToggle() {
        if (jumlah > 5) {
            setJumlah(5)
            setMsg(false)
        } else {

            setMsg(true)
            setJumlah(data.length)
        }
    }
    const navigate=useNavigate()
const handleClick=(item)=>{
    const myData=localStorage.getItem('dataUser')
    if(!myData){
        alert('Login Dengan Akun Yang Telah Ada')
    }else{
        navigate('/dashUser')
    }
}

//     const handleClick = (item) => {
//         console.log(item)
//         const phoneNumber = "62895375874137";
//         const message = `Halo Pinjemin, saya ingin meminjam kendaraan yang telah saya pilih melalui website Anda. Berikut detailnya:        
// - Nama Kendaraan    : ${item.merk + ' '} ${item.nama}
// - Tipe              : ${item.tipe}
// - Warna             : ${item.warna}  
// - Plat Nomer        : ${item.nomer_plat}  
// - Tahun Pembuatan   : ${item.tahun_pembuatan}  
// - Harga per-hari   : ${convertToRp(item.harga)}  

// Berikut data diri saya:  
// - Nama          :  
// - Email         :   
// - Nomor Telepon : 
// - Nomor KTP     : 
// - Alamat        :   

// Mengajukan peminjaman:  
// - Tanggal Peminjaman     : 
// - Sampai dengan Tanggal  : 

// Mohon informasi lebih lanjut mengenai prosedur peminjaman dan biaya tambahan, jika ada. Terima kasih!`;
//         console.log(message)
//         const encodedMessage = encodeURIComponent(message);
//         const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//         window.open(whatsappUrl, "_blank");
//     };
    return (
        <div className='' id='show'>
            <div className='max-w-screen-xl  mt-[80px] mx-auto text-gray-900'>
                <h1 className='text-3xl font-semibold text-center '> Show Unit</h1>
                <div className='w-[130px] h-[3px] bg-cyan-600 mt-4 rounded-lg mx-auto'></div>

                <div className='mt-20'>
                    <div className='flex justify-center w-full mt-4 '>
                        <div className='w-[93%] flex-wrap flex xl:gap-[69px] lg:gap-[50px] gap-[60px]'>
                            {

                                data.map((dt, i) => {
                                    if (i <= jumlah) {

                                        return (

                                            <div key={i} className="relative flex flex-col  bg-white border rounded-lg shadow-sm border-slate-200 xl:w-[350px] lg:w-[28%] md:w-[46%] w-full">
                                                <div className="relative h-56 m-2.5 overflow-hidden text-white flex justify-center items-center rounded-md">
                                                    <img
                                                        src={dt.url}
                                                        className='w-[300px]'
                                                        alt="card-image"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <div className="flex items-center mb-2">
                                                        <h6 className="text-xl font-semibold text-slate-800">
                                                            {dt.merk.toUpperCase()} {dt.nama}
                                                        </h6>
                                                        <div className="flex items-center gap-0 ml-auto font-medium 5">
                                                            {
                                                                dt.status ?
                                                                    (

                                                                        <span className='text-cyan-600'>Kosong</span>
                                                                    )

                                                                    : (

                                                                        <span className='text-red-600'>Dipinjam</span>
                                                                    )
                                                            }

                                                        </div>
                                                    </div>
                                                    <div className='pb-1 border-b-2'>

                                                        <div className='flex items-center justify-between'>

                                                            <h3 className="mb-1 text-xl font-medium">Type : <span className="mb-4 text-sm text-gray-600"> {dt.tipe} </span></h3>
                                                            <h3 className="mb-2 text-xl font-medium">Warna :<span className="mb-4 text-sm text-gray-600"> {dt.warna} </span></h3>
                                                        </div>
                                                        <div className='flex items-center justify-between'>

                                                            <h3 className="mb-1 text-xl font-medium">Plat : <span className="mb-4 text-sm text-gray-600"> {dt.nomer_plat} </span></h3>
                                                            <h3 className="mb-2 text-xl font-medium">Tahun :<span className="mb-4 text-sm text-gray-600"> {dt.tahun_pembuatan} </span></h3>
                                                        </div>

                                                    </div>
                                                </div>
                                                {/* <div className="inline-flex flex-wrap items-center justify-center gap-2 my-3 group">
                                                    <button
                                                        className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                                                                clipRule="evenodd"
                                                            />
                                                            <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path d="M19.5 6h-15v9h15V6Z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="px-4 py-2 text-sm text-center transition-all border rounded-full shadow-sm border-slate-300 hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                    >
                                                        + 20
                                                    </button>
                                                </div> */}
                                                <div className="px-4 pt-0 pb-4 mt-2 [&>button]:w-full  [&>button]:px-4  [&>button]:py-2  [&>button]:text-sm  [&>button]:text-center text-white  [&>button]:rounded-md  [&>button]:shadow-md  [&>button]:bg-slate-800  [&>button]:hover:shadow-lg font-medium">
                                                {
                                                                dt.status ?
                                                                    (

                                                                        <button
                                                                        onClick={() => handleClick(dt)}
                                                                        className=""
                                                                        type="button"
                                                                    >
                                                                        Reserve
                                                                    </button>
                                                                    )

                                                                    : (

                                                                        <button
                                                                        className=""
                                                                        type="button"
                                                                    >
                                                                        Full
                                                                    </button>
                                                                    )
                                                            }
                                                  
                                                </div>
                                            </div>


                                        )
                                    }
                                }
                                )
                            }
                        </div>
                    </div>
                </div>


                <div className='flex justify-center w-full mt-10'>
                    <h1 onClick={handleToggle} className='font-semibold cursor-pointer hover:underline text-cyan-600'>View All</h1>

                </div>
            </div>

        </div>
    )
}
// <div key={i} className="max-w-sm max-h-[260px] shadow-lg rounded-lg p-2 lg:max-w-[600px] lg:flex">
//     <div className='w-[490px] h-full flex items-center '>

//         <img
//             className='w-full '
//             src={dt.gambar}
//         ></img>
//     </div>
//     <div className="flex flex-col justify-between p-4 leading-normal bg-white ">
//         <div className="mb-8">

//             <div className="mb-2 text-xl font-bold text-gray-900">
//                 <div className='flex items-end justify-between pb-1 mb-1 text-2xl font-bold border-b-2'>

//                     <h3 className="">{dt.nama} <span className='text-lg'>({dt.merk})</span></h3>
//                     <p className='text-sm'>Pinjemin</p>
//                 </div>
//             </div>
//             <div className='w-[300px] mt-4 '>

//                 <div className='pb-1 border-b-2'>

//                     <div className='flex items-center justify-between'>

//                         <h3 className="mb-1 text-xl font-medium">Type : <span className="mb-4 text-sm text-gray-600"> {dt.tipe} </span></h3>
//                         <h3 className="mb-2 text-xl font-medium">Warna :<span className="mb-4 text-sm text-gray-600"> {dt.warna} </span></h3>
//                     </div>
//                     <div className='flex items-center justify-between'>

//                         <h3 className="mb-1 text-xl font-medium">plat : <span className="mb-4 text-sm text-gray-600"> {dt.nomer_plat} </span></h3>
//                         <h3 className="mb-2 text-xl font-medium">Tahun :<span className="mb-4 text-sm text-gray-600"> {dt.tahun_pembuatan} </span></h3>
//                     </div>

//                 </div>
//                 <p className='mt-1 text-xl font-medium text-gray-900'>Status : <span className='text-sm font-medium'>

//                     {
//                         dt.status ?
//                             (

//                                 <span className='text-cyan-600'>Kosong</span>
//                             )

//                             : (

//                                 <span className='text-red-600'>Sedang Dipinjam</span>
//                             )
//                     }


//                 </span></p>
//                 <button
//                     onClick={() => handleClick(dt)}>beli</button>
//                 <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa rem quiasa dolores!</p>

//             </div>
//         </div>

//     </div>
// </div>

export default ShowUnit
