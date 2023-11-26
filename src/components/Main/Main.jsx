import MainSlider from '../MainSlider/MainSlider';
import './Main.css';
import Companies from '../Companies/Companies';
import Subscribe from '../Subscribe/Subscribe';

const Main = ({ slides }) => (
  <main className="content">
    <MainSlider slides={slides} />
    <Companies />
    <Subscribe />
  </main>
);

export default Main;
