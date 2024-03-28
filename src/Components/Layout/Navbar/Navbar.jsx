import { Link } from 'react-router-dom';
import { useDentistState } from '../../utils/global.context';
import '../../../index.css'
import './Navbar.css';



const Navbar = () => {
  const { state, dispatch } = useDentistState();

  return (
    <div className={`container-nav ${state.theme}`}>
      <h2>DH ODONTO</h2>
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/favs">Favorites</Link>
        <Link to="/contact">Contact</Link>
        <button
          onClick={() => dispatch({ type: 'CHANGE_THEME' })}
         className='themeToggleButton'
        >  {state.theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
