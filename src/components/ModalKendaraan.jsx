import React from 'react'
import InputKendaraan from './InputKendaraan';
import Button from './Button';
import { fixHandle } from '../service/fixHandle';
import { postKendaraan } from '../service/kendaraan';
import Loading from './Loading';
import Modal from '../template/Modal';
const ModalKendaraan = ({ title, modal, dataK, handlePost, loading, teks }) => {
    function handleChange(e) {
        const newData = { ...dataK.dataK }
        newData[e.target.name] = e.target.value
        dataK.setDataK({ ...newData, harga: parseInt(newData.harga) })

    }


    return (
        <>
            <Modal title={title} modal={modal}>
                <div className='flex justify-between w-full'>

                    <div className='w-[48%]'>
                        <InputKendaraan name='nama' value={dataK.dataK.nama} change={(e) => handleChange(e)} type={'text'} title={'Masukan Nama'}></InputKendaraan>

                    </div>
                    <div className='w-[48%]'>
                        <InputKendaraan name='tipe' value={dataK.dataK.tipe} change={(e) => handleChange(e)} type={'text'} title={'Masukan Type'}></InputKendaraan>

                    </div>
                </div>
                <div className='flex justify-between w-full'>

                    <div className='w-[48%]'>
                        <InputKendaraan name='warna' value={dataK.dataK.warna} change={(e) => handleChange(e)} type={'text'} title={'Masukan Warna'}></InputKendaraan>

                    </div>
                    <div className='w-[48%]'>
                        <InputKendaraan name='merk' value={dataK.dataK.merk} change={(e) => handleChange(e)} type={'text'} title={'Masukan Merek'}></InputKendaraan>

                    </div>
                </div>
                <div className='flex justify-between w-full'>

                    <div className='w-[48%]'>
                        <InputKendaraan name='nomer_plat' value={dataK.dataK.nomer_plat} change={(e) => handleChange(e)} type={'text'} title={'Masukan Nomer Plat'}></InputKendaraan>

                    </div>
                    <div className='w-[48%]'>
                        <InputKendaraan name='tahun_pembuatan' value={dataK.dataK.tahun_pembuatan} change={(e) => handleChange(e)} type={'text'} title={'Masukan Tahun_Pembuatan'}></InputKendaraan>

                    </div>
                </div>
                <div className='flex justify-between w-full'>

                    <div className='w-[48%]'>
                        <InputKendaraan name='kategori' value={dataK.dataK.kategori} change={(e) => handleChange(e)} type={'text'} title={'Masukan Kategori'}></InputKendaraan>

                    </div>
                    <div className='w-[48%]'>
                        <InputKendaraan name='harga' value={dataK.dataK.harga} change={(e) => handleChange(e)} type={'number'} title={'Masukan Harga'}></InputKendaraan>

                    </div>
                </div>
                <InputKendaraan name='gambar' value={dataK.dataK.gambar} change={(e) => handleChange(e)} type={'text'} title={'Masukan Link Gambar'}></InputKendaraan>

                <button className='w-full py-2 text-white rounded rounded-lgmibold bg-cyan-400'
                    onClick={handlePost}>
                    {
                        loading ?
                            <Loading></Loading>
                            :
                            teks
                    }
                </button>

            </Modal>

            
        </>

    )
}

export default ModalKendaraan
