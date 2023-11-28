import './App.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ContentContext from '../../contexts/ContentContext';
import Main from '../Main/Main';
import { ERROR } from '../../utils/constants';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';

const App = () => {
  const [slides, setSlides] = useState([]);
  const [shops, setShops] = useState([]);

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
      <Main slides={slides} />
      <Footer />
    </ContentContext.Provider>
  );
};

export default App;
