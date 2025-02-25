import React, { useEffect, useState } from 'react'
import DashUser from '../template/DashUser'
import { getAllData } from '../service/get'
import Table from '../template/Table'
import { Link } from 'react-router-dom'
import Column from '../components/Column'
import { convertToRp } from '../service/currency'

const PengembalianUser = () => {
    const [data, setData] = useState([])
    const dataku=JSON.parse(localStorage.getItem('dataUser'))

      useEffect(() => {
        const url = 'http://localhost:3100/pengembalian/findUser/'+dataku.id
        getAllData(url).then((data, i) => setData(data))
      }, [])
      const [currentData, setCurrentData] = useState([])
    
      const headTable = [
        { judul: "kendaraan" },
        { judul: "tgl_dikembalikan" },
        { judul: "tGL_peminjaman" },
        { judul: "tgl_pengembalian" },
        { judul: "nama_peminjam" },
        { judul: "Admin" },
        { judul: "total" },
        { judul: "Option" },
    
      ]
  return (
    <DashUser title='Pengembalian'>
       {data.length !== 0 ?
        <Table status={'user'} title={'Pengembalian'} headers={headTable} data={data} setCurrentData={setCurrentData}>

          {
            currentData.length > 0 ?
              currentData.map((item, i) => (
                <tr key={i} className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <Link to={`/kendaraan/${item.Peminjaman.Kendaraan.id}`}>{item.Peminjaman.Kendaraan.nama}</Link>
                  </th>
                  <Column value={item.tanggal_dikembalikan.substring(0, 10)} />
                  <Column value={item.Peminjaman.tanggal_peminjaman.substring(0, 10)} />
                  <Column value={item.Peminjaman.tanggal_pengembalian.substring(0, 10)} />
                  <Column value={`${item.Peminjaman.User.nama} (${item.Peminjaman.User.no_ktp})`} />
                  <Column value={item.Peminjaman.Admin.nama} />
                  <Column value={convertToRp(item.Peminjaman.total_harga + item.denda)} />
                  <Column value={<p className='flex items-center gap-3'>


                    <span
                      href="#"
                      className="font-medium cursor-pointer text-cyan-500 hover:underline"
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
        :       <div className='w-full h-[500px] flex justify-center items-center text-2xl font-semibold text-gray-800'>Belum Ada Data</div>}
    </DashUser>
  )
}

export default PengembalianUser
