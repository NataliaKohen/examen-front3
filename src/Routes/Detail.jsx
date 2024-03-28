import { useEffect, useState } from 'react';
import { useDentistState } from '../Components/utils/global.context';
import { useParams } from 'react-router-dom';
import {getDataById} from'../api/dentist'
import '../index.css';

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

  

  return (
    <main className={state.theme}>
      <div >
      <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{dentistSelected.id}</td>
          <td>{dentistSelected.name}</td>
          <td>{dentistSelected.email}</td>
          <td>{dentistSelected.phone}</td>
          <td>{dentistSelected.website}</td>
        </tr>
      </tbody>
    </table>
      
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </main>
  );
};

export default Detail;
