import React from 'react'
import { FaX } from "react-icons/fa6";
import InputKendaraan from './InputKendaraan';
import Button from './Button';
import { fixHandle } from '../service/fixHandle';
import { postKendaraan } from '../service/kendaraan';
import Loading from './Loading';
const ModalKendaraan = ({ title, modal,dataK,handlePost,loading,teks }) => {
    function handleChange(e){
        const newData = { ...dataK.dataK }
        newData[e.target.name] = e.target.value
        dataK.setDataK({...newData,harga:parseInt(newData.harga)})
    
       }

    
    return (
        <>
       

            <div
                id="authentication-modal"
                tabIndex={-1}
                aria-hidden="true"
                className={`${modal.showModal ? 'flex' : 'hidden'} bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center  items-center w-full md:inset-0 h-[calc(100%-1rem)] min-h-screen  `}
            >
                <div className="relative w-full max-w-[750px] max-h-full p-4">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow ">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5">
                            <h3 className="text-xl font-bold text-gray-800 ">
                                {title.toUpperCase()}
                            </h3>
                            <button
                                type="button"
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                data-modal-hide="authentication-modal"
                                onClick={() => modal.setShowModal(false)}
                            >
                                <FaX
                                ></FaX>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <div className="space-y-4" action="#">
                                <div className='flex justify-between w-full'>

                                    <div className='w-[48%]'>
                                        <InputKendaraan name='nama' value={dataK.dataK.nama} change={(e)=>handleChange(e)} type={'text'} title={'Masukan Nama'}></InputKendaraan>

                                    </div>
                                    <div className='w-[48%]'>
                                        <InputKendaraan name='tipe' value={dataK.dataK.tipe} change={(e)=>handleChange(e)} type={'text'} title={'Masukan Type'}></InputKendaraan>

                                    </div>
                                </div>
                                <div className='flex justify-between w-full'>

                                    <div className='w-[48%]'>
                                        <InputKendaraan name='warna' value={dataK.dataK.warna} change={(e)=>handleChange(e)} type={'text'} title={'Masukan Warna'}></InputKendaraan>

                                    </div>
                                    <div className='w-[48%]'>
                                        <InputKendaraan name='merk' value={dataK.dataK.merk} change={(e)=>handleChange(e)} type={'text'} title={'Masukan Merek'}></InputKendaraan>

                                    </div>
                                </div>
                                <div className='flex justify-between w-full'>

                                    <div className='w-[48%]'>
                                        <InputKendaraan name='nomer_plat' value={dataK.dataK.nomer_plat} change={(e)=>handleChange(e)} type={'text'} title={'Masukan Nomer Plat'}></InputKendaraan>

                                    </div>
                                    <div className='w-[48%]'>
                                        <InputKendaraan name='tahun_pembuatan' value={dataK.dataK.tahun_pembuatan} change={(e)=>handleChange(e)} type={'text'} title={'Masukan Tahun_Pembuatan'}></InputKendaraan>

                                    </div>
                                </div>
                                <div className='flex justify-between w-full'>

                                    <div className='w-[48%]'>
                                        <InputKendaraan name='kategori' value={dataK.dataK.kategori} change={(e)=>handleChange(e)} type={'text'} title={'Masukan Kategori'}></InputKendaraan>

                                    </div>
                                    <div className='w-[48%]'>
                                        <InputKendaraan name='harga' value={dataK.dataK.harga} change={(e)=>handleChange(e)} type={'number'} title={'Masukan Harga'}></InputKendaraan>

                                    </div>
                                </div>
                                        <InputKendaraan name='gambar' value={dataK.dataK.gambar} change={(e)=>handleChange(e)} type={'text'} title={'Masukan Link Gambar'}></InputKendaraan>
                               
                                <button className='w-full py-2 text-white rounded rounded-lgmibold bg-cyan-400'
                                onClick={handlePost}>
                                    {
                                     loading?
                                        <Loading></Loading>
                                        :
                                        teks
                                    }
                                </button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         

        </>

    )
}

export default ModalKendaraan
