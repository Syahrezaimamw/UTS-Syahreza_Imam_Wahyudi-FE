import React, { useState } from 'react'
import Loading from './Loading';
import Modal from '../template/Modal';
import Input from './Input';
const ModalKendaraan = ({ title, modal, dataK, setDataGambar, handlePost, loading, teks }) => {
    function handleChange(e) {
        const newData = { ...dataK.dataK }
        newData[e.target.name] = e.target.value
        dataK.setDataK({ ...newData, harga: parseInt(newData.harga) })

    }
    const [preview, setPreview] = useState('')
    function handleChangeImg(e) {
        const data = e.target.files[0]
        dataK.setDataK({ ...dataK.dataK, gambar: data })
        setDataGambar(data)
        const view = URL.createObjectURL(data)
        console.log(data)


        setPreview(view)

    }
    // console.log(dataK.dataK)
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
                        <label
                            htmlFor='Ketegore'
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Kategori Kendaraan
                        </label>
                        <select id='ketegori' name='kategori' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-400 block w-full p-2.5 outline-none "
                            value={dataK.dataK.kategori} onChange={(e) => handleChange(e)}>
                            <option value=""></option>
                            <option value="Sepeda Motor">Sepeda Motor</option>
                            <option value="Mobil">Mobil</option>
                            <option value="Pickup">Pickup</option>
                            <option value="Sepeda">Sepeda</option>
                        </select>
                        {/* <Input name='kategori' value={dataK.dataK.kategori} change={(e) => handleChange(e)} type={'text'} title={'Masukan Kategori'}></Input> */}

                    </div>
                    <div className='w-[48%]'>
                        <Input name='harga' value={dataK.dataK.harga} change={(e) => handleChange(e)} type={'number'} title={'Masukan Harga'}></Input>

                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
                        // Jika preview ada, ubah background menjadi gambar yang dipilih
                        style={
                            preview
                                ? {
                                    backgroundImage: `url(${preview})`,
                                    backgroundSize: '50%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }
                                : { backgroundColor: '#F9FAFB' } // Warna bg default (gray muda)
                        }
                    >
                        {/* Hanya tampilkan konten default jika belum ada preview */}
                       
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 overflow-hidden">
                                {
                                   
                                    !preview?
                                    dataK.dataK.url ?
                                        <img src={dataK.dataK.url} alt="" />
                                        // <div>sss</div>
                                        :
                                        <div>

                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                                            </p>
                                        </div>
:<></>
                                }
                            </div>
                      
                        <input
                            id="dropzone-file"
                            type="file"
                            onChange={handleChangeImg}
                            className="hidden"
                            accept="image/*"
                        />
                    </label>
                </div>

                {/* <input type="file" onChange={(e) => handleChangeImg(e)} />
                {preview ?
                    <img src={preview} className='w-[100px]' alt="" /> : <></>
                } */}
                {/* <Input name='gambar' value={dataK.dataK.gambar} change={(e) => handleChange(e)} type={'text'} title={'Masukan Link Gambar'}></Input> */}

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
