import React, { useEffect, useState } from 'react'
import DashUser from '../template/DashUser'
import axios from 'axios'
import CardHistory from '../components/CardHistory'
import { searchKendaraan } from '../service/get'
import { deleteData } from '../service/delete'

const History = () => {
    const [dataBerhasil, setDataBerhasil] = useState([])
    const [dataGagal, setDataGagal] = useState([])
    const dataUser = JSON.parse(localStorage.getItem('dataUser'))
    const [dataProses, setDataProses] = useState([])
    const [berhasil, setBerhasil] = useState(false)
    const [gagal, setGagal] = useState(false)
    
    async function getData() {

        try {

            const Data = await axios.get('http://localhost:3100/notif/findUser/' + dataUser.id)
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

   
    
    function batal(id){
        deleteData('http://localhost:3100/notif/delete/'+id,(berhasil)=>{
         console.log(berhasil)
         window.location.href='/UTS-Syahreza_Imam_Wahyudi-FE/historyUser'
         },(gagal)=>{
             window.location.href='/UTS-Syahreza_Imam_Wahyudi-FE/historyUser'
         })
        console.log(id)
    }
    return (
        <DashUser title='History Request'>
            <div className='w-full '>
                <div className='w-full min-h-44'>
                    <h1 className='w-full text-2xl font-semibold border-b-2 border-cyan-400 text-cyan-600'>Memproses Peminjaman</h1>
                    <div className='flex flex-wrap w-full gap-5 mt-4'>

                        {
                            dataProses.length > 0 ?
                                dataProses.map((e, i) => (
                                    <div key={i} s>
                                        <CardHistory batal={()=>batal(e.id)} ub={() => { }} e={e}></CardHistory>
                                    </div>

                                ))
                                : <div className='flex items-center justify-center w-full text-2xl min-h-44'>Tidak Ada Request Meminjam</div>}
                    </div>
                </div>
                <div className='w-full mt-8 min-h-20'>
                    <h1 onClick={() => berhasil ? setBerhasil(false) : setBerhasil(true)} className='w-full text-2xl font-semibold border-b-2 cursor-pointer curso border-cyan-400 text-cyan-600'>Berhasil Melakukan Peminjaman</h1>
                    <div className='flex flex-wrap w-full gap-5 mt-4'>

                        {dataBerhasil.length > 0 ?
                            berhasil ?
                                dataBerhasil.map((e, i) => (
                                    <CardHistory key={i} sub={() => { }} e={e}></CardHistory>
                                )) : <p className='text-xl font-bold'>....</p>
                            : <div className='flex items-center justify-center w-full text-2xl min-h-44'>Tidak Ada Request Meminjam</div>

                        }
                    </div>
                </div>
                <div className='w-full mt-8 min-h-44'>
                    <h1 onClick={() => gagal ? setGagal(false) : setGagal(true)} className='w-full text-2xl font-semibold border-b-2 cursor-pointer cur border-cyan-400 text-cyan-600'>Gagal Melakukan Peminjaman</h1>
                    <div className='flex flex-wrap w-full gap-5 mt-4'>

                        {
                            dataGagal.length > 0 ?
                                gagal ?
                                    dataGagal.map((e, i) => (
                                        <CardHistory key={i} sub={() => { }} e={e}></CardHistory>
                                    )) :
                                    <p className='text-xl font-bold'>....</p>
                                : <div className='flex items-center justify-center w-full text-2xl min-h-44'>Tidak Ada Request Meminjam</div>

                        }
                    </div>
                </div>

            </div>

        </DashUser>
    )
}

export default History
