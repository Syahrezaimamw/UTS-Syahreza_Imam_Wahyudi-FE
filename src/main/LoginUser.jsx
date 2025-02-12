import React, { useState } from 'react'
import AccesUser from '../template/AccesUser'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginUser = () => {
  const [data,setData]=useState({
    email:'',
    password:''
  })
  const [err,setErr]=useState('')
                  const navigate = useNavigate();
  
  const Auth = async (e) => {
    try{
        await axios.post('http://localhost:3100/user/login', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                localStorage.setItem('dataUser',JSON.stringify(response.data.datas))
                navigate('/dashUser')
            })
            .catch((error) => {
                  
                    setErr(error.response.data.message)

            });
    }catch(err){
        console.log(err)
    }

}
  return (
    <AccesUser page="loginUser" data={{data,setData}} sub={Auth} err={{err,setErr}}>
      
    </AccesUser>
  )
}

export default LoginUser
