import { useEffect, useState } from 'react';
import { useDentistState } from '../Components/utils/global.context';
import { useParams } from 'react-router-dom';
import {getDataById} from'../api/dentist'
import '../index.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { id } = useParams();
  const [dentistSelected, setDentistSelected] = useState({});
  const { state } = useDentistState();

  useEffect(() => {
    const getDataDentistById = async () => {
      let res = await getDataById(id)
      setDentistSelected(res);
    };
    getDataDentistById();
  }, [id]);
  console.log(dentistSelected);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={state.theme}>
      <div className="card-grid">
        <h4>Id dentist: {dentistSelected.id}</h4>
        <h3>Name:{dentistSelected.name}</h3>
        <h4>Email: {dentistSelected.email}</h4>
        <h5>Phone: {dentistSelected.phone}</h5>
        <h5>Website: {dentistSelected.website}</h5>
        <img src="/public/images/doctor.jpg" alt="imagen dentista" />
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </div>
  );
};

export default Detail;
