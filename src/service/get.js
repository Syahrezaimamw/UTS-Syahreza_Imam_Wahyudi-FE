import axios from "axios";

export const getAllData = async (url) => {

  return await axios.get(url)
    .then((response) => response.data.datas)
    .catch((error) => {
      return error;
    })
}

export const getAllDataByStatus = async (value) => {
  try {
    const response=await axios.get(`http://localhost:3100/kendaraan/find/status/${value}`)
    return response.data.datas
  } catch (err){
    console.log(err)
    return err

  }
}

export const searchKendaraan = async(nama,status,callback,error)=>{
  console.log(status)
  try {
    const response=await axios.get(`http://localhost:3100/kendaraan/search?nama=${nama}&status=${status}`)
    console.log(response.data.datas)
    callback(response.data.datas)
    return response.data.datas
    
  } catch (err){
    console.log(err.message)
    error([])
    return err

  }

}

export const getAllDataById = async (url) => {

  return await axios.get(url)
    .then(function (response) {
      return response.data.datas;
    })
    .catch(function (error) {
      return error;
    })
}

export const getAllPeminjamanSekarang = async (id) => {

  return await axios.get('http://localhost:3100/peminjaman/')
    .then(function (response) {
      const data = response.data.datas;

      const dataFilter = data.filter((item, i) => item.status === true && item.KendaraanId == id)
      return dataFilter[0]
    })
    .catch(function (error) {
      console.log(error)
      return error;
    })
}
