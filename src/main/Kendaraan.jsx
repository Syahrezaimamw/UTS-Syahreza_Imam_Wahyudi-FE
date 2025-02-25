import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import BtnK from '../components/BtnK'
import CardKendaraan from '../components/CardKendaraan'
import ModalKendaraan from '../components/ModalKendaraan'
import Alert from '../components/Alert'
import { handleAlerts } from '../service/alert'
import { postDataAllKendaraan, postDataAllTable } from '../service/post'
import { getAllData, getAllDataByStatus, searchKendaraan } from '../service/get'
const Kendaraan = () => {
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [alerts, setAlerts] = useState([])
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
    //? gambar
    const [dataGambar,setDataGambar]=useState('')

    //?data untuk di post
  const [dataK, setDataK] = useState({
    nama: '',
    merk: '',
    nomer_plat: '',
    tahun_pembuatan: '',
    kategori: '',
    tipe: '',
    warna: '',
    harga: 0,
    gambar:null,
    status: true,
  })


    

  const urlKendaraan = 'http://localhost:3100/kendaraan/'
  useEffect(() => {
    getAllData(urlKendaraan).then((result) => setData(result))
  }, [])




  function handlePost() {
    setLoading(true)
    console.log(dataK)
    const url = 'http://localhost:3100/kendaraan/create'
    postDataAllKendaraan(url, dataK, (berhasil) => {
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
    // postDataAllTable()
  }


  //? filter status kendaraan
  const [btnPenuh, setBtnPenuh] = useState(false)
  const [btnKosong, setBtnKosong] = useState(false)
  const [btn, setBtn] = useState()
  const [searchValue,setSearchValue]=useState('')

  function handleStatusKosong() {
   setBtn((btn)=>true)
   console.log({btn})
   console.log({btnKosong})
    setBtnPenuh(false)
    setBtnKosong(btnKosong ? false : true)
    if (btnKosong ) {
      setBtn('')
      searchKendaraan(searchValue,'',(data)=>setData(data),(err)=>setData(err))
      // getAllData(urlKendaraan).then((result) => setData(result))
    } else {
      searchKendaraan(searchValue,true,(data)=>setData(data),(err)=>setData(err))
      // getAllDataByStatus(1).then((result) => setData(result))
    }


    
    
  }
  function handleStatusPenuh() {
    // searchKendaraan(searchValue,true)
    setBtn(false)
    setBtnKosong(false)
    setBtnPenuh(btnPenuh ? false : true)
    
    if (btnPenuh) {
      setBtn('')
      searchKendaraan(searchValue,'',(data)=>setData(data),(err)=>setData(err))
      // getAllData(urlKendaraan).then((result) => setData(result))
    } else {
      searchKendaraan(searchValue,false,(data)=>setData(data),(err)=>setData(err))
      // getAllDataByStatus(0).then((result) => setData(result))
    }
  }

  function handleSearchKendaraan(value){
    setSearchValue(value)
    if(value===''){
  
    }
    
    searchKendaraan(value,btn,(data)=>setData(data),(err)=>setData(err))
  }

  return (
    <Dashboard title={'Kendaraan'}>
      <div>
        <Alert alerts={alerts} err={err}></Alert>
        <div className='flex flex-col items-center justify-between w-full pr-3 mb-8 lg:flex-row '>
          <form className="w-full lg:w-fit">
            <div className="flex">
              <div className="relative flex w-full mb-4 overflow-hidden border-2 border-gray-200 rounded-lg lg:mb-0 ">
                <input
                  type="search"
                 onChange={(e)=>handleSearchKendaraan(e.target.value)}
                  className="block p-2.5 w-full lg:w-[280px] outline-none rounded-s-lg z-20 text-sm text-gray-900  rounded-e-0    "
                  placeholder="Search the vehicle you want"
                  required=""
                />
                <button
                  type="submit"
                  className=" h-full p-2.5 text-sm font-medium text-white bg-cyan-600 rounded-e-lg border border-cyan-700 hover:bg-cyan-500  "
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>

          <div className='flex justify-between w-full gap-8 lg:w-fit lg:justify-end'>

            <div className='flex items-center gap-4'>
              <button onClick={handleStatusKosong} className={`px-3 font-normal hover:scale-[1.02] rounded-md active:scale-95 py-1 border-2 ${btnKosong ? 'text-white bg-cyan-500' : 'text-cyan-500'} border-cyan-500 `}>Kosong</button>
              <button onClick={handleStatusPenuh} className={`px-3 font-normal hover:scale-[1.02] rounded-md active:scale-95 py-1 border-2 ${btnPenuh ? 'text-white bg-red-500' : 'text-red-500'} border-red-500 `}>Penuh</button>
            </div>
            <BtnK warna='bg-cyan-500' fs={() => setShowModal(true)}>
              Add Kendaraan
            </BtnK>
          </div>

        </div>
        <ModalKendaraan teks='Add Data Kendaraan' title='tambahkan data'  setDataGambar={setDataGambar} loading={loading} handlePost={handlePost} dataK={{ dataK, setDataK }} modal={{ showModal, setShowModal }}></ModalKendaraan>

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
