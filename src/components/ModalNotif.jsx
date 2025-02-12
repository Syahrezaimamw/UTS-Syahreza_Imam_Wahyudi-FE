import React, { useEffect } from 'react'
import Modal from '../template/Modal'
import moment from 'moment'
import Input from './Input'
import { convertToRp } from '../service/currency'

const ModalNotif = ({ title, modal, data, hargaKendara, setTotal, sub }) => {
    console.log(data.dataN)
    function handleChange(e) {
        const newData = { ...data.dataN }
        newData[e.target.name] = e.target.value
        data.setDataN({ ...newData })
        
    }
    useEffect(() => {
        setTotal(jumlahTanggal() * hargaKendara)
    }, [data])
    function jumlahTanggal() {
        let tanggals = moment(data.dataN.tanggal_peminjaman);
        let tanggalo = moment(data.dataN.tanggal_pengembalian);

        const selisih = tanggalo.diff(tanggals, 'days') // 1
        if (selisih) {
            return selisih
        } else {
            return 0
        }

    }

    return (
        <Modal title={title} modal={modal}>
          
            <div className='flex justify-between w-full'>
                <div className='w-[48%]'>
                    <Input name='tanggal_peminjaman' value={data ? data.dataN.tanggal_peminjaman : ''} change={(e) => handleChange(e)} type={'date'} title={'Masukan Tanggal Peminjaman'}></Input>

                </div>
                <div className='w-[48%]'>
                    <Input name='tanggal_pengembalian' value={data ? data.dataN.tanggal_pengembalian : ''} change={(e) => handleChange(e)} type={'date'} title={'Masukan Tanggal Pengembalian'}></Input>
                </div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='w-full'>
                    <Input name='total_harga' value={data ? convertToRp(jumlahTanggal() * hargaKendara) : ''} change={(e) => { }} type={'teks'} title={'Total Harga Sewa'}></Input>
                </div>
            </div>
            <button onClick={sub} className='w-full py-2 font-semibold text-white rounded rounded-lgmibold bg-cyan-500'
            >
                Minta

            </button>
        </Modal>
    )
}

export default ModalNotif
