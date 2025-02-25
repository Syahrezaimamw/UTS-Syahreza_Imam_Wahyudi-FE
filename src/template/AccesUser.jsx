import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import { FaArrowRight } from 'react-icons/fa6'
import rentalbg from '../image/rental-mobil-.jpeg'

const AccesUser = ({ page, data, err, sub }) => {
  function handleChange(e) {
    const newData = { ...data.data }
    newData[e.target.name] = e.target.value
    data.setData({ ...newData })

  }
  return (
    <div className=" font-[sans-serif] flex justify-between max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6">
        <div className="w-full max-w-md">
         
          <div className="p-8 bg-white shadow rounded-2xl">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              {
                page === 'loginUser' ?
                  'Sign In' :
                  'Register'
              }

            </h2>
            <form className="mt-8 space-y-4">
              <div className='w-[400px]'>
                <Input name='email' value={data.data.email} change={(e) => handleChange(e)} type={'text'} title={'Masukan Email'}></Input>
              </div>
              <div className='w-[400px]'>
                <Input name='password' value={data.data.password} change={(e) => handleChange(e)} type={'password'} title={'Masukan Password'}></Input>
              </div>
              {page === 'regis' ?
                <div className='flex justify-between w-full'>

                  <div className='w-[49%]'>
                    <Input name='nama' value={data.data.nama} change={(e) => handleChange(e)} type='text' title={'Masukan Username'}></Input>
                  </div>
                  <div className='w-[49%]'>
                    <Input name='telephone' value={data.data.telephone} change={(e) => handleChange(e)} type='text' title={'Masukan No Telephone'}></Input>
                  </div>
                </div>
                : <></>
              }
              {page === 'regis' ?
                <div className='flex justify-between w-full'>

                  <div className='w-[49%]'>
                    <Input name='no_ktp' value={data.data.no_ktp} change={(e) => handleChange(e)} type='number' title={'Masukan Nomor KTP'}></Input>
                  </div>
                  <div className='w-[49%]'>
                    <Input name='alamat' value={data.data.alamat} change={(e) => handleChange(e)} type='text' title={'Masukan Alamat'}></Input>
                  </div>
                </div>
                : <></>
              }


              <div className="!mt-8">
                <button
                  onClick={sub}
                  type="button"
                  className="w-full px-4 py-3 text-sm tracking-wide text-white rounded-md shadow-lg bg-cyan-600 hover:bg-cyan-700 focus:outline-none"
                >
                   {
                    page === 'loginUser' ?
                     
                      'Sign In' : 'Register' 
                  }

                </button>
                <p className='text-center text-red-900'>{err.err}</p>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">
                Don't have an account?{" "}
                <Link
                  to={page === 'loginUser' ? '/registerUser' : '/loginUser'}
                  className="ml-1 font-semibold text-cyan-600 hover:underline whitespace-nowrap"
                >
                  {
                    page === 'loginUser' ?
                      'Register here' :
                      'Sign In'
                  }

                </Link>
              </p>
            </form>
          </div>
            {
                page === 'loginUser' ?
                 <Link to='/login' className='flex items-center justify-center w-full gap-2 mt-3 text-sm font-semibold text-center text-cyan-600'>Login Sebagai Admin <FaArrowRight/></Link> :
                  ''
              }
        </div>
      </div>
      <div className='h-[100vh] w-[48%]  flex justify-center items-center'>
        <img src={rentalbg} alt="" />
      </div>
    </div>

  )
}

export default AccesUser
