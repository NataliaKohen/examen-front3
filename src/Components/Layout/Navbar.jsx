import { Link } from 'react-router-dom';
import { useDentistState } from '../utils/global.context';
import '../../index.css';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useDentistState();

  return (
    <div className={`${state.theme} container-nav `}>
      <h2>DH ODONTO</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/favs">Favorites</Link>
        <Link to="/contacto">Contact</Link>

        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={() => dispatch({ type: 'CHANGE_THEME' })} className='btn-moon'>
          <img className="icon " src="/images/luna.svg" alt="luna" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
