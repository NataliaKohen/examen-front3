import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Layout from './Components/Layout/Layout';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import NotFound from './Routes/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
