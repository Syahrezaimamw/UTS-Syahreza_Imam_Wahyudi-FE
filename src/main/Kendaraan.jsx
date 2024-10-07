import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import { getAllDataKendaraan, postKendaraan } from '../service/kendaraan'
import BtnK from '../components/BtnK'
import CardKendaraan from '../components/CardKendaraan'
import ModalKendaraan from '../components/ModalKendaraan'
import { fixHandle } from '../service/fixHandle'
import Alert from '../components/Alert'
import { handleAlerts } from '../service/alert'
const Kendaraan = () => {
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [alerts,setAlerts]=useState([])
  const [msg,setMsg]=useState('')
  const [err,setErr]=useState('')
  const [loading,setLoading]=useState(false)
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
    status:true,
})

  
  useEffect(() => {
    getAllDataKendaraan().then((result) => setData(result.data.datas))
  }, [])

  
  function handleClick() {
   fixHandle(()=>{
    setShowModal(true)
   })
  }
  
  function handlePost(){
    setLoading(true)
    if(dataK.nama === '' || dataK.merk === ''||dataK.harga==0 || dataK.nomer_plat === '' || dataK.gambar ==''||dataK.kategori==''||dataK.tipe==''||dataK.warna==''){
      setErr('pastikan semua input terisi')
      
      handleAlerts(alerts,setAlerts)
      setTimeout(()=>{
        setLoading(false)
      },100)
    }else{
      postKendaraan(dataK,(berhasil)=>{
        setMsg(berhasil)
        setTimeout(()=>{
          window.location.href='/projectPTS12/kendaraan'
          setLoading(false)
        },2000)
        
      },(gagal)=>{
        setErr('gagal melakukan post')
        setLoading(false)
        handleAlerts(alerts,setAlerts)
      })
    }
   }

  return (
    <Dashboard title={'Kendaraan'}>
      <div>
        <Alert alerts={alerts} err={err}></Alert>
        <div className='flex justify-end w-full pr-4 mb-8'>
          <BtnK warna='bg-cyan-400' fs={handleClick}>
            Add Kendaraan
          </BtnK>

        </div>
        <ModalKendaraan teks='Add Data Kendaraan' title='tambahkan data' loading={loading}  handlePost={handlePost}  dataK={{dataK,setDataK}} modal={{ showModal, setShowModal }}></ModalKendaraan>

        <div className='flex flex-wrap items-center gap-6'>

          {data.length > 0 ?
            data.map((dt, i) => (
              <CardKendaraan dt={dt} key={i} />
            )) :
            <div className='flex items-center justify-center w-full text-xl foont-bold text-gray-600 min-h-[550px]'>
              Tidak Ada Data
            </div>
          }

         
        {msg?<h1>{msg}</h1>:<></>}
        </div>
      </div>

    </Dashboard>
  )
}

export default Kendaraan
