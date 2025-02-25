import React from 'react'
import Modal from '../template/Modal'
import Input from './Input'
import { convertToRp } from '../service/currency'

const ModalNotifPemin = ({title,modal,data,sub}) => {
  return (
    <Modal title={title} modal={modal}>
      <div className='flex justify-between w-full'>
        <div className='w-full'>
          <Input name='Kendaraan' value={`${data.Kendaraan? data.Kendaraan.merk:''} > ${data.Kendaraan?data.Kendaraan.nama:''} > ${data.Kendaraan?data.Kendaraan.tipe:''} > ${data.Kendaraan?data.Kendaraan.warna:''}`} change={(e) =>{}} type={'text'} title={'Kendaran'}></Input>

        </div>
      </div>
      <div className='flex justify-between w-full'>
        <div className='w-[48%]'>
          <Input name='tanggal_peminjaman' value={ data.tanggal_peminjaman.substring(0,10)} change={(e) => {}} type={'date'} title={'Masukan Tanggal Peminjaman'}></Input>
        </div>
        <div className='w-[48%]'>
          <Input name='tanggal_pengembalian' value={data ? data.tanggal_pengembalian.substring(0,10) : ''} change={(e) => {}} type={'date'} title={'Masukan Tanggal Pengembalian'}></Input>
        </div>
      </div>
      <div className='flex justify-between w-full'>

        <div className='w-[48%]'>
          <Input name='User' value={data ? `${data.User.nama} (${data.User.no_ktp})`  : ''} change={(e) => { }} type={'teks'} title={'Penyewa'}></Input>
        </div>
        <div className='w-[48%]'>
          <Input name='total_harga' value={data ? convertToRp(data.total_harga) : ''} change={(e) => { }} type={'teks'} title={'Total Harga Sewa'}></Input>
        </div>
      </div>
      <button onClick={sub} className='w-full py-2 font-semibold text-white rounded rounded-lgmibold bg-cyan-500'
       >
          Tambah Peminjaman
       
      </button>
    </Modal>
  )
}

export default ModalNotifPemin
