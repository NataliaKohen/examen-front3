import axios from "axios";

export const getData = async () => {
    let res = await axios.get('https://jsonplaceholder.typicode.com/users');
   return res.data;
  };
 

   export const getDataById = async (id) => {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return res.data
    };
    
