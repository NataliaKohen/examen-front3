import { Link } from 'react-router-dom';
import { useDentistState } from '../utils/global.context';
import '../../index.css';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


const Navbar = () => {
  const { state, dispatch } = useDentistState();

  return (
    <div className={`${state.theme} container-nav `}>
      <h2>DH ODONTO</h2>
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/favs">Favorites</Link>
        <Link to="/contacto">Contact</Link>
        <button
          onClick={() => dispatch({ type: 'CHANGE_THEME' })}
         className='btn-moon'
        > {state.theme === 'light' ? <DarkModeOutlined  /> : <WbSunnyIcon  />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
