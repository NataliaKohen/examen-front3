import { createContext, useContext, useReducer } from 'react';

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

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(dentistReducer, initialState);
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const useDentistState = () => useContext(ContextGlobal);

