import { useContext } from 'react';
import MainSlider from '../MainSlider/MainSlider';
import './Main.css';
import Companies from '../Companies/Companies';
import Subscribe from '../Subscribe/Subscribe';
import ContentContext from '../../contexts/ContentContext';

const Main = ({ slides }) => {
  const content = useContext(ContentContext);

  return (
    <main className="content">
      <MainSlider slides={slides} />
      {content.filter(item => item.catalog).length > 1
        && (<Companies />)}
      <Subscribe />
    </main>
  );
};

export default Main;
