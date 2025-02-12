import React, { useEffect, useState } from 'react'
import Acces from '../template/Acces'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const [err, setErr] = useState()
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    useEffect(()=>{
        // Cookies.remove('accessToken');
        // Cookies.remove('refreshToken');
    },[])


    
    const Auth = async (e) => {
        setLoading(true)
        try {
               await axios.post('http://localhost:3100/admin/login', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => {
                        localStorage.setItem("token", response.data.accessToken);
                        Cookies.set('refreshToken', response.data.refreshToken, {
                             expires: 1 });
                        navigate('/home')
                        setLoading(false)
                    })
                    .catch((error) => {
                        setTimeout(() => {
                            setLoading(false)
                            setErr(error.response.data.message)

                        }, 1000)
                    });
        } catch (err) {
            setTimeout(() => {
                setLoading(false)

            }, 1000)
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
