//?TOken
import { jwtDecode } from 'jwt-decode'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';

function appa(ss){
    // console.log(ss)
return ss
}

export const refreshToken = async (setDataAdmin,setToken,gagal) => {
    const tkr=Cookies.get('refreshToken')
    try { 
        const response = await axios.post('http://localhost:3100/admin/token',{
            refreshToken:tkr
        })
        const decode = jwtDecode(response.data.accesTokenBaru)
        setToken(response.data.accesTokenBaru)
        appa(response.data.accesTokenBaru)
        setDataAdmin(decode)
    } catch (err) {
        if(err.response){
            gagal(err.response)
        }
    }
}

async function getAdmin(){
    if(appa){

        const res=await axios.get('http://localhost:3100/admin/',{
            headers:{
                Authorization: `Bearer ${appa()}`
                
            }
        })
        console.log(res)
    }else{
        console.log('gajalan')
    }
}

// getAdmin()