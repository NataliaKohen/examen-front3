import { useDentistState } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useDentistState();
 
 

  

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card">
        {state.favs.length > 0
          ? state.favs.map((favorite) => (
              <div key={favorite.id}>
                <h3>{favorite.name}</h3>
                <button>Remove favorites</button>
              </div>
            ))
          : null}

        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
