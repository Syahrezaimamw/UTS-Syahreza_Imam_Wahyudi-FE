import axios from "axios";

export const getAllData = async (url) => {

    return await axios.get(url)
        .then((response) => response.data.datas)
        .catch((error) => {
            return error;
        })
} 

export const getAllDataById=async(url)=>{

    return await  axios.get(url)
    .then(function (response) {
      return response.data.datas;
    })
    .catch(function (error) {
      return error ;
    })
  } 
  