import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import { getAllDataKendaraan, postKendaraan } from '../service/kendaraan'
import BtnK from '../components/BtnK'
import CardKendaraan from '../components/CardKendaraan'
import ModalKendaraan from '../components/ModalKendaraan'
import { fixHandle } from '../service/fixHandle'
import { RiH1 } from 'react-icons/ri'
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
        // setShowModal(false)
      },100)
    }else{
      postKendaraan(dataK,(berhasil)=>{
        setMsg(berhasil)
        setTimeout(()=>{
          window.location.href='/projectPTS12/kendaraan'
          setLoading(false)
          // setShowModal(false)
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

          {/* {
          [1, 2, 3, 4, 5, 6, 7, 8].map((a, i) => (
            <div key={i} className="max-w-[275px] overflow-hidden rounded-md shadow-md hover:shadow-lg">
              <div className="relative">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                  alt="Product Image"
                />
                <div className="absolute top-0 right-0 px-2 py-1 m-2 text-sm font-medium text-white bg-red-500 rounded-md">
                  SALE
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-medium">Product Title</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                  vel eros fermentum faucibus sit amet euismod lorem.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$19.99</span>
                  <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

          ))
        } */}
        {msg?<h1>{msg}</h1>:<></>}
        </div>
      </div>

    </Dashboard>
  )
}

export default Kendaraan
