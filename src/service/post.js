import axios from "axios";

export const register =async ()=>{

}

export const postDataAllTable=async(url,data,berhasil,gagal)=>{
  console.log(data)
        return axios.post(url, data, {
          headers: {
              'Content-Type': 'application/json'
          }
      })
          .then((response) => {
            berhasil(response.data.message)
          })
          .catch((error) => {
            gagal(error.response.data.message)
          });
      }
      
export const postDataAllKendaraan=async(url,data,berhasil,gagal)=>{
        return axios.post(url, data, {
          headers: { "Content-Type": "multipart/form-data" }
      })
          .then((response) => {
            berhasil(response.data.message)
          })
          .catch((error) => {
            gagal(error.response.data.message)
          });
      }
