import React, { useEffect } from 'react'
import { useState } from 'react';


const Table = ({ data, title, headers, setCurrentData, tambahData,status, children }) => {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 7

    // Menghitung indeks data yang akan ditampilkan
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    useEffect(() => {
        setCurrentData(data.slice(indexOfFirstItem, indexOfLastItem))
    }, [indexOfFirstItem, indexOfLastItem])

    const totalPages = Math.ceil(data.length / itemsPerPage)

    // Array untuk tombol halaman
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    // Handler untuk mengganti halaman
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // Handler untuk tombol Previous
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    // Handler untuk tombol Next
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <div className=' min-h-[38vw] flex flex-col justify-between'>
            {/* <div className='flex justify-end w-full'> */}

            {/* <BtnK className='border-2 ' fs={handleShowModal} warna='bg-cyan-400'>ADD</BtnK> */}
            {/* </div> */}
            <div className="relative overflow-x-auto custom-scrollbar sm:rounded-lg">
            <caption className="flex items-start justify-between p-5 text-lg font-semibold text-left text-gray-900 bg-white rtl:text-rightw-full ">
                       <div>

                        <div className='flex items-center justify-between w-full'>

                            <h1 className='text-xl font-semibold'>

                                Data {title}
                            </h1>

                        </div>
                        {status==='user'?<></>:
                        <p className="mt-1 text-sm font-normal text-gray-800 ">
                            Tabel berisi data {title} harap melakukan cek dan kelola
                        </p>
                        }
                       </div>
                        {tambahData ? tambahData : <></>}
                    </caption>
                <table className="relative w-full text-sm text-left text-gray-500 rtl:text-right ">
                  
                    <thead className="text-xs text-white uppercase bg-cyan-500">
                        <tr>
                            {headers.map((item, i) => (

                                <th key={i} scope="col" className="px-5 py-3">
                                    {item.judul}
                                </th>

                            ))}

                        </tr>
                    </thead>
                    <tbody>
                        {children}

                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-700">
                    Showing{" "}
                    <span className="font-semibold">{data.length === 0 ? 0 : indexOfFirstItem + 1}</span>{" "}
                    to{" "}
                    <span className="font-semibold">
                        {indexOfLastItem > data.length ? data.length : indexOfLastItem}
                    </span>{" "}
                    of <span className="font-semibold">{data.length}</span> Entries
                </div>

                {/* Pagination */}
                <nav aria-label="Page navigation">
                    <ul className="flex items-center h-10 -space-x-px text-base">
                        <li>
                            <button
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 && "opacity-50 cursor-not-allowed"
                                    }`}
                            >
                                <span className="sr-only">Previous</span>
                                <svg
                                    className="w-3 h-3 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                            </button>
                        </li>

                        {pageNumbers.map((number) => (
                            <li key={number}>
                                <button
                                    onClick={() => handlePageChange(number)}
                                    aria-current={currentPage === number ? "page" : undefined}
                                    className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === number
                                        ? "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                                        : "text-gray-500 bg-white"
                                        }`}
                                >
                                    {number}
                                </button>
                            </li>
                        ))}

                        <li>
                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages || totalPages === 0}
                                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages || totalPages === 0 ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="w-3 h-3 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Table
