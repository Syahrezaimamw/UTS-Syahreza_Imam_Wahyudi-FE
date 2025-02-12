import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import axios from 'axios'
import { getAllData } from '../service/get'
import CardHistory from '../components/CardHistory'
import ModalPeminjaman from '../components/ModalPeminjaman'
import ModalNotifPemin from '../components/ModalNotifPemin'
import Kendaraan from './Kendaraan'
import { jwtDecode } from 'jwt-decode'
import { postDataAllTable } from '../service/post'
import { updateAllData } from '../service/put'

const NotifikasiA = () => {
    const [data, setData] = useState([])
    const token = localStorage.getItem('token')
    const [id, setId] = useState()
    useEffect(() => {
        const dataAdmin = jwtDecode(token)
        setId(dataAdmin.adminId)
        getAllData('http://localhost:3100/notif/findStatus/Diminta').then((a) => setData(a))
    }, [])
    const [dataP, setDataP] = useState()
    function handleSub(e) {
        setDataP(e)
        setModal(true)
    }
    console.log(dataP)
    const [modal, setModal] = useState(false)
    // function addPeminjaman() {
    
    //     console.log(dataPinjam)
    //     console.log(dataPut)

    //     const url = 'http://localhost:3100/peminjaman/create'
    //     postDataAllTable(url, dataPinjam, () => {
    //         console.log('Berhasil Post')
    //     }, (gagal) => {
    //         console.log(gagal)
    //     }
    //     )
    //     updateAllData('http://localhost:3100/notif/update'+dataP.id, dataPut, 
    //         ()=>{
    //          console.log('update Berhasil')   
    //         },
    //         ()=>{
    //          console.log('update Gagal')   
    //         }
    //     )
    // }
    const handlePostAndUpdate = async () => {
        const dataAdd = {
            tanggal_peminjaman: dataP.tanggal_peminjaman.substring(0, 10),
            tanggal_pengembalian: dataP.tanggal_pengembalian.substring(0, 10),
            total_harga: dataP.total_harga,
            KendaraanId: dataP.KendaraanId,
            UserId: dataP.UserId,
           
        }
        const dataPinjam={...dataAdd, AdminId: id}
        const dataPut={...dataAdd, status: "Berhasil"}
      
        try {
            const urlPost = 'http://localhost:3100/peminjaman/create';
            const urlUpdate = 'http://localhost:3100/notif/update/' + dataP.id;
    
            await new Promise((resolve, reject) => {
                postDataAllTable(urlPost, dataPinjam, () => {
                    console.log('Berhasil Post');
                    resolve();
                }, (gagal) => {
                    console.log(gagal);
                    reject(gagal);
                });
            });
    
            await new Promise((resolve, reject) => {
                updateAllData(urlUpdate, dataPut, () => {
                    console.log('Update Berhasil');
                    resolve();
                }, (gagal) => {
                    console.log('Update Gagal');
                    reject(gagal);
                });
            });
    
            // Jika kedua operasi berhasil, pindah halaman
            window.location.href = "/UTS-Syahreza_Imam_Wahyudi-FE/notifikasi";  // Ganti dengan halaman yang diinginkan
    
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };
    const handleCancel = async (dataC) => {
        const dataAdd = {
            tanggal_peminjaman: dataC.tanggal_peminjaman.substring(0, 10),
            tanggal_pengembalian: dataC.tanggal_pengembalian.substring(0, 10),
            total_harga: dataC.total_harga,
            KendaraanId: dataC.KendaraanId,
            UserId: dataC.UserId,
           
        }
        const dataPut={...dataAdd, status: "Gagal"}
      
        try {
            const urlUpdate = 'http://localhost:3100/notif/update/' + dataC.id;
    
            await new Promise((resolve, reject) => {
                updateAllData(urlUpdate, dataPut, () => {
                    console.log('Update Berhasil');
                    resolve();
                }, (gagal) => {
                    console.log('Update Gagal');
                    reject(gagal);
                });
            });
    
            // Jika kedua operasi berhasil, pindah halaman
            window.location.href = "/UTS-Syahreza_Imam_Wahyudi-FE/notifikasi";  // Ganti dengan halaman yang diinginkan
    
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };
    
    return (
        <Dashboard title="Notifikasi">
            {
                dataP ?
                    <ModalNotifPemin data={dataP} sub={handlePostAndUpdate} title="Tambah Peminjaman" modal={{ showModal: modal, setShowModal: setModal }}></ModalNotifPemin>
                    : ""
            }
            <div className='flex w-full gap-3'>

                {
                    data?
                    data.map((e, i) => (

                        <CardHistory peran='admin' key={i} cancel={(e)=>handleCancel(e)} e={e} sub={(e) => handleSub(e)}></CardHistory>

                    ))
                    :
                    <div className='w-full h-[500px] text-2xl text-gray-700 font-semibold flex justify-center items-center'>Tidak Ada Notifikasi</div>
                }
            </div>

        </Dashboard>
    )
}

export default NotifikasiA
