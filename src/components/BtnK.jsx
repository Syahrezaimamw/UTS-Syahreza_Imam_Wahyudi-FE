import React from 'react'

const BtnK = ({warna,children}) => {
  return (
    <button className={`px-3 py-2 font-medium text-white rounded-md shadow-lg ${warna}`}>{children}</button>
  )
}

export default BtnK
