import axios from "axios";

export const register =async ()=>{

}

export const postDataAllTable=async(url,data,berhasil,gagal)=>{
        return axios.post(url, data, {
          headers: {
              'Content-Type': 'application/json'
          }
      })
          .then((response) => {
            berhasil(response.data.message)
            // setLoading(false)
          })
          .catch((error) => {
            gagal(error)
          });
      }
