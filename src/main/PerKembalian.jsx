import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllDataById } from '../service/get'
import { convertToRp } from '../service/currency'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { FaAngleLeft } from "react-icons/fa6";

const PerKembalian = () => {
    const [data, setData] = useState()
    const { id } = useParams()
    useEffect(() => {
        const url = 'http://localhost:3100/pengembalian/find/' + id
        getAllDataById(url).then((data) => setData(data))
    }, [])

    function downloadPDF() {
        const capture = document.getElementById('topdf')
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4')
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
            doc.save(`Rekap Penyewaan Kendaraan PT.Pinjemin Atas Nama ${data.nama} .pdf`)
        })
    }
    return (
        <div className='flex items-center w-full h-screen'>

            {
                data ?
                    <div
                        className="hs-overlay flex bg-black/50 items-center size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto "
                    >
                        <div className="absolute flex justify-end mt-5 right-5 bottom-10 gap-x-2">
                            <button

                                onClick={downloadPDF}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer active:scale-95 gap-x-2 hover:bg-gray-50 focus:bg-gray-50 "
                            >
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1={12} x2={12} y1={15} y2={3} />
                                </svg>
                                Download PDF
                            </button>
                        </div>

                        <div id='topdf' className="m-3 mt-0 transition-all ease-out opacity-1 hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:max-w-lg sm:w-full sm:mx-auto">
                            <Link to='/pengembalian/' className='absolute bg-white/90 flex items-center justify-center left-5 top-10 size-[40px] rounded-full'>
                            <FaAngleLeft/>
                            </Link>
                            <div className="relative flex flex-col bg-white shadow-lg pointer-events-auto rounded-xl ">
                                <div className="relative overflow-hidden text-center bg-cyan-800 min-h-32 rounded-t-xl ">
                                    <div className="absolute top-2 end-2">

                                    </div>
                                    <figure className="absolute inset-x-0 bottom-0 -mb-px">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 1920 100.1"
                                        >
                                            <path
                                                fill="currentColor"
                                                className="fill-white "
                                                d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                                            />
                                        </svg>
                                    </figure>
                                </div>
                                <div className="relative z-10 -mt-12">
                                    <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm ">
                                        <svg
                                            className="shrink-0 size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="p-4 overflow-y-auto sm:p-7">
                                    <div className="text-center">
                                        <h3
                                            id="hs-ai-modal-label"
                                            className="text-lg font-semibold text-gray-800 "
                                        >
                                            Invoice from Pinjemin
                                        </h3>
                                        <p className="text-sm text-gray-500 ">
                                            {data.Peminjaman.User.nama} ( {data.Peminjaman.User.no_ktp} )
                                        </p>
                                    </div>
                                    <div className="flex justify-between gap-5 mt-5 sm:mt-10 sm:grid-cols-3">

                                        <div>
                                            <span className="block text-xs text-gray-500 uppercase ">
                                                Di Kembalikan
                                            </span>
                                            <span className="block text-sm font-medium text-gray-800 ">
                                                {data ? data.tanggal_dikembalikan.substring(0, 10) : ''}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-500 uppercase ">
                                                Di Pinjam
                                            </span>
                                            <span className="block text-sm font-medium text-gray-800 ">
                                                {data ? data.Peminjaman.tanggal_peminjaman.substring(0, 10) : ''}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-500 uppercase ">
                                                Batas Waktu
                                            </span>
                                            <div className="flex items-center gap-x-2">
                                                <span className="block text-sm font-medium text-gray-800 ">
                                                    {data ? data.Peminjaman.tanggal_pengembalian.substring(0, 10) : ''}

                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-500 uppercase ">
                                                Dilayani
                                            </span>
                                            <div className="flex items-center gap-x-2">
                                                <span className="block text-sm font-medium text-gray-800 ">
                                                    {data ? data.Peminjaman.Admin.nama : ''}

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-5 mt-5 sm:mt-5 sm:grid-cols-3">

                                        <div>
                                            <span className="block text-xs text-gray-500 uppercase ">
                                                Kendaraan
                                            </span>
                                            <span className="block text-sm font-medium text-gray-800 ">
                                                {data.Peminjaman.Kendaraan.nama}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-500 uppercase ">
                                                Type
                                            </span>
                                            <div className="flex items-center gap-x-2">
                                                <span className="block text-sm font-medium text-gray-800 ">
                                                    {data.Peminjaman.Kendaraan.tipe}

                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-500 uppercase ">
                                                Plat
                                            </span>
                                            <span className="block text-sm font-medium text-gray-800 ">
                                                {data.Peminjaman.Kendaraan.nomer_plat}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-500 uppercase ">
                                                Warna
                                            </span>
                                            <div className="flex items-center gap-x-2">
                                                <span className="block text-sm font-medium text-gray-800 ">
                                                    {data.Peminjaman.Kendaraan.warna}

                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-5 sm:mt-10">
                                        <h4 className="text-xs font-semibold text-gray-800 uppercase ">
                                            Summary
                                        </h4>
                                        <ul className="flex flex-col mt-3">
                                            <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                                                <div className="flex items-center justify-between w-full">
                                                    <span>Harga Sewa</span>
                                                    <span>{convertToRp(data.Peminjaman.total_harga)}</span>
                                                </div>
                                            </li>
                                            <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                                                <div className="flex items-center justify-between w-full">
                                                    <span>Denda</span>
                                                    <span>{convertToRp(data.denda)}</span>
                                                </div>
                                            </li>
                                            <li className="inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 border gap-x-2 bg-gray-50 first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                                                <div className="flex items-center justify-between w-full">
                                                    <span>Total Biaya</span>
                                                    <span>{convertToRp(data.Peminjaman.total_harga + data.denda)}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-5 sm:mt-10">
                                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                                            If you have any questions, please contact us at{" "}
                                            <a
                                                className="inline-flex items-center gap-x-1.5 text-cyan-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium "
                                                href="#"
                                            >
                                                Pinjemin@site.com
                                            </a>{" "}

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <></>
            }
        </div>

    )
}

export default PerKembalian
