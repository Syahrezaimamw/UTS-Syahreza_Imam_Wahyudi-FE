import React, { useEffect, useRef, useState } from 'react'
import Acces from '../template/Acces'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const Register = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(() => {
        const admin = jwtDecode(token)
        if (admin.role != 'Pemilik') {
            alert('Anda Tidak Dapat Melakukan Registrasi')
            navigate('/login')
        } else {

        }
    }, [])

    const [err, setErr] = useState()
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState({
        nama: '',
        email: '',
        password: '',
        confPassword: '',
        role: 'Karyawan'
    })

    function handleRegister() {
        setLoading(true)
        setTimeout(() => {
            axios.post('http://localhost:3100/admin/register', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    navigate('/login')
                    setLoading(false)
                })
                .catch((error) => {
                    setErr(error.response.data.message)
                    setLoading(false)
                });
            setLoading(false)
        }, 1000)
    }

    return (
        <div className=''>
            <Acces title='Register' handle={handleRegister} loading={loading} err={err} data={{ data, setData }} description="Create your account to be able to access">

            </Acces>
        </div>
    )
}

export default Register
