import React, { useEffect, useState } from 'react'
import DashUser from '../template/DashUser'
import CardKendaraan from '../components/CardKendaraan'
import { getAllData } from '../service/get'
import ModalNotif from '../components/ModalNotif'
import { postDataAllTable } from '../service/post'
const UserSewa = () => {
  const[data,setData]=useState([])
  const[idK,setK]=useState()
  const[hargaK,setHargaK]=useState()
  const [modal,setModal]=useState(false)
  const idUser=JSON.parse(localStorage.getItem('dataUser'))
  const urlKendaraan = 'http://localhost:3100/kendaraan/'
  useEffect(() => {
    getAllData(urlKendaraan).then((result) => setData(result))
  }, [])
  function handleAdd(data){
    setK(data.id)
    setHargaK(data.harga)
    setModal(true)
  }
  const[total,setTotal]=useState()
  const [dataN,setDataN]=useState({
    tanggal_peminjaman:'',
    tanggal_pengembalian:'',
    Status:"Diminta",
    UserId:idUser.id,
    
  })
  function handleAddNotif(){
    console.log({...dataN,total_harga:total,KendaraanId:idK})
            const dataPost = {...dataN,total_harga:total,KendaraanId:idK}
            const url = 'http://localhost:3100/notif/create'
            postDataAllTable(url, dataPost, () => {
                    window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/dashUser/'
            }, (gagal) => {
               alert(gagal)
            }
            )
  }

  return (
    <DashUser title="Kendaraan">
      {hargaK?
      <ModalNotif sub={handleAddNotif} title="Add Notif" setTotal={setTotal} hargaKendara={hargaK} data={{dataN:dataN,setDataN:setDataN}} modal={{setShowModal:setModal ,showModal:modal}}></ModalNotif>
      :<></>
    }
      <div className='w-full '>
      {data.length > 0 ?
            data.map((dt, i) => (
              <CardKendaraan title='user' sub={(e)=>handleAdd(e)} dt={dt} key={i} />
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
