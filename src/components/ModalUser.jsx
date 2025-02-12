import React, { useState, useEffect } from 'react'
import Modal from '../template/Modal'
import InputKendaraan from './InputKendaraan'
import Loading from './Loading'
import Input from './Input'

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
        <Input name='nama' value={dataU?dataU.dataU.nama:''} change={(e) => handleChange(e)} type={'text'} title={'Masukan Nama Client'}></Input>

        </div>
        <div className='w-[48%]'>
          <Input name='email' value={dataU.dataU.email} change={(e) => handleChange(e)} type={'text'} title={'Masukan Email'}></Input>

        </div>
      </div>
      <div className='flex justify-between w-full'>

        <div className='w-[48%]'>
        <Input name='telephone' value={dataU.dataU.telephone} change={(e) => handleChange(e)} type={'text'} title={'Masukan Nomer Telephone'}></Input>

        </div>
        <div className='w-[48%]'>
          <Input name='no_ktp' value={dataU.dataU.no_ktp} change={(e) => handleChange(e)} type={'number'} title={'Masukan Nomer KTP'}></Input>

        </div>
      </div>
      <div className='flex justify-between w-full'>

        <div className='w-[48%]'>
        <Input name='alamat' value={dataU.dataU.alamat} change={(e) => handleChange(e)} type={'text'} title={'Masukan Alamat'}></Input>

        </div>
        <div className='w-[48%]'>

        {/* <Input name='password' value={dataU.dataU.password} change={(e) => handleChange(e)} type={'text'} title={'Masukan Password'}></Input> */}
        </div>
      </div>
        
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
  )
}

export default ModalUser
