import './ButtonUp.css';
import { useState } from 'react';

const ButtonUp = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  document.addEventListener('scroll', () => {
    const { clientHeight } = document.documentElement;
    if (window.scrollY > clientHeight) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  });

  const handlerScrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className={`button-up ${isButtonVisible ? 'button-up_visible' : ''}`} onClick={handlerScrollUp} />
  );
};

export default ButtonUp;
