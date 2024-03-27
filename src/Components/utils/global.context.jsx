import { createContext, useContext, useReducer, useEffect } from 'react';

export const ContextGlobal = createContext();
const localStFavs = JSON.parse(localStorage.getItem('favs'));

export const initialState = {
  theme: 'light',
  favs: localStFavs || [], //
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
    case 'REMOVE_ALL':
      return { ...state, favs: [] };

    case 'CHANGE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dentistReducer, initialState);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const useDentistState = () => useContext(ContextGlobal);
