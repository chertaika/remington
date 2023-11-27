import './App.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ContentContext from '../../contexts/ContentContext';
import Main from '../Main/Main';
import { ERROR, testContent } from '../../utils/constants';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';

const App = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const slidesData = await mainApi.getSlides();
        setSlides(slidesData);
      } catch (error) {
        console.log(`${ERROR}: ${error}`);
      }
    })();
  }, []);

  return (
    <ContentContext.Provider value={testContent}>
      <Header />
      <Main slides={slides} />
      <Footer />
    </ContentContext.Provider>
  );
};

export default App;
