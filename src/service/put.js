import axios from 'axios'

export const updateAllData=async(url,data,berhasil,gagal)=>{
    return axios.put(url, data)
      .then((response) => {
        berhasil(response.data.message)
      })
      .catch((error) => {
        gagal(error.response.data.message)
      });
  }