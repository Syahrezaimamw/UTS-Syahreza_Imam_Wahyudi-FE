import React, { useState } from 'react'
import AccesUser from '../template/AccesUser'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegisterUser = () => {
    const [data,setData]=useState({
        email:'',
        password:'',
        telephone:"",
        email:"",
        no_ktp:0,
        alamat:""
      })
      const [err,setErr]=useState('')
                      const navigate = useNavigate();
      
      const Auth = async (e) => {
        try{
            await axios.post('http://localhost:3100/user/register', {...data,no_ktp:parseInt(data.no_ktp)}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    localStorage.setItem('dataUser',JSON.stringify(response.data.datas))
                    navigate('/loginUser')
                })
                .catch((error) => {
                      
                        setErr(error.response.data.message)
    
                });
        }catch(err){
            console.log(err)
        }
    
    }
    // console.log()
  return (
    <AccesUser page="regis" data={{data,setData}} sub={Auth} err={{err,setErr}}>
      
    </AccesUser>
  )
}

export default RegisterUser
