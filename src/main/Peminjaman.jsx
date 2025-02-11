import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import Table from '../template/Table'
import { getAllData } from '../service/get'
import { Link } from 'react-router-dom'
import Column from '../components/Column'
import { convertToRp } from '../service/currency'
import ModalPeminjaman from '../components/ModalPeminjaman'
const Peminjaman = () => {

  const [data, setData] = useState([])
  const [currentData, setCurrentData] = useState([])
  useEffect(() => {
    const url = 'http://localhost:3100/peminjaman/'
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

  const [showModal, setShowModal] = useState(false)

  function showModelPut(id) {
    setShowModal(true)
  }

  return (
    <Dashboard title='Peminjaman'>
    {data.length !== 0 ? 
      <Table title='Peminjaman' headers={headTable} data={data}  setCurrentData={setCurrentData} >
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
        {/* <ModalPeminjaman title={'Add Peminjaman'} modal={{ showModal, setShowModal }}></ModalPeminjaman> */}
      </Table>
      :<>ssss</>}

    </Dashboard>
  )
}

export default Peminjaman
