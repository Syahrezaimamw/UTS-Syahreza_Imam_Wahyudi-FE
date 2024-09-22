import axios from "axios";

export const getAllDataKendaraan=async()=>{

  return await  axios.get('http://localhost:3100/kendaraan/')
    .then((response) => response)
  .catch( (error)=> {
      // handle error
      return error;
    })
} 
export const getAllDataKendaraanById=async(id)=>{

  return await  axios.get(`http://localhost:3100/kendaraan/find/${id}`)
  .then(function (response) {
    return response.data.datas;
  })
  .catch(function (error) {
    return error ;
  })
} 

export const postKendaraan=async(data,berhasil,gagal)=>{
  return axios.post('http://localhost:3100/kendaraan/create', data, {
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((response) => {
      // window.location.href ='/login'
      // setErr()
      // berhasil()
      berhasil(response.data.message)
      // setLoading(false)
    })
    .catch((error) => {
      gagal(error)
        //     setErr(error.response.data.message)
        // setLoading(false)
    });
}
export const putKendaraan=async(data,id,berhasil,gagal)=>{
  return axios.put('http://localhost:3100/kendaraan/update/'+id, data)
    .then((response) => {
      berhasil(response.data.message)
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
      gagal(error)
    });
}
export const deleteKendaraan=async(id,berhasil,gagal)=>{
  return axios.delete(`http://localhost:3100/kendaraan/delete/${id}`)
  .then(response => {
    console.log('ss')
    berhasil(response.data.message)
  })
  .catch(error => {
    console.log(error)
   gagal(error)
  });
}

