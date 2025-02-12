import React from 'react'
import Button from '../components/Button'
import { useState } from 'react';
import { useRef } from 'react';
import { FaEnvelope } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';
import rentalbg from '../image/rental-mobil-.jpeg'
const Acces = ({ title, description, err,data,handle,loading }) => {
    const pwref = useRef(null)
    const conpwref = useRef(null)

    const [showPw,setShowPw]=useState(false)
    const [showConfPw,setShowConfPw]=useState(false)

   function handleChange(e){
    const newData = { ...data.data }
    newData[e.target.name] = e.target.value
    data.setData(newData)

   }
   
    return (
        <div className="font-[sans-serif]">
            <div className="flex items-center justify-center min-h-screen px-4 py-6 fle-col">
                <div className="grid items-center w-full max-w-6xl gap-4 md:grid-cols-2">
                    <div className="border border-gray-300 rounded-sm p-6 max-w-[700px] sm:max-w-[500px] md:max-w-md  shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                        <div className="space-y-4">
                            <div className="mb-8">
                                <h3 className="text-3xl font-extrabold text-gray-800">{title}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                                    {description}
                                </p>
                            </div>


                            {
                                title=='Register' || title =="Register User"?
                                
                                <div>
                                <label className="block mb-2 text-sm text-gray-800">
                                  Username
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        name="nama"
                                        type="text"
                                        onChange={(e)=>handleChange(e)}
                                        className="w-full px-4 py-3 text-sm text-gray-800 border border-gray-300 rounded-lg outline-blue-600"
                                        placeholder="Enter Username"
                                    />
                                    <FaUser className="w-[18px]  text-gray-300 h-[18px] absolute right-4"
                                    />                    </div>
                            </div>:<></>
                                }
                            <div>
                                <label className="block mb-2 text-sm text-gray-800">
                                    email
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        type="email"
                                        onChange={(e)=>handleChange(e)}
                                        className="w-full px-4 py-3 text-sm text-gray-800 border border-gray-300 rounded-lg outline-blue-600"
                                        placeholder="Enter email"
                                    />
                                    <FaEnvelope className="w-[18px]  text-gray-300 h-[18px] absolute right-4"
                                    />                    </div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-800">Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        ref={pwref}
                                        name="password"
                                        type={showPw ? 'text' : 'password'}
                                        onChange={(e)=>handleChange(e)}

                                        className="w-full px-4 py-3 text-sm text-gray-800 border border-gray-300 rounded-lg outline-blue-600"
                                        placeholder="Enter password"
                                    />
                                    {
                                        showPw ? <FaEyeSlash className="w-[18px] cursor-pointer  text-gray-300 h-[18px] absolute right-4"
                                        onClick={() => setShowPw(false)}/>:  <FaEye className="w-[18px] cursor-pointer  text-gray-300 h-[18px] absolute right-4"
                                        onClick={() => setShowPw(true)}
                                    />
                                    }
                                  
                                </div>
                            </div>
                            {
                                title=='Register'?
                                data.data.password ?
                                <div>
                                <label className="block mb-2 text-sm text-gray-800">Confirm Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        ref={conpwref}
                                        name="confPassword"
                                        type={showConfPw ? 'text' : 'password'}
                                        onChange={(e)=>handleChange(e)}
                                        className="w-full px-4 py-3 text-sm text-gray-800 border border-gray-300 rounded-lg outline-blue-600"
                                        placeholder="Enter password"
                                    />
                                    {
                                        showConfPw ? <FaEyeSlash className="w-[18px] cursor-pointer text-gray-300 h-[18px] absolute right-4"
                                        onClick={() => setShowConfPw(false)} /> :
                                        <FaEye className="w-[18px] cursor-pointer text-gray-300 h-[18px] absolute right-4"
                                        onClick={() => setShowConfPw(true)} />
                                    }
                                    

                                </div>
                            </div>: <></>
                            :<></>
                            }
                            <div className="!mt-8">
                                <Button fs={handle}>
                                    {
                                        loading?
                                        <Loading/>:
                                        title
                                    }
                                    </Button>
                            </div>
                            <p className='w-full text-sm text-center text-red-600'>{err ? err : ''}</p>
                            <p className="text-sm !mt-8 text-center text-gray-800">
                                {
                                    title.toLowerCase() == 'register' ?
                                        `Masuk dengan akun` : `Don't have an account`
                                }

                                {
                                    title.toLowerCase() == 'register' ?
                                        <Link to='/login' className="ml-1 font-semibold text-cyan-500 hover:underline whitespace-nowrap"
                                        >Login</Link> :  <Link to='/register' className="ml-1 font-semibold text-cyan-500 hover:underline whitespace-nowrap"
                                        >Register</Link>
                                }


                            </p>
                        </div>
                    </div>
                    <div className="lg:h-[400px] md:h-[300px] max-md:mt-8 flex justify-center items-center">
                        <img
                            src={rentalbg}
                            alt="Dining Experience"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Acces
