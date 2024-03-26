import { useDentistState } from '../utils/global.context';
import { Link } from 'react-router-dom';
import '../../index.css';
import  Star  from '@mui/icons-material/Star';
const Card = ({ dentista }) => {
  const { name, username, id } = dentista;

  const { state, dispatch } = useDentistState();

  // En cada card deberan mostrar en name - username y el id */
  // No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */
  // Ademas deberan integrar la logica para guardar cada Card en el localStorage */

  return (
    <div className="card">
      <img src="images/doctor.jpg" alt="imagen dentista" />
      <Link to={`/dentist/${id}`} className='card-a'>{name}</Link>
      <h4> {id} {username}</h4>
      <button
        className="favButton"
        onClick={() => dispatch({ type: 'ADD_FAV', payload: dentista })}
      >
     <Star color="secondary"/>      </button>
    </div>
  );
};

export default Card;
