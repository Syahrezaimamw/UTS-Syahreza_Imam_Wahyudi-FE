import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import BtnK from '../components/BtnK'
import CardKendaraan from '../components/CardKendaraan'
import ModalKendaraan from '../components/ModalKendaraan'
import Alert from '../components/Alert'
import { handleAlerts } from '../service/alert'
import { postDataAllTable } from '../service/post'
import { getAllData, getAllDataByStatus } from '../service/get'
const Kendaraan = () => {
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [alerts, setAlerts] = useState([])
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const [dataK, setDataK] = useState({
    nama: '',
    merk: '',
    nomer_plat: '',
    tahun_pembuatan: '',
    kategori: '',
    tipe: '',
    warna: '',
    harga: 0,
    gambar: '',
    status: true,
  })

  const urlKendaraan = 'http://localhost:3100/kendaraan/'
  useEffect(() => {
    getAllData(urlKendaraan).then((result) => setData(result))
  }, [])




  function handlePost() {
    setLoading(true)
    const url = 'http://localhost:3100/kendaraan/create'
    postDataAllTable(url, dataK, (berhasil) => {
      setMsg(berhasil)
      setTimeout(() => {
        window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/kendaraan'
        setLoading(false)
      }, 2000)
    }, (gagal) => {
      setErr(gagal)
      setLoading(false)
      handleAlerts(alerts, setAlerts)
    })
  }


  //? filter status kendaraan
  const [btnPenuh, setBtnPenuh] = useState(false)
  const [btnKosong, setBtnKosong] = useState(false)

  function handleStatusKosong() {
    setBtnPenuh(false)
    setBtnKosong(btnKosong ? false : true)
    if (btnKosong) {
      getAllData(urlKendaraan).then((result) => setData(result))
    } else {
      getAllDataByStatus(1).then((result) => setData(result))
    }




  }
  function handleStatusPenuh() {
    setBtnKosong(false)
    setBtnPenuh(btnPenuh ? false : true)

    if (btnPenuh) {
      getAllData(urlKendaraan).then((result) => setData(result))
    } else {
      getAllDataByStatus(0).then((result) => setData(result))
    }
  }
  
  return (
    <Dashboard title={'Kendaraan'}>
      <div>
        <Alert alerts={alerts} err={err}></Alert>
        <div className='flex items-center justify-end w-full gap-8 pr-4 mb-8 items-'>
          <div className='flex items-center gap-4'>
            <button onClick={handleStatusKosong} className={`px-3 font-normal hover:scale-[1.02] rounded-md active:scale-95 py-1 border-2 ${btnKosong ? 'text-white bg-cyan-500' : 'text-cyan-500'} border-cyan-500 `}>Kosong</button>
            <button onClick={handleStatusPenuh} className={`px-3 font-normal hover:scale-[1.02] rounded-md active:scale-95 py-1 border-2 ${btnPenuh ? 'text-white bg-red-500' : 'text-red-500'} border-red-500 `}>Penuh</button>
          </div>
          <BtnK warna='bg-cyan-500' fs={() => setShowModal(true)}>
            Add Kendaraan
          </BtnK>

        </div>
        <ModalKendaraan teks='Add Data Kendaraan' title='tambahkan data' loading={loading} handlePost={handlePost} dataK={{ dataK, setDataK }} modal={{ showModal, setShowModal }}></ModalKendaraan>

        <div className='flex flex-wrap items-center gap-6'>

          {data.length > 0 ?
            data.map((dt, i) => (
              <CardKendaraan dt={dt} key={i} />
            )) :
            <div className='flex items-center justify-center w-full text-xl foont-bold text-gray-600 min-h-[550px]'>
              Tidak Ada Data
            </div>
          }


          {msg ? <h1>{msg}</h1> : <></>}
        </div>
      </div>

    </Dashboard>
  )
}

export default Kendaraan
