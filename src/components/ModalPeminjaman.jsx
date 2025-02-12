import React, { useEffect, useState } from 'react'
import Modal from '../template/Modal'
import Input from './Input'
import moment from 'moment'
import Select from 'react-select'
import { convertToRp } from '../service/currency'
import { getAllData, getAllDataById } from '../service/get'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const ModalPeminjaman = ({ title, modal, data,dataAdmin, setTotal,handle,dataKendara,loading }) => {

  //? Data Peminjaman
  const [dataUser, setDataUser] = useState([])
  function handleChange(e) {
    const newData = { ...data.dataPeminjaman }
    newData[e.target.name] = e.target.value
    data.setDataPeminjaman({ ...newData })
    
  }
  
  //? Total Harga
  useEffect(() => {
    setTotal(jumlahTanggal() * dataKendara.harga)
  }, [data])
  function jumlahTanggal() {
    let tanggals = moment(data.dataPeminjaman.tanggal_peminjaman);
    let tanggalo = moment(data.dataPeminjaman.tanggal_pengembalian);

    const selisih = tanggalo.diff(tanggals, 'days') // 1
    if (selisih) {
      return selisih
    } else {
      return 0
    }

  }


  //? data Option
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://localhost:3100/user/'
        const result = await getAllData(url).then((data) => data)

        const formattedOptions = result.map(item => ({
          value: item.id,
          label: `${item.nama} ( ${item.no_ktp} )`
        }));
        setDataUser(formattedOptions);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
  }, [modal])

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      maxHeight: 175,
      overflowY: 'auto', // Tinggi maksimal dropdown menu
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: 'none',
      borderColor: 'lightgry',
      outline: 'black'
      
      // minHeight: 50, // Mengatur tinggi minimal input
    }),
    option: (provided, state) => ({
      ...provided,
      padding: 7,
      backgroundColor: state.isSelected ? '#26C6DA' : state.isFocused ? 'rgba(128, 222, 234, 0.5)' : 'white',
      color: state.isSelected ? 'white' : 'black',
       // Mengatur padding per item dropdown
    }),
  };  

  return (
    <Modal title={title} modal={modal}>
      <div className='flex justify-between w-full'>
        <div className='w-[48%]'>
          <Input name='Kendaraan' value={`${dataKendara?dataKendara.merk:''} > ${dataKendara?dataKendara.nama:''} > ${dataKendara?dataKendara.tipe:''} > ${dataKendara?dataKendara.warna:''}`} change={(e) =>{}} type={'text'} title={'Kendaran'}></Input>

        </div>
        <div className='w-[48%]'>
          <Input name='Admin' value={dataAdmin?dataAdmin.nama:'??'} change={(e) =>{}} type={'text'} title={'Admin'}></Input>
        </div>
      </div>
      <div className='flex justify-between w-full'>
        <div className='w-[48%]'>
          <Input name='tanggal_peminjaman' value={data ? data.dataPeminjaman.tanggal_peminjaman : ''} change={(e) => handleChange(e)} type={'date'} title={'Masukan Tanggal Peminjaman'}></Input>

        </div>
        <div className='w-[48%]'>
          <Input name='tanggal_pengembalian' value={data ? data.dataPeminjaman.tanggal_pengembalian : ''} change={(e) => handleChange(e)} type={'date'} title={'Masukan Tanggal Pengembalian'}></Input>
        </div>
      </div>
      <div className='flex justify-between w-full'>

        <div className='w-[48%]'>
          <label
            htmlFor={'UserId'}
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Pilih Customer / <Link to='/user/' className='underline'>Tambah</Link>
          </label>
          <Select className='css-4ljt47-MenuList ' onChange={(e) => data.setDataPeminjaman({ ...data.dataPeminjaman, UserId: e.value })} options={dataUser} styles={customStyles} ></Select>

        </div>
        <div className='w-[48%]'>
          <Input name='total_harga' value={data ? convertToRp(jumlahTanggal() * dataKendara.harga) : ''} change={(e) => { }} type={'teks'} title={'Total Harga Sewa'}></Input>
        </div>
      </div>
      <button className='w-full py-2 font-semibold text-white rounded rounded-lgmibold bg-cyan-500'
        onClick={handle}>
             {
            loading?
            <Loading/>:
            ' Buat Peminjaman'
          }
       
      </button>
    </Modal>
  )
}

export default ModalPeminjaman
