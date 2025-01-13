import React from 'react'
import Modal from '../template/Modal'
import Input from './Input'
import Loading from './Loading'
// import Input from './Input'

const ModalPengembalian = ({ title, modal, data, dataPeminjaman,handle,loading }) => {
  function handleChange(e) {
    const newData = { ...data.dataPengembalian }
    newData[e.target.name] = e.target.value
    data.setDataPengembalian({ ...newData,denda:parseInt(newData.denda) })

  }

  return (
    <Modal title={title} modal={modal}>
      <div className='flex justify-between w-full'>

        <div className='w-[48%]'>
          <Input name='tanggal Peminjaman' value={dataPeminjaman?dataPeminjaman.tanggal_peminjaman.substring(0,10):''} change={(e) => {}} type={'text'} title={'Tanggal Peminjaman'}></Input>

        </div>
        <div className='w-[48%]'>
          <Input name='tanggal Pengembalian' value={dataPeminjaman?dataPeminjaman.tanggal_pengembalian.substring(0,10):''} change={(e) => {}} type={'text'} title={'Tanggal Pengembalian'}></Input>

        </div>
      </div>
      <div className='flex justify-between w-full'>

        <div className='w-[48%]'>
          <Input name='User' value={dataPeminjaman?`${dataPeminjaman.User.nama} (${dataPeminjaman.User.no_ktp})`:''} change={(e) => {}} type={'text'} title={'Nama'}></Input>

        </div>
        <div className='w-[48%]'>
          <Input name='Kendaraan' value={dataPeminjaman?`${dataPeminjaman.Kendaraan.merk} > ${dataPeminjaman.Kendaraan.nama} > ${dataPeminjaman.Kendaraan.tipe}` :''} change={(e) => {}} type={'text'} title={'Kendaraan'}></Input>

        </div>
      </div>
      <div className='flex justify-between w-full'>

        <div className='w-[48%]'>
          <Input name='tanggal_dikembalikan' value={data.dataPengembalian.tanggal_dikembalikan} change={(e) => handleChange(e)} type={'date'} title={'Tanggal Dikembalikan'}></Input>

        </div>
        <div className='w-[48%]'>
          
          <Input name='denda' value={data.dataPengembalian.denda} change={(e) => handleChange(e)} type={'number'} title={'Masukan Denda'}></Input>

        </div>
      </div>
          <Input name='kondisi' value={data.dataPengembalian.kondisi} change={(e) => handleChange(e)} type={'text'} title={'Masukan Kondisi Kendaraan'}></Input>
          <button className='w-full py-2 font-semibold text-white rounded rounded-lgmibold bg-cyan-500'
        onClick={handle}>
          {
            loading?
            <Loading/>:
            'Buat Pengembalian'
          }
      </button>
    </Modal>
  )
}

export default ModalPengembalian
