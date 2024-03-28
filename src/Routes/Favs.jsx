import { useDentistState } from '../Components/utils/global.context';
import '../index.css';
import Card from '../Components/Common/Card';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state  } = useDentistState();

  return (
    <main className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {state.favs.length > 0 && state.favs.map((favorite) => (
  <Card key={favorite.id} dentista={favorite} />
))}

        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </main>
  );
};

export default Favs;
