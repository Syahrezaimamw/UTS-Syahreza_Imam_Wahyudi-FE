import React, { useRef, useState } from 'react'
import Acces from '../template/Acces'
import axios from 'axios';
// import { useHistory } from "react-router-dom";
const Register = () => {
    const [err, setErr] = useState()
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState({
        nama: '',
        email: '',
        password: '',
        confPassword: ''
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
                        window.location.href ='/login'
                        setLoading(false)
                    })
                    .catch((error) => {
                            setErr(error.response.data.message)
                        setLoading(false)
                    });
            


            setLoading(false)
        }, 500)
    }

    console.log(data)
    return (
        <div className=''>
            <Acces title='Register' handle={handleRegister} loading={loading} err={err} data={{ data, setData }} description="Create your account to be able to access">

            </Acces>
        </div>
    )
}

export default Register
