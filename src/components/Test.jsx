import React, { useState } from 'react'

const Test = () => {

  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-[100vh]'>
      <input type="text" />
      <input type="file" onChange={(e) => {
        const data = e.target.files[0]
        const aa=URL.createObjectURL(data)
        console.log(aa)
        data?
        setPreview(URL.createObjectURL(data))
        :console.log('tambahkan gambar lagi')
      }} />
      {preview ?
        <img src={preview} alt="" />
        : <></>}


    </div>
  )
}

export default Test
