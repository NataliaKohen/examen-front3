import { useDentistState } from '../Components/utils/global.context';
import '../index.css';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Delete } from '@mui/icons-material';
const Favs = () => {
  const { state, dispatch } = useDentistState();

  return (
    <main className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.length > 0
          ? state.favs.map((favorite) => (
              <div className="card" key={favorite.id}>
                <h3>{favorite.name}</h3>
                <h4>
                  {' '}
                  {favorite.id} {favorite.username}
                </h4>
                <img src="images/doctor.jpg" alt="imagen dentista" />

                <button
                  className="favButton"
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FAV', payload: favorite.id })
                  }
                >
                  <Delete color="disabled" />
                </button>
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
