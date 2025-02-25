import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegFileAlt, FaRegFileArchive, FaRegListAlt } from 'react-icons/fa';
import { FaHouse, FaBars, FaRegCircleUser, FaCar, FaGear } from "react-icons/fa6";
import img from '../image/logo.png'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { refreshToken } from '../service/refreshToken';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Modal from './Modal';
import imgp from '../image/photoProfile.png'

const Dashboard = ({ children, title }) => {
    const navigate = useNavigate();

    //?TOken
    const [dataAdmin, setDataAdmin] = useState()
    const [token, setToken] = useState()

    useEffect(() => {
        refreshToken(setDataAdmin, setToken, () => {
            navigate('/login')
        })
    }, [])


    const axiosJWT = axios.create()

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date()
        if (dataAdmin.exp * 1000 < currentDate.getTime()) {
            const response = await axios.post('http://localhost:3100/admin/token', {
                refreshToken: Cookies.get('refreshToken')
            });
            config.headers.Authorization = `Bearer ${response.data.accesTokenBaru}`;
            setDataAdmin(jwtDecode(response.data.accesTokenBaru))
            setToken(response.data.accesTokenBaru)
        }
        return config
    }, (err) => {
        return Promise.reject(err)
    })
    // console.log(dataAdmin.role)
    useEffect(() => {
        //  localStorage.setItem('role')   
    }, [])


    //?
    const [dataAllAdmin, setDataAllAdmin] = useState([])
    const getAdmin = async () => {
        const response = await axiosJWT.get('http://localhost:3100/admin/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setDataAllAdmin(response.data.datas)
        console.log(response.data.datas)
    }



    const [showProfile, setShowProfile] = useState(false)
    const [showSide, setShowSide] = useState(false)

    function handleshowProfile() {
        setShowProfile(showProfile ? false : true)
    }
    function handleShowSide() {
        setShowSide(showSide ? false : true)

    }



    const data = [
        {
            name: 'Pengenalan',
            ic: <FaHouse />,
            to: '/home'
        },
        {
            name: 'Kendaraan',
            ic: <FaCar />,
            to: '/kendaraan'
        },
        {
            name: 'User',
            ic: <FaRegCircleUser />,
            to: '/user'
        },
        {
            name: 'Peminjaman',
            ic: <FaRegFileArchive />,
            to: '/peminjaman'
        },
        {
            name: 'Pengembalian',
            ic: <FaRegFileAlt />,
            to: '/pengembalian'
        },
        {
            name: 'Notifikasi',
            ic: <FaRegListAlt />,
            to: '/notifikasi'
        },

    ]
    const [dataProses, setDataProses] = useState([])
    async function getData() {

        try {

            const Data = await axios.get('http://localhost:3100/notif/')
            const fetchedData = Data.data.datas;
            

            const proses = fetchedData.filter(item => item.status === "Diminta");

            setDataProses(proses);
          
        } catch (err) {
            console.log(err)

        }
        
    }
    useEffect(()=>{
        getData()
    },[])

    function tanggal() {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}-${month}-${year}`;
        return currentDate

    }

    const [showModal, setShowModal] = useState(false)
    function handleShowAllAdmin() {
        getAdmin()
        setShowModal(true)
    }

    return (
        <>
            <Modal title={'Data Admin'} modal={{ showModal, setShowModal }}>
                <table className='relative w-full text-sm text-left text-gray-500 rtl:text-right '>
                    <thead className='text-xs text-gray-700 uppercase'>
                        <tr>

                            <th className="pb-3 pe-6">Status</th>
                            <th className="pb-3 pe-6"> Nama </th>
                            <th className="pb-3 pe-6">Email</th>
                            <th className="pb-3 pe-6">Jabatan</th>
                        </tr>
                    </thead>
                    <tbody className='text-gray-700'>

                        {dataAllAdmin.map((result, i) => (
                            <tr key={i}>
                                <td className='relative py-2 '>
                                    <span className={`size-[11px]  rounded-full ${result.id == dataAdmin.adminId ? 'bg-green-500' : 'bg-gray-500'} absolute left-0 top-[12px]`}></span>
                                    <p className='ps-4'>{result.id === dataAdmin.adminId ? 'Online' : 'Offline'}</p>
                                </td>
                                <td>{result.nama}</td>
                                <td>{result.email}</td>
                                <td>{result.role}</td>
                            </tr>

                        ))}

                    </tbody>
                </table>

            </Modal>
            <nav className="fixed top-0 z-50 w-full h-[69px] bg-white/[99] border-b border-gray-900 ">
                <div className="h-full px-3 py-4 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center justify-start lg:ps-4 rtl:justify-end">

                            <button
                                onClick={handleShowSide}
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
                            >
                                <FaBars />

                            </button>

                            <img
                                src={img}
                                className="hidden sm:block w-[25px] bg-red-900 me-3"
                            />
                            <span className="self-center hidden text-xl font-bold text-gray-800 sm:block sm:text-2xl whitespace-nowrap">
                                Pinjemin
                            </span>
                        </div>


                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button
                                        type="button"
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        onClick={() => handleshowProfile()}
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                        src={imgp}
                                            className="w-8 h-8 rounded-full"
                                            alt="user photo"
                                        />
                                    </button>
                                </div>
                                <div
                                    className={`${showProfile ? 'absolute block' : 'hidden'} z-50 my-4 text-base list-none bg-gray-200 divide-y divide-gray-800 rounded shadow right-4 top-11 `}
                                    id="dropdown-user"
                                >
                                    <div className="px-4 py-3" role="none">
                                        <p
                                            className="text-sm text-gray-900 "
                                            role="none"
                                        >
                                            {dataAdmin ? dataAdmin.nama : '--'}
                                        </p>
                                        <p
                                            className="text-sm font-medium text-gray-900 truncate "
                                            role="none"
                                        >
                                            {dataAdmin ? dataAdmin.email : '--'}

                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        {
                                            data.map((a, i) => (

                                                <li key={i}>
                                                    <Link
                                                        to={a.to}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-300 hover:bg-gray-600 "

                                                    >
                                                        {a.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                        <li
                                            className='cursor-pointer' onClick={handleShowAllAdmin} >
                                            <span

                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-300 hover:bg-gray-600 "

                                            >
                                                Lihat Admin
                                            </span>

                                        </li>

                                        <li className='cursor-pointer' onClick={(a, i) => {
                                            Cookies.remove('refreshToken')
                                            localStorage.removeItem('token')
                                            navigate('/');
                                        }}>
                                            <a

                                                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-300 hover:bg-gray-600 "

                                            >
                                                Logout
                                            </a>

                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className={`${showSide ? '-translate-x-0' : '-translate-x-full'} fixed top-0 left-0 z-40 w-64 h-screen transition-transform  border-r sm:translate-x-0 dark:bg-gray-800 border-gray-700`}
                aria-label="Sidebar"
            >
                <div className="h-full  px-4 pt-20 flex flex-col justify-between pb-4 overflow-y-auto bg-white/[99]">
                    <ul className="space-y-2 font-medium ">
                        {
                            data.map((a, i) => (
                                <li key={i} className='relative cursor-pointer'>
                                    {a.name === "Notifikasi"?
                                    dataProses.length===0?<></>:
                                    <p className='absolute top-0 left-0 flex items-center justify-center h-[22px] w-[22px] text-sm font-bold text-white bg-red-600 rounded-full jus'>{dataProses.length }</p>
                                :<></>}
                                    <Link to={a.to}>
                                        <div className={`${a.name == title ? 'bg-white shadow-lg py-2.5 ' : ''}flex hover:shadow-lg hover:bg-white items-center gap-2 p-2 text-white rounded-lg  group`}>
                                            <span className={`${a.name == title ? 'bg-cyan-500  group-hover:text-white' : 'bg-white '}flex items-center shadow-md justify-center p-3 transition group-hover:bg-cyan-500 group-hover:text-white duration-75 rounded-lg text-md  bg-cyan text-gray-400 `}><i className={`${a.name == title ? 'text-white  ' : 'text-gray-900 group-hover:text-white '}`}>{a.ic}</i></span>
                                            <span className={` ${a.name == title ? 'text-black' : 'text-gray-600 group-hover:text-black'} font-semibold  m7-3`}>{a.name}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                        {dataAdmin ?
                            dataAdmin.role === "Pemilik" ?
                                <li  className='cursor-pointer'>
                                    <Link to={'/admin'}>
                                        <div className={`${'/admin' == title ? 'bg-white shadow-lg py-2.5 ' : ''}flex hover:shadow-lg hover:bg-white items-center gap-2 p-2 text-white rounded-lg  group`}>
                                            <span className={`${'/admin' == title ? 'bg-cyan-500  group-hover:text-white' : 'bg-white '}flex items-center shadow-md justify-center p-3 transition group-hover:bg-cyan-500 group-hover:text-white duration-75 rounded-lg text-md  bg-cyan text-gray-400 `}><i className={`${'/admin' == title ? 'text-white  ' : 'text-gray-900 group-hover:text-white '}`}><FaGear/></i></span>
                                            <span className={` ${'/admin' == title ? 'text-black' : 'text-gray-600 group-hover:text-black'} font-semibold  m7-3`}>{'Admin'}</span>
                                        </div>
                                    </Link>
                                </li>
                                : <></> : <></>}



                    </ul>
                    <div className='px-4 py-4 text-white bg-white rounded-lg '>
                        <p className='font-bold text-center text-cyan-500'>{tanggal()}</p>
                    </div>
                </div>
            </aside>




            <div className="p-4 mt-3 sm:ml-64">
                <div className="p-4 border-gray-200 rounded-lg mt-14">


                    {children}

                </div>
            </div>
        </>

    )
}

export default Dashboard
