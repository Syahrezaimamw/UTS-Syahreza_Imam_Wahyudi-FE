import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Dashboard from '../template/Dashboard'
import { Link } from 'react-router-dom';
import { convertToRp } from '../service/currency';
import { FaAngleRight } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import ModalKendaraan from '../components/ModalKendaraan';
import { FaPen } from "react-icons/fa6";
import { deleteKendaraan, getAllDataKendaraanById, putKendaraan } from '../service/kendaraan'
import BtnK from '../components/BtnK';
import Alert from '../components/Alert';
import { handleAlerts } from '../service/alert';
import Loading from '../components/Loading';
import ModalPeminjaman from '../components/ModalPeminjaman';
import { postDataAllTable } from '../service/post';
import ModalPengembalian from '../components/ModalPengembalian';
import { AdminContext } from '../contex/adminContex';
import { getAllPeminjamanSekarang } from '../service/get';
const PerKendaraan = () => {
    const { id } = useParams()


    //! message
    const [alerts, setAlerts] = useState([])
    const [err, setErr] = useState(false)

    //? loading
    const [loading, setLoading] = useState(false)
    const [loadDel, setLoadDel] = useState(false)

    //? Modal
    const [showModal, setShowModal] = useState(false)
    const [showModalPeminjaman, setShowModalPeminjaman] = useState(false)
    const [showModalPengembalian, setShowModalPengembalian] = useState(false)

    //? data kendaraan
    const [data, setData] = useState()

    //? data Pengembalian
    const [dataPmjnForPngmbln, setDataPmjnForPngmbln] = useState()
    const [dataPengembalian, setDataPengembalian] = useState({
        tanggal_dikembalikan: '',
        denda: 0,
        kondisi: '',
    })


    useEffect(() => {
        getAllDataKendaraanById(id).then((result) => {
            setData(result)
        })
        getAllPeminjamanSekarang(id).then((result) => setDataPmjnForPngmbln(result))
    }, [])

    function handlePut() {
        setLoading(true)
        if (data.nama === '' || data.merk === '' || data.harga == 0 || data.nomer_plat === '' || data.gambar == '' || data.kategori == '' || data.tipe == '' || data.warna == '') {
            setErr('pastikan semua input terisi')

            handleAlerts(alerts, setAlerts)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        } else {
            putKendaraan(data, id, (berhasil) => {
                setLoading(true)
                setTimeout(() => {
                    window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/kendaraan/' + id
                    setLoading(false)
                    // setShowModal(false)
                }, 2000)

            }, (gagal) => {
                handleAlerts(alert, setAlerts)
                setErr('data harus diisi')
            })


        }



    }

    function ShowModelK() {
        setShowModal(true)
    }

    function delKendaraan() {
        setLoadDel(true)
        deleteKendaraan(id, () => {
        }, () => {
            setTimeout(() => {
                window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/kendaraan'
                setLoadDel(false)
            }, 2000)
        })
    }


    //* PEMINJAMAN
    const [idAdmin,setIdAdmin] =useState(localStorage.IA ? localStorage.IA : 18)

    const [dataPeminjaman, setDataPeminjaman] = useState({
        tanggal_peminjaman: '',
        tanggal_pengembalian: '',
        total_harga: 0,
        status: true,
        AdminId: idAdmin,
        UserId: 0,
        KendaraanId: parseInt(id),
    })


    function handleModalPeminjman() {
        setShowModalPeminjaman(true)

    }

    const [total, setTotal] = useState(0)

    function postDataPeminjaman() {
        setLoading(true)
        const dataPost = { ...dataPeminjaman, total_harga: total }
        const url = 'http://localhost:3100/peminjaman/create'
        postDataAllTable(url, dataPost, (berhasil) => {
            setTimeout(() => {

                window.location.href = '/UTS-Syahreza_Imam_Wahyudi-FE/kendaraan/' + id
            }, 1000)
        }, (gagal) => {
            setTimeout(() => {

                setLoading(false)
            }, 1000)
            console.log(gagal)
        }
        )

        console.log(dataPost)

    }
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

            }, 1000)
            console.log(gagal)
        }
        )

        console.log(dataPost)

    }
    return (
        <Dashboard title={'Kendaraan'}>
            <Alert alerts={alerts} err={err}></Alert>

            {data
                ?
                <ModalKendaraan teks='Update Data Kendaraan' title='update data' loading={loading} handlePost={handlePut} dataK={{ dataK: data, setDataK: setData }} modal={{ showModal, setShowModal }}></ModalKendaraan>
                : <></>

            }
            <ModalPeminjaman title={'Add Peminjaman'} dataKendara={data ? data : ''} loading={loading} setTotal={setTotal} harga_sewa={data ? data.harga : 0} modal={{ showModal: showModalPeminjaman, setShowModal: setShowModalPeminjaman }} data={{ dataPeminjaman, setDataPeminjaman }} handle={postDataPeminjaman}></ModalPeminjaman>

            <ModalPengembalian title={'Add Pengembalian'} data={{ dataPengembalian, setDataPengembalian }} dataPeminjaman={dataPmjnForPngmbln} modal={{ showModal: showModalPengembalian, setShowModal: setShowModalPengembalian }} loading={loading} handle={postDataPengembalian}></ModalPengembalian>


            <div className='flex gap-2 items-center [&_h1]:font-semibold [&_span]:font-medium [&_span]:text-[12px]  [&_span]:pt-[2px]   [&_h1]:text-md [&_h1]:hover:cursor-pointer'> <h1 className=''><Link to='/kendaraan'>
                Kendaraan </Link></h1> <span><FaAngleRight /></span> <h1>{data ? data.merk : ''}</h1> <span><FaAngleRight /></span> <h1>{data ? data.nama : ''}</h1> <span><FaAngleRight /></span> <h1>{data ? data.tipe : ''}</h1>
            </div>
            <div className='flex mt-9 justify-between items-center  flex-col lg:flex-row  w-full lg:min-h-[480px] '>
                <div className='w-full  lg:w-[40%]  flex items-center justify-center overflow-hidden'>
                    <img src={data ? data.gambar : ''} className='w-[75%]' alt="" />
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
                                {
                                    data ?
                                        data.status ? <BtnK fs={() => delKendaraan()} warna='bg-red-500'>
                                            {loadDel ?

                                                'Tunggu' : <FaTrash />
                                            }
                                        </BtnK> :
                                            <></>
                                        : <></>
                                }
                                <BtnK fs={() => ShowModelK()} warna='bg-gray-500'><FaPen /></BtnK>
                            </div>
                            {
                                data ?
                                    data.status ?
                                        <BtnK fs={handleModalPeminjman} warna='bg-cyan-400'>
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
        </Dashboard>
    )
}

export default PerKendaraan
