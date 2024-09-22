import React, { useState } from 'react'
import Acces from '../template/Acces'
const Login = () => {
    const [loading,setLoading] = useState(false)

    const [err, setErr] = useState()
    const [data,setData]=useState({
        email:'',
        password:'',
    })
    console.log(data)


    return (
        <div className=''>
            <Acces title='Login' err={err} data={{data,setData}} description="Sign in with an existing Account to gain access">

            </Acces>
        </div>
    )
}

export default Login
