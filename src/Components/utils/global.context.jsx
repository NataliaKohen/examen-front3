import { createContext, useContext, useReducer,useEffect } from 'react';

export const ContextGlobal = createContext();

//falta localStorage

export const initialState = {
  theme: 'light',
  favs: [],
};

const dentistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAV': {
      const newFavs = new Set([...state.favs, action.payload]);
      return { ...state, favs: [...newFavs] };
    }
    case 'REMOVE_FAV': {
      let myfavs = state.favs.filter(
        (favorites) => favorites.id !== action.payload
      );
      return { ...state, favs: myfavs };
    }

    case 'CHANGE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dentistReducer, initialState);


  // Cargar los favoritos desde el localStorage al inicio
  useEffect(() => {
    const LocalStorageFavs = localStorage.getItem('favs');
    if (LocalStorageFavs) {
      dispatch({ type: 'ADD_FAV', payload: JSON.parse(LocalStorageFavs) });
    }//no me queda tan claro, revisar
  }, []);

  // Guardar los favoritos en el localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(Array.from(state.favs)));
  }, [state.favs]);





  
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const useDentistState = () => useContext(ContextGlobal);
