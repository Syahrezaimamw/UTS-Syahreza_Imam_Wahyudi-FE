import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Dashboard from '../template/Dashboard'
import { Link } from 'react-router-dom';
import { convertToRp } from '../service/currency';
import { FaAngleRight } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import ModalKendaraan from '../components/ModalKendaraan';
import { FaPen } from "react-icons/fa6";
import BtnK from '../components/BtnK';
import Alert from '../components/Alert';
import { handleAlerts } from '../service/alert';
import ModalPeminjaman from '../components/ModalPeminjaman';
import { postDataAllTable } from '../service/post';
import ModalPengembalian from '../components/ModalPengembalian';
import { getAllDataById, getAllPeminjamanSekarang } from '../service/get';
import { updateAllData } from '../service/put';
import { deleteData } from '../service/delete';
import { refreshToken } from '../service/refreshToken';
import Popup from '../components/Popup';

const PerKendaraan = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    //? ADMIN
    const [dataAdmin, setDataAdmin] = useState()
    const [token, setToken] = useState()
    

    useEffect(() => {
        refreshToken(setDataAdmin, setToken, () => {
            navigate('/')
        })
    }, [])
    

    const [idA, setIdA] = useState(1)
    useEffect(() => {
        if (dataAdmin) {
            setIdA(dataAdmin.adminId)
        }
    }, [dataAdmin])


    //* message
    const [alerts, setAlerts] = useState([])
    const [err, setErr] = useState(false)

    //* loading
    const [loading, setLoading] = useState(false)
    const [loadDel, setLoadDel] = useState(false)

    //* Modal
    const [showModal, setShowModal] = useState(false)
    const [showModalPeminjaman, setShowModalPeminjaman] = useState(false)
    const [showModalPengembalian, setShowModalPengembalian] = useState(false)

    //* data kendaraan
    const [data, setData] = useState()

    //* data Pengembalian
    const [dataPmjnForPngmbln, setDataPmjnForPngmbln] = useState()
    const [dataPengembalian, setDataPengembalian] = useState({
        tanggal_dikembalikan: '',
        denda: 0,
        kondisi: '',
    })

    //* First Get Data
    useEffect(() => {
        getAllDataById('http://localhost:3100/kendaraan/find/' + id).then((result) => {
            setData(result)
        })
        getAllPeminjamanSekarang(id).then((result) => setDataPmjnForPngmbln(result))
    }, [])

    const url = 'http://localhost:3100/kendaraan'

    const [dataGambar,setDataGambar]=useState('')
    
    //* update kendaraan
    function handlePut() {
        const datar={
            nama:data.nama,
            tipe:data.tipe,
            merk:data.merk,
            nomer_plat:data.nomer_plat,
            status:data.status,
            warna:data.warna,
            tahun_pembuatan:data.tahun_pembuatan,
            kategori:data.kategori,
            harga:data.harga,
        }
        const dataU = {...datar,gambar:dataGambar}
        const urll =url + `/update/${id}`
        
        updateAllData(urll, dataU, (berhasil) => {
            setLoading(true)
            setTimeout(() => {
                window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/kendaraan/' + id
                setLoading(false)
            }, 2000)

        }, (gagal) => {
            handleAlerts(alert, setAlerts)
            setErr(gagal)
            setLoading(false)
        })
    }

    //* delete kendaraan
    function delKendaraan() {
        setLoadDel(true)
        deleteData(url + `/delete/${id}`, () => {
            setTimeout(() => {
                window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/kendaraan'
                setLoadDel(false)
            }, 2000)
        }, () => {
            setTimeout(() => {
                window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/kendaraan'
                setLoadDel(false)
            }, 2000)
        })
    }


    //? PEMINJAMAN
    const [dataPeminjaman, setDataPeminjaman] = useState({
        tanggal_peminjaman: '',
        tanggal_pengembalian: '',
        total_harga: 0,
        status: true,
        UserId: 0,
        KendaraanId: parseInt(id),
    })
    const [total, setTotal] = useState(0)

    //* add data Peminjaman
    function postDataPeminjaman() {
        setLoading(true)
        const dataPost = { ...dataPeminjaman, total_harga: total, AdminId: idA }
        const url = 'http://localhost:3100/peminjaman/create'
        postDataAllTable(url, dataPost, (berhasil) => {
            setTimeout(() => {
                window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/kendaraan/' + id
            }, 1000)
        }, (gagal) => {
            setTimeout(() => {
                setLoading(false)
                setErr(gagal)
                handleAlerts(alerts, setAlerts)
            }, 100)
        }
        )
    }
    //* add data Pengembalian
    function postDataPengembalian() {
        setLoading(true)
        const dataPost = { ...dataPengembalian, PeminjamanId: dataPmjnForPngmbln.id }
        const url = 'http://localhost:3100/pengembalian/create'
        postDataAllTable(url, dataPost, (berhasil) => {
            setTimeout(() => {
                window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/kendaraan/' + id
            }, 1000)
        }, (gagal) => {
            setTimeout(() => {
                setLoading(false)
                setErr(gagal)
                handleAlerts(alerts, setAlerts)
            }, 100)
        }
        )
    }


    //!
    const[popup,setPopup]=useState(false)
    return (
        <Dashboard title={'Kendaraan'}>
            <Alert alerts={alerts} err={err}></Alert>

            {data
                ?
                <ModalKendaraan teks='Update Data Kendaraan' title='update data' loading={loading} setDataGambar={setDataGambar} handlePost={handlePut} dataK={{ dataK: data, setDataK: setData }} modal={{ showModal, setShowModal }}></ModalKendaraan>
                : <></>


            }
            <ModalPeminjaman title={'Add Peminjaman'} dataKendara={data ? data : ''} loading={loading} setTotal={setTotal} harga_sewa={data ? data.harga : 0} modal={{ showModal: showModalPeminjaman, setShowModal: setShowModalPeminjaman }} dataAdmin={dataAdmin} data={{ dataPeminjaman, setDataPeminjaman }} handle={postDataPeminjaman}></ModalPeminjaman>

            <ModalPengembalian title={'Add Pengembalian'} data={{ dataPengembalian, setDataPengembalian }} dataPeminjaman={dataPmjnForPngmbln} modal={{ showModal: showModalPengembalian, setShowModal: setShowModalPengembalian }} loading={loading} handle={postDataPengembalian}></ModalPengembalian>


            <div className='flex gap-2 items-center [&_h1]:font-semibold [&_span]:font-medium [&_span]:text-[12px]  [&_span]:pt-[2px]   [&_h1]:text-md [&_h1]:hover:cursor-pointer'> <h1 className=''><Link to='/kendaraan'>
                Kendaraan </Link></h1> <span><FaAngleRight /></span> <h1>{data ? data.merk : ''}</h1> <span><FaAngleRight /></span> <h1>{data ? data.nama : ''}</h1> <span><FaAngleRight /></span> <h1>{data ? data.tipe : ''}</h1>
            </div>
            <div className='flex mt-9 justify-between items-center  flex-col lg:flex-row  w-full lg:min-h-[480px] '>
                <div className='w-full  lg:w-[40%]  flex items-center justify-center overflow-hidden'>
                    <img src={data ? data.url : ''} className='w-[75%]' alt="" />
                </div>
                <div className='w-full  lg:w-[55%] justify-end flex items-center'>

                    <div className='flex flex-col [&_h1]:text-gray-900  justify-center px-10 py-8 rounded-lg shadow-lg border-2 bg-white me-8 border-gray-200 w-fit '>
                        <div className='flex gap-2 pb-3 mb-4 border-b-2 '>

                            <h1 className='text-4xl font-bold '>{data ? data.nama : ''}</h1>
                            <h1 className='text-4xl font-bold '>( {data ? data.merk : ''} )</h1>
                        </div>
                        <div className='flex justify-between gap-6 pr-[35px] w-full'>

                            <div className='flex items-center '><h1 className='text-2xl font-semibold '>Plat_Nomer : </h1>  <span className='mt-1 text-[20px] font-medium ms-2'>{data ? data.nomer_plat : ''}</span></div>
                            <div className='flex items-center '><h1 className='text-2xl font-semibold '>Warna : </h1>  <span className='mt-1 text-[20px] font-medium ms-2'>{data ? data.warna : ''}</span></div>
                        </div>
                        <div className='flex justify-between w-full pb-3 mt-3 border-b-2 pr-[35px]'>

                            <div className='flex items-center '><h1 className='text-2xl font-semibold '>Tahun_Pembuatan : </h1>  <span className='font-medium text-[20px] ms-2 mt-1'>{data ? data.tahun_pembuatan : ''}</span></div>
                            <div className='flex items-center '><h1 className='text-2xl font-semibold '>Type : </h1>  <span className='font-medium  text-[20px] ms-2 mt-1'>{data ? data.tipe : ''}</span></div>
                        </div>
                        <div className='flex items-center pb-3 mt-3 border-b-2 '><h1 className='text-2xl font-semibold '>Harga : </h1>  <span className='font-medium  text-[20px] ms-2 mt-1'>{convertToRp(data ? data.harga : '')} <span className='font-normal'>/ hari</span></span></div>
                        <div className='flex justify-between mt-4'>
                            <div className='flex items-center gap-2'>
                                {popup?
                               <Popup modal={{popup,setPopup}} loadDel={loadDel} Title="Delete Data Kendaraan" sub={delKendaraan}> </Popup>
                            :<></>}
                                {
                                    data ?
                                        data.status ? <BtnK fs={() => setPopup(true)} warna='bg-red-500'>
                                          <FaTrash />
                                            
                                        </BtnK> :
                                            <></>
                                        : <></>
                                }
                                <BtnK fs={() => setShowModal(true)} warna='bg-gray-500'><FaPen /></BtnK>
                            </div>
                            {
                                data ?
                                    data.status ?
                                        <BtnK fs={() => setShowModalPeminjaman(true)} warna='bg-cyan-400'>
                                            Pinjam
                                        </BtnK> :
                                        <BtnK fs={() => setShowModalPengembalian(true)} warna='bg-gray-600 hover:bg-red-500'>
                                            Kembalikan
                                        </BtnK>
                                    : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
             {/* <Popup></Popup> */}
        </Dashboard>
    )
}

export default PerKendaraan
