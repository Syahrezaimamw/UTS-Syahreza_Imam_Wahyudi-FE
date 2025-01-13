import axios from "axios";


export const deleteData=async(url,berhasil,gagal)=>{
     axios.delete(url)
    .then(response => {
      berhasil(response.data.message)
    })
    .catch(error => {
     gagal(error)
    });
  }
  