import React from 'react'

const Table = ({ title, headers,children }) => {
    return (
        <div>
            <div className='flex justify-end w-full'>

                {/* <BtnK className='border-2 ' fs={handleShowModal} warna='bg-cyan-400'>ADD</BtnK> */}
            </div>
            <div className="relative overflow-x-auto custom-scrollbar sm:rounded-lg">
                <table className="relative w-full text-sm text-left text-gray-500 rtl:text-right ">
                    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white rtl:text-right ">
                        <div className='flex items-center justify-between w-full'>

                            <h1 className='text-xl font-semibold'>

                                Data {title}
                            </h1>

                        </div>
                        <p className="mt-1 text-sm font-normal text-gray-800 ">
                            Tabel berisi data {title} harap melakukan cek dan   
                        </p>
                    </caption>
                    <thead className="text-xs text-white uppercase bg-cyan-500">
                        <tr>
                            {headers.map((item, i) => (

                                <th key={i} scope="col" className="px-6 py-3">
                                    {item.judul}
                                </th>

                            ))}
                            <th scope="col" className="px-6 py-3">
                                Option
                                {/* <span className="sr-only" >Edit</span> */}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {children}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table
