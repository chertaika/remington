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
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const App = () => {
  const [slides, setSlides] = useState([]);
  const [shops, setShops] = useState([]);
  const [privacy, setPrivacy] = useState();
  const [currentGood, setCurrentGood] = useState({});
  const [questionSubject, setQuestionSubject] = useState('');
  const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);

  const openFeedbackPopup = () => {
    setIsFeedbackPopupOpen(true);
  };

  const handleAskButtonClick = (title) => {
    setQuestionSubject(title);
    openFeedbackPopup();
  };

  const handleClearQuestionSubject = () => {
    setQuestionSubject('');
  };

  const closeAskPopup = () => {
    setIsFeedbackPopupOpen(false);
    setQuestionSubject('');
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
        const [slidesData, shopsData, privacyData] = await Promise.all([
          mainApi.getSlides(),
          mainApi.getShops(),
          mainApi.getPrivacyPolicy(),
        ]);
        setSlides(slidesData);
        setShops(shopsData);
        setPrivacy(privacyData);
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
        <Route
          path="privacy-policy"
          element={(
            <PrivacyPolicy
              privacy={privacy}
            />
          )}
        />
      </Routes>
      <Footer />
      <FeedbackButton onClick={openFeedbackPopup} />
      <FeedbackPopup
        onClose={closeAskPopup}
        isOpen={isFeedbackPopupOpen}
        questionSubject={questionSubject}
        onClearQuestionSubject={handleClearQuestionSubject}
      />
    </ContentContext.Provider>
  );
};

export default App;
