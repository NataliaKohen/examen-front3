import { Link } from "react-router-dom"
import { useDentistState } from "../utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const{state,dispatch}=useDentistState()
  
  return (
    
    <nav className={state.theme ==='light'? 'light':'dark'}>
      <Link to='/home'>Home</Link> 
      <Link to='/favs'>Favorites</Link> 
      <Link to='/contacto'>Contact</Link> 

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={()=>dispatch({type:"CHANGE_THEME"})}>Change theme</button>
    </nav>

  )
}

export default Navbar