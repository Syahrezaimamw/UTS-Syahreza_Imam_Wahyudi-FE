import React from 'react'

const BtnK = ({warna,fs,children}) => {
  return (
    <button onClick={fs} className={`px-3 py-2 fon  hover:shadow-md active:scale-95 text-white rounded-md  ${warna}`}>{children}</button>
  )
}

export default BtnK
