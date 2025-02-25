import React, { useEffect, useState } from 'react'
import DashUser from '../template/DashUser'
import { getAllData } from '../service/get'
import Table from '../template/Table'
import { Link } from 'react-router-dom'
import Column from '../components/Column'
import { convertToRp } from '../service/currency'

const PeminjamanUser = () => {
     const [data, setData] = useState([])
      const [currentData, setCurrentData] = useState([])
      const dataku=JSON.parse(localStorage.getItem('dataUser'))
      useEffect(() => {
        const url = 'http://localhost:3100/peminjaman/findUser/'+dataku.id
        getAllData(url).then((data, i) => setData(data))
    
      }, [])
    
    
      const headTable = [
        { judul: "kendaraan" },
        { judul: "tGL_peminjaman" },
        { judul: "tgl_pengembalian" },
        { judul: "Peminjam" },
        { judul: "Admin" },
        { judul: "total" },
        { judul: "status" },
    
      ]
    
  return (
    <DashUser title='Peminjaman'>
       {data.length !== 0 ? 
      <Table title='Peminjaman' status='user' headers={headTable} data={data}  setCurrentData={setCurrentData} >
        {
          currentData.length > 0 ? (
            currentData.map((item, i) => (
              <tr key={i} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <Link className='hover:underline' to={`/kendaraan/${item.Kendaraan.id}`}>
                    {item.Kendaraan.nama}
                  </Link>
                </th>
                <Column value={item.tanggal_peminjaman.substring(0, 10)} />
                <Column value={item.tanggal_pengembalian.substring(0, 10)} />
                <Column value={`${item.User.nama} (${item.User.no_ktp})`} />
                <Column value={item.Admin.nama} />
                <Column value={convertToRp(item.total_harga)} />
                <Column
                  value={
                    item.status ? (
                      <span className='text-red-600'>Proses</span>
                    ) : (
                      <span className='text-green-600'>Selesai</span>
                    )
                  }
                />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headTable.length} className="py-4 text-center">
                Tidak ada data
              </td>
            </tr>
      ) }
      </Table>
      :<div className='w-full h-[500px] flex justify-center items-center text-2xl font-semibold text-gray-800'>Belum Ada Data</div>}
    </DashUser>
  )
}

export default PeminjamanUser
