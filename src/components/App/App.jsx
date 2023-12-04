import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import ContentContext from '../../contexts/ContentContext';
import Main from '../Main/Main';
import { ERROR } from '../../utils/constants';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';
import Product from '../Product/Product';
import FeedbackPopup from '../FeedbackPopup/FeedbackPopup';

const App = () => {
  const [slides, setSlides] = useState([]);
  const [shops, setShops] = useState([]);
  const [currentGood, setCurrentGood] = useState({});
  const [questionTitle, setQuestionTitle] = useState('');
  const [isAskPopupOpen, setIsAskPopupOpen] = useState(false);

  const handleAskButtonClick = (title) => {
    setQuestionTitle(title);
    setIsAskPopupOpen(true);
  };

  const handleClearQuestion = () => {
    setQuestionTitle('');
  };

  const closeAskPopup = () => {
    setIsAskPopupOpen(false);
    setQuestionTitle('');
  };

  const getCurrentProduct = async (id) => {
    try {
      const good = await mainApi.getGood(id);
      setCurrentGood(good);
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
          element={(
            <Main
              slides={slides}
              questionTitle={questionTitle}
              onAskButtonClick={handleAskButtonClick}
            />
        )}
        />
        <Route
          path="good/:id"
          element={(
            <Product
              currentGood={currentGood}
              onAskButtonClick={handleAskButtonClick}
              getCurrentProduct={getCurrentProduct}
            />
        )}
        />
      </Routes>
      <Footer />
      <FeedbackPopup
        onClose={closeAskPopup}
        isOpen={isAskPopupOpen}
        questionTitle={questionTitle}
        onClearQuestion={handleClearQuestion}
      />
    </ContentContext.Provider>
  );
};

export default App;
