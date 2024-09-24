import React, { useState, useEffect } from 'react'
import Modal from '../template/Modal'
import axios from 'axios'
import InputKendaraan from './InputKendaraan'
import Loading from './Loading'

const ModalUser = ({ title, modal, dataU,loading,teks,handlePost }) => {
  function handleChange(e) {
    const newData = { ...dataU.dataU }
    newData[e.target.name] = e.target.value
    dataU.setDataU({ ...newData, no_ktp: parseInt(newData.no_ktp) })

  }

  return (
    <Modal title={title} modal={modal}>
      <div className='flex justify-between w-full'>

        <div className='w-[48%]'>
        <InputKendaraan name='nama' value={dataU?dataU.dataU.nama:''} change={(e) => handleChange(e)} type={'text'} title={'Masukan Nomer Nama'}></InputKendaraan>

        </div>
        <div className='w-[48%]'>
          <InputKendaraan name='email' value={dataU.dataU.email} change={(e) => handleChange(e)} type={'text'} title={'Masukan Email'}></InputKendaraan>

        </div>
      </div>
      <div className='flex justify-between w-full'>

        <div className='w-[48%]'>
        <InputKendaraan name='telephone' value={dataU.dataU.telephone} change={(e) => handleChange(e)} type={'text'} title={'Masukan Nomer Telephone'}></InputKendaraan>

        </div>
        <div className='w-[48%]'>
          <InputKendaraan name='no_ktp' value={dataU.dataU.no_ktp} change={(e) => handleChange(e)} type={'number'} title={'Masukan no KTP'}></InputKendaraan>

        </div>
      </div>
        <InputKendaraan name='alamat' value={dataU.dataU.alamat} change={(e) => handleChange(e)} type={'text'} title={'Masukan Alamat'}></InputKendaraan>
        
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
  )
}

export default ModalUser
