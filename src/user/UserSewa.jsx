import React, { useEffect, useState } from 'react'
import DashUser from '../template/DashUser'
import CardKendaraan from '../components/CardKendaraan'
import { getAllData, searchKendaraan } from '../service/get'
import ModalNotif from '../components/ModalNotif'
import { postDataAllTable } from '../service/post'
import { FaMagnifyingGlass } from 'react-icons/fa6'
const UserSewa = () => {
  
  const [data, setData] = useState([])
  const [idK, setK] = useState()
  const [hargaK, setHargaK] = useState()
  const [modal, setModal] = useState(false)
  const idUser = JSON.parse(localStorage.getItem('dataUser'))
  const urlKendaraan = 'http://localhost:3100/kendaraan/'
  
  useEffect(() => {
    getAllData(urlKendaraan).then((result) => setData(result))
  }, [])
  function handleAdd(data) {
    setK(data.id)
    setHargaK(data.harga)
    setModal(true)
  }
  const [total, setTotal] = useState()
  const [dataN, setDataN] = useState({
    tanggal_peminjaman: '',
    tanggal_pengembalian: '',
    Status: "Diminta",
    UserId: idUser.id,

  })
  function handleAddNotif() {
    const dataPost = { ...dataN, total_harga: total, KendaraanId: idK }
    const url = 'http://localhost:3100/notif/create'
    postDataAllTable(url, dataPost, () => {
      window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/dashUser/'
    }, (gagal) => {
      alert(gagal)
    }
    )
  }
  const [searchValue,setSearchValue]=useState('')

  function handleSearchKendaraan(value){
    setSearchValue(value)
    if(value===''){
    }
    
    searchKendaraan(value,'',(data)=>setData(data),(err)=>setData(err))
  }


  return (
    <DashUser title="Kendaraan">
      {hargaK ?
        <ModalNotif sub={handleAddNotif} title="Buat Request Kendaraan" setTotal={setTotal} hargaKendara={hargaK} data={{ dataN: dataN, setDataN: setDataN }} modal={{ setShowModal: setModal, showModal: modal }}></ModalNotif>
        : <></>
      }
      <div className="relative flex w-full mb-4 overflow-hidden rounded-lg lg:mb-10 ">
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
          <FaMagnifyingGlass />
          <span className="sr-only">Search</span>
        </button>
      </div>
      <div className='flex flex-wrap w-full gap-6'>

        {data.length > 0 ?
          data.map((dt, i) => (
            <CardKendaraan title='user' sub={(e) => handleAdd(e)} dt={dt} key={i} />
          )) :
          <div className='flex items-center justify-center w-full text-xl foont-bold text-gray-600 min-h-[550px]'>
            Tidak Ada Data
          </div>
        }
      </div>
    </DashUser>
  )
}

export default UserSewa
