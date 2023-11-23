import './App.css';
import Header from '../Header/Header';
import ContentContext from '../../contexts/ContentContext';
import Main from '../Main/Main';
import { testContent, testSlides } from '../../utils/constants';

const App = () => (
  <ContentContext.Provider value={testContent}>
    <Header />
    <Main slides={testSlides} />
  </ContentContext.Provider>
);

export default App;
