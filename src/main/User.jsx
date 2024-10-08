import React from 'react'
import Dashboard from '../template/Dashboard'
import { useState, useEffect } from 'react'
import BtnK from '../components/BtnK'
import ModalUser from '../components/ModalUser'
import Alert from '../components/Alert'
import { getAllDataUser, getAllDataUserById, postDataUser, putUser } from '../service/user'
import { handleAlerts } from '../service/alert'
import Table from '../template/Table'
import Column from '../components/Column'
const User = () => {
    const [data, setData] = useState()
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

    useEffect(() => {
        getAllDataUser().then((res) => setData(res))
    }, [])

    function handleShowModal() {
        setShowModal(true)
    }

    function postData() {
        setLoading(true)
        if (dataU.nama == '' || dataU.telephone == '' || dataU.email == '' || dataU.alamat === '' || dataU.no_ktp === 0 || dataU.no_ktp === '') {
            setErr('pastikan data terisi')
            handleAlerts(alerts, setAlerts)
            setLoading(false)
        } else {

            postDataUser(dataU, (berhasil) => {
                setTimeout(() => {
                    setLoading(false)
                    window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/user'
                }, 500)
                console.log(berhasil)
            }, (gagal) => {
                setTimeout(() => {

                    setLoading(false)
                    setErr('gagal menambah data')
                    handleAlerts(alerts, setAlerts)
                }, 500)
                console.log(gagal)
            })
        }
    }

    function showModelPut(id) {
        setShowModalUpdate(true)
        getAllDataUserById(id).then((data) => setDataUe(data))
    }
    function handlePut() {

        setLoading(true)
        if (dataUe.nama == '' || dataUe.telephone == '' || dataUe.email == '' || dataUe.alamat === '' || dataUe.no_ktp === 0 || dataUe.no_ktp === '') {

            handleAlerts(alert, setAlerts)
            setErr('data harus diisi')
            setTimeout(() => {
                setLoading(false)
            }, 200)
        } else {

            putUser(dataUe, dataUe.id, (berhasil) => {
                setTimeout(() => {
                    window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/user/'
                }, 1000)
                console.log(berhasil)

            }, (gagal) => {
                console.log(gagal)
                handleAlerts(alert, setAlerts)
                setErr(gagal)
                setLoading(false)
            })
        }

    }


    const headTable = [
        { judul: "NAMA" },
        { judul: "NO_TELEPHONE" },
        { judul: "EMAIL" },
        { judul: "ALAMAT" },
        { judul: "No_ktp" },
    ]

    return (
        <Dashboard title="User">
            <Alert err={err} alerts={alerts} ></Alert>
            <div className='flex justify-end w-full'>
                
            <button onClick={handleShowModal} className='px-3 py-1 text-white rounded-md bg-cyan-500 active:scale-95'>


                Add
            </button>
            </div>
            <ModalUser teks='Add Data Users' title='Add Data User ' loading={loading} handlePost={postData} dataU={{ dataU, setDataU }} modal={{ showModal, setShowModal }}></ModalUser>
            <ModalUser teks='Update Data Users' title='Update Data User ' loading={loading} handlePost={handlePut} dataU={{ dataU: dataUe, setDataU: setDataUe }} modal={{ showModal: showModalUpdate, setShowModal: setShowModalUpdate }}></ModalUser>

            <Table title={'User'} headers={headTable} >
                {
                    data ?
                        data.map((item, i) => (
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

        </Dashboard>
    )
}

export default User
