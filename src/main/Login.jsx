import React, { useEffect, useState } from 'react'
import Acces from '../template/Acces'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const [err, setErr] = useState()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const Auth = async (e) => {
        setLoading(true)
        try {
            if (data.email === '' || data.password === '') {
                setTimeout(() => {
                    setErr('Pastikan Mengisi Semua Data')
                    setLoading(false)

                }, 1000)
            } else {

                axios.post('http://localhost:3100/admin/loginB', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => {
                        localStorage.setItem("IA", response.data.datas);
                        navigate('/home')
                        setLoading(false)
                    })
                    .catch((error) => {
                        setTimeout(() => {
                            setLoading(false)
                            setErr(error.response.data.message)

                        }, 1500)
                    });
            }
        } catch (err) {
            setTimeout(() => {
                setLoading(false)

            }, 1500)
            console.log(err)

        }
    }


    return (
        <div className=''>
            <Acces title='Login' handle={Auth} err={err} loading={loading} data={{ data, setData }} description="Sign in with an existing Account to gain access">

            </Acces>
        </div>
    )
}

export default Login
