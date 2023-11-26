import MainSlider from '../MainSlider/MainSlider';
import './Main.css';
import Companies from '../Companies/Companies';

const Main = ({ slides }) => (
  <main className="content">
    <MainSlider slides={slides} />
    <Companies />
  </main>
);

export default Main;
