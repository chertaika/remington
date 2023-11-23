import MainSlider from '../MainSlider/MainSlider';
import './Main.css';

const Main = ({ slides }) => (
  <main className="content">
    <MainSlider slides={slides} />
  </main>
);

export default Main;
