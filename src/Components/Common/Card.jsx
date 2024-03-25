import { useDentistState } from '../utils/global.context';
import { Link } from 'react-router-dom';
import '../../index.css';

const Card = ({ dentista }) => {

  const { name, username, id}=dentista
 
  
  const {state, dispatch}= useDentistState();
  
  return (
    <div className="card">
      <h5>{id}</h5>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <img src="images/doctor.jpg" alt="imagen dentista" />
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to="/dentist/:id">Ver detalle</Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <button className="favButton"
         onClick={()=>dispatch({type:"ADD_FAV", payload: dentista })}
         
         >
        Add fav
      </button>
    </div>
  );
};

export default Card;
