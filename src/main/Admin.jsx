import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import Column from '../components/Column'
import Table from '../template/Table'
import { getAllData } from '../service/get'
import axios from 'axios'
import { deleteData } from '../service/delete'
import { Link } from 'react-router-dom'

const Admin = () => {
    const [data, setData] = useState([])

    const [currentData, setCurrentData] = useState([])
    const headTable = [
        { judul: "NO" },
        { judul: "NAMA" },
        { judul: "EMAIL" },
        { judul: "ROLE" },
        { judul: "action" },
    ]
    const token = localStorage.getItem('token')
    const urlAdmin = 'http://localhost:3100/admin/'
    useEffect(() => {
        axios.get(urlAdmin, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                setData(response.data.datas)
                //   console.log('Data:', response.data.datas);
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }, [])

    function handleDelete(id) {
        const url = urlAdmin + "delete/" + id
        axios.delete(url)
            .then(response => {
                window.localStorage.href = '/admin'
                //   console.log('Data:', response.data.datas);
            })
            .catch(error => {
                window.localStorage.href = '/admin'
            })
    }

    return (
        <Dashboard title="/admin">
            {data.length !== 0 ?
                <Table title={'Admin'} headers={headTable} data={data} setCurrentData={setCurrentData}
                    tambahData={
                        <Link to={'/register'} className='px-3 py-0 text-white rounded-sm text-md bg-cyan-500 active:scale-95'>


                            Tambah Karyawan
                        </Link>}
                >
                    {
                        currentData.length > 0 ?
                            currentData.map((item, i) => (
                                <tr key={i} className={`${item.role === 'Pemilik' ? 'bg-cyan-400 text-white' : 'bg-white text-gray-900'} border-b `}>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap "
                                    >
                                        {1 + i}
                                    </th>
                                    <Column value={item.nama} />
                                    <Column value={item.email} />

                                    <Column value={item.role} />

                                    <Column value={
                                        <div>
                                            {
                                                item.role == "Pemilik" ?


                                                    <p
                                                        href="#"
                                                        className="font-medium cursor-pointer text-Blue-900 hover:underline"
                                                    >
                                                        -----
                                                    </p>
                                                    : <p
                                                        href="#"
                                                        onClick={() => handleDelete(item.id)}
                                                        className="font-medium text-red-600 cursor-pointer hover:underline"
                                                    >
                                                        Delete
                                                    </p>
                                            }
                                        </div>
                                    } />

                                </tr>
                            )) :
                            <></>
                    }
                </Table>
                : <></>}


        </Dashboard>
    )
}

export default Admin
