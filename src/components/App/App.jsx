import './App.css';
import Header from '../Header/Header';
import ContentContext from '../../contexts/ContentContext';
import Main from '../Main/Main';
import { testContent, testSlides } from '../../utils/constants';
import Footer from '../Footer/Footer';
// import mainApi from '../../utils/MainApi';

const App = () => (
  <ContentContext.Provider value={testContent}>
    <Header />
    <Main slides={testSlides} />
    <Footer />
  </ContentContext.Provider>
);

export default App;
