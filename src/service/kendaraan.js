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