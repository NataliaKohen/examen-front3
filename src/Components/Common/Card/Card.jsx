import { useDentistState } from '../../utils/global.context';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = ({ dentista }) => {
  const { name, username, id } = dentista;
  const { state, dispatch } = useDentistState();

  // Ademas deberan integrar la logica para guardar cada Card en el localStorage */
// Verificar si el dentista está marcado como favorito
const isFavorite = state.favs.some(fav => fav.id === id);

const handleToggleFavorite = () => {
  if (isFavorite) {
    dispatch({ type: 'REMOVE_FAV', payload: id });
  } else {
    dispatch({ type: 'ADD_FAV', payload: dentista });
  }
};

  return (
    <div className={`${state.theme} card`}>
      <img src="images/doctor.jpg" alt="imagen dentista" />
      <Link to={`/dentist/${id}`} className="card-a">
        {name}
      </Link>
      <h4> {username}</h4>
    
      <button className="favButton" onClick={handleToggleFavorite}>
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
};

export default Card;
