import { useEffect, useState } from 'react';
import Card from '../Components/Common/Card';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setDentist(res.data);
    };
    getData();
  }, []);

  console.log(dentist);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentist.map((dentista) =>  < Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}/>)}
       
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home;
