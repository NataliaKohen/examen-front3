import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Layout from './Components/Layout/Layout';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact/Contact';
import NotFound from './Routes/NotFound/NotFound';
import { ContextProvider } from './Components/utils/global.context';

function App() {
  
  return (
    
    <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
