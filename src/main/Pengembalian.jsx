import React from 'react'
import Dashboard from '../template/Dashboard'
import { useState, useEffect } from 'react'
import { getAllData } from '../service/get'
import { Link } from 'react-router-dom'
import Table from '../template/Table'
import Column from '../components/Column'
import { convertToRp } from '../service/currency'
const Pengembalian = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const url = 'http://localhost:3100/pengembalian/'
    getAllData(url).then((data, i) => setData(data))
  }, [])

  const headTable = [
    { judul: "tgl_dikembalikan" },
    { judul: "tGL_peminjaman" },
    { judul: "tgl_pengembalian" },
    { judul: "nama_peminjam" },
    { judul: "kendaraan" },
    { judul: "Admin" },
    { judul: "denda" },
    { judul: "total" },
  ]
  return (
    <Dashboard title='Pengembalian'>
      <Table title={'Pengembalian'} headers={headTable}>

        {
          data ?
            data.map((item, i) => (
              <tr key={i} className="bg-white border-b ">
                <Column value={item.tanggal_dikembalikan.substring(0, 10)} />
                <Column value={item.Peminjaman.tanggal_peminjaman.substring(0, 10)} />
                <Column value={item.Peminjaman.tanggal_pengembalian.substring(0, 10)} />
                <Column value={item.Peminjaman.User.nama} />
                <Column value={<Link to={`/kendaraan/${item.Peminjaman.Kendaraan.id}`}>{item.Peminjaman.Kendaraan.nama}</Link>} />
                <Column value={item.Peminjaman.Admin.nama} />
                <Column value={convertToRp(item.denda)} />
                <Column value={ convertToRp(item.Peminjaman.total_harga + item.denda)} />
                <Column value={   <p className='flex items-center gap-3'>
                  
                 <span
                    href="#"
                    // onClick={(() => showModelPut(item.id))}
                    className="font-medium cursor-pointer text-cyan-500 hover:underline"
                  >
                    Edit
                  </span>
                 <span
                    href="#"
                    // onClick={(() => showModelPut(item.id))}
                    className="font-medium text-gray-500 cursor-pointer hover:underline"
                  >
                    <Link to={`/pengembalian/${item.id}`}>
                    View
                    </Link>
                  </span>
                  </p>
                } />
              </tr>
            )) :
            <></>
        }
      </Table>
    </Dashboard>
  )
}

export default Pengembalian
