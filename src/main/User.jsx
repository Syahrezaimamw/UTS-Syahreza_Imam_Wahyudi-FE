import React from 'react'
import Dashboard from '../template/Dashboard'
import { useState, useEffect } from 'react'
import ModalUser from '../components/ModalUser'
import Alert from '../components/Alert'
import { handleAlerts } from '../service/alert'
import Table from '../template/Table'
import Column from '../components/Column'
import { getAllData, getAllDataById } from '../service/get'
import { postDataAllTable } from '../service/post'
import { updateAllData } from '../service/put'
const User = () => {
    const [data, setData] = useState([])
    const [alerts, setAlerts] = useState([])

    const [dataU, setDataU] = useState({
        nama: '',
        telephone: '',
        email: '',
        alamat: "",
        no_ktp: 0,


    })
    const [dataUe, setDataUe] = useState({
        nama: '',
        telephone: '',
        email: '',
        alamat: "",
        no_ktp: 0,


    })
    const [err, setErr] = useState('')
    const [showModal, setShowModal] = useState()
    const [showModalUpdate, setShowModalUpdate] = useState()
    const [loading, setLoading] = useState()
    const urlUser = 'http://localhost:3100/user/'


    useEffect(() => {
        getAllData(urlUser).then((res) => setData(res))
    }, [])

    //* Add User
    function postData() {
        setLoading(true)
        const url = 'http://localhost:3100/user/create'
        postDataAllTable(url, dataU, (berhasil) => {
            setTimeout(() => {
                setLoading(false)
                window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/user'
            }, 500)
        }, (gagal) => {
            setTimeout(() => {

                setLoading(false)
                setErr(gagal)
                handleAlerts(alerts, setAlerts)
            }, 500)
        })
    }

    //* Update User
    function showModelPut(id) {
        setShowModalUpdate(true)
        const url = 'http://localhost:3100/user/find/'+id
        getAllDataById(url).then((data) => setDataUe(data))
    }
    
    function handlePut() {
        const url = 'http://localhost:3100/user/update/'+dataUe.id
        setLoading(true)
            updateAllData(url,dataUe, (berhasil) => {
                setTimeout(() => {
                    window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/user/'
                }, 1000)
            }, (gagal) => {
                setTimeout(() => {
                    setLoading(false)
                    setErr(gagal)
                    handleAlerts(alerts, setAlerts)
                }, 500)
            })
    

    }


    const headTable = [
        { judul: "NAMA" },
        { judul: "NO_TELEPHONE" },
        { judul: "EMAIL" },
        { judul: "ALAMAT" },
        { judul: "No_ktp" },
        { judul: "Option" },
    ]
      const [currentData, setCurrentData] = useState([])
    
    

    return (
        <Dashboard title="User">
            <Alert err={err} alerts={alerts} ></Alert>
            <ModalUser teks='Add Data Users' title='Add Data User ' loading={loading} handlePost={postData} dataU={{ dataU, setDataU }} modal={{ showModal, setShowModal }}></ModalUser>
            <ModalUser teks='Update Data Users' title='Update Data User ' loading={loading} handlePost={handlePut} dataU={{ dataU : dataUe, setDataU:setDataUe }} modal={{ showModal: showModalUpdate, setShowModal: setShowModalUpdate }}></ModalUser>
            {data.length !== 0 ?
            <Table title={'User / Client'}  headers={headTable} data={data} setCurrentData={setCurrentData}
            // tambahData={

            //     <button onClick={() => setShowModal(true)} className='px-3 py-0 text-white rounded-sm text-md bg-cyan-500 active:scale-95'>


            //         Add
            //     </button>}
            >
                {
                    currentData.length > 0 ?
                        currentData.map((item, i) => (
                            <tr key={i} className="bg-white border-b ">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    {item.nama}
                                </th>
                                <Column value={item.telephone} />
                                <Column value={item.email} />
                                <Column value={item.alamat} />
                                <Column value={item.no_ktp} />
                                <Column value={<p
                                    href="#"
                                    onClick={(() => showModelPut(item.id))}
                                    className="font-medium cursor-pointer text-cyan-500 hover:underline"
                                >
                                    Edit
                                </p>} />

                            </tr>
                        )) :
                        <></>
                }
            </Table>
            :<></>}
          

        </Dashboard>
    )
}

export default User
