
import{ useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
const {id}=useParams()
const [dentistDetail, setDentistDetail]=useState({})

useEffect(()=>{
  

  const getDataById=async()=>{
    let res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
       setDentistDetail(res.data)
  }
  getDataById
},[id])

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Id dentist: {dentistDetail.id}</h1>
      <h2>Name:{dentistDetail.name}</h2>
      <h2>Email: {dentistDetail.email}</h2>
      <h2>Phone: {dentistDetail.phone}</h2>
      <h2>Website: {dentistDetail.website}</h2>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail