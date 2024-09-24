import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import Table from '../template/Table'
import { getAllData } from '../service/get'
import { Link } from 'react-router-dom'
import Column from '../components/Column'
import { convertToRp } from '../service/currency'
const Peminjaman = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const url = 'http://localhost:3100/peminjaman/'
    getAllData(url).then((data, i) => setData(data))
  }, [])

  const headTable = [
    { judul: "tGL_peminjaman" },
    { judul: "tgl_pengembalian" },
    { judul: "nama_peminjam" },
    { judul: "KTP_Peminjam" },
    { judul: "kendaraan" },
    { judul: "Admin" },
    { judul: "total" },
    { judul: "status" },
    // { judul: "No_ktp" },
  ]
  return (
    <Dashboard title='Peminjaman'>
      <Table title='Peminjaman' headers={headTable} >
        {
          data ?
            data.map((item, i) => (
              <tr key={i} className="bg-white border-b ">
                <Column value={item.tanggal_peminjaman.substring(0, 10)}/>
                <Column value={item.tanggal_pengembalian.substring(0, 10)}/>
                <Column value={item.User.nama}/>
                <Column value={item.User.no_ktp}/>
                <Column value={<Link to={`/kendaraan/${item.Kendaraan.id}`}>{item.Kendaraan.nama}</Link>}/>
                <Column value={item.Admin.nama}/>
                <Column value={convertToRp(  item.total_harga)}/>
                <Column value={
                  item.status?
                  <span className='text-red-600' >
                    Dalam Proses
                  </span>
                  :
                  <span className='text-green-600'>
                    Selesai
                  </span>
                }/>
                <Column value={<p
                    href="#"
                    // onClick={(() => showModelPut(item.id))}
                    className="font-medium cursor-pointer text-cyan-400 hover:underline"
                  >
                    Edit
                  </p>}/>
              
                
              
              </tr>
            )) :
            <></>
        }
      </Table>
    </Dashboard>
  )
}

export default Peminjaman
