import React from 'react'
import Button from '../components/Button'
import { useState } from 'react';
import { useRef } from 'react';
import { FaRegMap } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';
const Acces = ({ title, description, err,data,handle,loading, children }) => {
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
            <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
                <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                    <div className="border border-gray-300 rounded-sm p-6 max-w-[700px] sm:max-w-[500px] md:max-w-md  shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                        <form className="space-y-4">
                            <div className="mb-8">
                                <h3 className="text-gray-800 text-3xl font-extrabold">{title}</h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            {/* // sss */}

                            {
                                title=='Register'?
                                
                                <div>
                                <label className="text-gray-800 text-sm mb-2 block">
                                  Username
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        name="nama"
                                        type="text"
                                        onChange={(e)=>handleChange(e)}
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                                        placeholder="Enter Username"
                                    />
                                    <FaUser className="w-[18px]  text-gray-300 h-[18px] absolute right-4"
                                    />                    </div>
                            </div>:<></>
                                }
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">
                                    email
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        type="email"
                                        onChange={(e)=>handleChange(e)}
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                                        placeholder="Enter email"
                                    />
                                    <FaRegMap className="w-[18px]  text-gray-300 h-[18px] absolute right-4"
                                    />                    </div>
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        ref={pwref}
                                        name="password"
                                        type={showPw ? 'text' : 'password'}
                                        onChange={(e)=>handleChange(e)}

                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
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
                                <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        ref={conpwref}
                                        name="confPassword"
                                        type={showConfPw ? 'text' : 'password'}
                                        onChange={(e)=>handleChange(e)}
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
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
                                <Button handle={handle}>
                                    {
                                        loading?
                                        <Loading/>:
                                        title
                                    }
                                    </Button>
                            </div>
                            <p className='w-full text-center text-red-600 text-sm'>{err ? err : ''}</p>
                            <p className="text-sm !mt-8 text-center text-gray-800">
                                {
                                    title.toLowerCase() == 'register' ?
                                        `Masuk dengan akun` : `Don't have an account`
                                }

                                {
                                    title.toLowerCase() == 'register' ?
                                        <Link to='/login' className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                                        >Login</Link> :  <Link to='/register' className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                                        >Register</Link>
                                }


                            </p>
                        </form>
                    </div>
                    <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                        <img
                            src="https://readymadeui.com/login-image.webp"
                            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                            alt="Dining Experience"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Acces
