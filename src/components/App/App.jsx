import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import ContentContext from '../../contexts/ContentContext';
import Main from '../Main/Main';
import { ERROR } from '../../utils/constants';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';
import Product from '../Product/Product';

const App = () => {
  const [slides, setSlides] = useState([]);
  const [shops, setShops] = useState([]);
  const [currentGood, setCurrentGood] = useState({});

  const navigate = useNavigate();

  const handleCardClick = async (id) => {
    try {
      const good = await mainApi.getGood(id);
      setCurrentGood(good);
      navigate(`/good/${id}`);
    } catch (error) {
      console.log(`${ERROR}: ${error.message}`);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const [slidesData, shopsData] = await Promise.all([
          mainApi.getSlides(),
          mainApi.getShops(),
        ]);
        setSlides(slidesData);
        setShops(shopsData);
      } catch (error) {
        console.log(`${ERROR}: ${error.message}`);
      }
    })();
  }, []);

  return (
    <ContentContext.Provider value={shops}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main slides={slides} onCardClick={handleCardClick} />}
        />
        <Route
          path="good/:id"
          element={<Product currentGood={currentGood} />}
        />
      </Routes>
      <Footer />
    </ContentContext.Provider>
  );
};

export default App;
