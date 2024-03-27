import { useDentistState } from '../utils/global.context';
import { Link } from 'react-router-dom';

import '../../index.css';

const Card = ({ dentista }) => {
  const { name, username, id } = dentista;

  const { state, dispatch } = useDentistState();

  // Ademas deberan integrar la logica para guardar cada Card en el localStorage */

  return (
    <div className="card">
      <img src="images/doctor.jpg" alt="imagen dentista" />
      <Link to={`/dentist/${id}`} className="card-a">
        {name}
      </Link>
      <h4> {username}</h4>
      <button
        className="favButton"
        onClick={() => dispatch({ type: 'ADD_FAV', payload: dentista })}
      >
        ⭐
 
      </button>
    </div>
  );
};

export default Card;
