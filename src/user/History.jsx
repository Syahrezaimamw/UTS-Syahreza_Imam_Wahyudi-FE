import React, { useEffect, useState } from 'react'
import DashUser from '../template/DashUser'
import axios from 'axios'
import { convertToRp } from '../service/currency'
import CardHistory from '../components/CardHistory'

const History = () => {
    const [dataProses, setDataProses] = useState([])
    const [dataBerhasil, setDataBerhasil] = useState([])
    const [dataGagal, setDataGagal] = useState([])
    const dataUser = JSON.parse(localStorage.getItem('dataUser'))
    async function getData() {

        try {

            const Data = await axios.get('http://localhost:3100/notif/findUser/'+dataUser.id)
            const fetchedData = Data.data.datas;

            const proses = fetchedData.filter(item => item.status === "Diminta");
            const berhasil = fetchedData.filter(item => item.status === "Berhasil");
            const gagal = fetchedData.filter(item => item.status === "Gagal");

            setDataProses(proses);
            setDataBerhasil(berhasil);
            setDataGagal(gagal);
        } catch (err) {
            console.log(err)

        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <DashUser title='History Request'>
            <div className='w-full '>
                <div className='w-full min-h-44'>
                    <h1 className='w-full text-2xl font-semibold border-b-2 border-cyan-400 text-cyan-600'>Memproses Peminjaman</h1>
                    <div className='flex flex-wrap w-full gap-5 mt-4'>

                        {dataProses.map((e, i) => (
                           <CardHistory key={i} e={e}></CardHistory>

                        ))}
                    </div>
                </div>
                <div className='w-full mt-8 min-h-44'>
                    <h1 className='w-full text-2xl font-semibold border-b-2 border-cyan-400 text-cyan-600'>Berhasil Melakukan Peminjaman</h1>
                    <div className='flex flex-wrap w-full gap-5 mt-4'>

                        {dataBerhasil.map((e, i) => (
                           <CardHistory key={i} e={e}></CardHistory>
                        ))}
                    </div>
                </div>
                <div className='w-full mt-8 min-h-44'>
                    <h1 className='w-full text-2xl font-semibold border-b-2 border-cyan-400 text-cyan-600'>Gagal Melakukan Peminjaman</h1>
                    <div className='flex flex-wrap w-full gap-5 mt-4'>

                        {dataGagal.map((e, i) => (
                          <CardHistory key={i} e={e}></CardHistory>
                        ))}
                    </div>
                </div>

            </div>

        </DashUser>
    )
}

export default History
