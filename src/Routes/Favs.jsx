import { useDentistState } from '../Components/utils/global.context';
import '../index.css';
import Card from '../Components/Common/Card/Card';

const Favs = () => {
  const { state, dispatch } = useDentistState();

  return (
    <>
      <main className={state.theme}>
        <h1>Dentists Favs</h1>
        <div className="card-grid container">
          {state.favs.length > 0 && (
            <>
              {state.favs.map((favorite) => (
                <Card key={favorite.id} dentista={favorite} />
              ))}
              <button
                className=" centerButton"
                onClick={() => dispatch({ type: 'REMOVE_ALL' })}
              >
                Delete All 🗑️
              </button>
            </>
          )}
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
        </div>
      </main>
    </>
  );
};

export default Favs;
