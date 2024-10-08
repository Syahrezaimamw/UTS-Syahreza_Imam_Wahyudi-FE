import React from 'react'
import Loading from './Loading';
import Modal from '../template/Modal';
import Input from './Input';
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
                        <Input name='nama' value={dataK.dataK.nama} change={(e) => handleChange(e)} type={'text'} title={'Masukan Nama'}></Input>

                    </div>
                    <div className='w-[48%]'>
                        <Input name='tipe' value={dataK.dataK.tipe} change={(e) => handleChange(e)} type={'text'} title={'Masukan Type'}></Input>

                    </div>
                </div>
                <div className='flex justify-between w-full'>

                    <div className='w-[48%]'>
                        <Input name='warna' value={dataK.dataK.warna} change={(e) => handleChange(e)} type={'text'} title={'Masukan Warna'}></Input>

                    </div>
                    <div className='w-[48%]'>
                        <Input name='merk' value={dataK.dataK.merk} change={(e) => handleChange(e)} type={'text'} title={'Masukan Merek'}></Input>

                    </div>
                </div>
                <div className='flex justify-between w-full'>

                    <div className='w-[48%]'>
                        <Input name='nomer_plat' value={dataK.dataK.nomer_plat} change={(e) => handleChange(e)} type={'text'} title={'Masukan Nomer Plat'}></Input>

                    </div>
                    <div className='w-[48%]'>
                        <Input name='tahun_pembuatan' value={dataK.dataK.tahun_pembuatan} change={(e) => handleChange(e)} type={'number'} title={'Masukan Tahun_Pembuatan'}></Input>

                    </div>
                </div>
                <div className='flex justify-between w-full'>

                    <div className='w-[48%]'>
                        <Input name='kategori' value={dataK.dataK.kategori} change={(e) => handleChange(e)} type={'text'} title={'Masukan Kategori'}></Input>

                    </div>
                    <div className='w-[48%]'>
                        <Input name='harga' value={dataK.dataK.harga} change={(e) => handleChange(e)} type={'number'} title={'Masukan Harga'}></Input>

                    </div>
                </div>
                <Input name='gambar' value={dataK.dataK.gambar} change={(e) => handleChange(e)} type={'text'} title={'Masukan Link Gambar'}></Input>

                <button className='w-full py-2 text-white rounded rounded-lgmibold bg-cyan-500'
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
