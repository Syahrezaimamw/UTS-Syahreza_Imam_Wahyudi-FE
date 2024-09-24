import axios from 'axios'

export const getAllDataUser = async () => {

   return await axios.get('http://localhost:3100/user/')
        .then((a) => {
            return a.data.datas
        })
        .catch((err) => {
            console.log(err)
        })

}
export const getAllDataUserById = async (id) => {

   return await axios.get('http://localhost:3100/user/find/'+id)
        .then((a) => {
            return a.data.datas
        })
        .catch((err) => {
            console.log(err)
        })

}
export const postDataUser = async (data, berhasil, gagal) => {
    try {
        return axios.post('http://localhost:3100/user/create', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                berhasil(response.data.message)
                // setLoading()
            })
            .catch((error) => {
                gagal(error)

            });
    } catch {

    }
}

export const putUser=async(data,id,berhasil,gagal)=>{
    return axios.put('http://localhost:3100/user/update/'+id, data)
      .then((response) => {
        berhasil(response.data.message)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        gagal(error)
      });
  }