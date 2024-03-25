import Card from '../Components/Common/Card';
import { useDentistState } from '../Components/utils/global.context';
import '../index.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useDentistState();
 
  return (
    <main className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.length > 0
          ? state.favs.map((favorite) => (
              <div className="card" key={favorite.id}>
                <h5>{favorite.id}</h5>
                <h2>{favorite.name}</h2>
                <h3>{favorite.username}</h3>
                <img src="images/doctor.jpg" alt="imagen dentista" />

                <button onClick={()=>dispatch({type:"REMOVE_FAV", payload:favorite.id})}>Remove favorites</button>
              </div>
            ))
          : null}

        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </main>
  );
};

export default Favs;
