import { useEffect, useState } from 'react';
import Card from '../Components/Common/Card';
import { getData } from '../api/dentist';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useDentistState } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useDentistState();
  const [dentist, setDentist] = useState([]);
console.log(state)
  useEffect(() => {
    const getDataDentist = async () => {
      let res = await getData();
      setDentist(res);
    };
    getDataDentist();
  }, []);

  console.log(dentist);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentist.map((dentista) => (
          <Card key={dentista.id} id={dentista.id} name={dentista.name} username={dentista.username} dentista={dentista} />
        ))}
      </div>
    </main>
  );
};

export default Home;
