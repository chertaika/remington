import { HashLink } from 'react-router-hash-link';
import './AnchorLink.css';

const AnchorLink = ({ slug, children }) => {
  const scroll = (el) => {
    const yOffset = 51;
    const y = el.getBoundingClientRect().top + window.scrollY - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <HashLink
      className="anchor-link link-hover"
      to={`/#${slug}`}
      scroll={scroll}
    >
      {children}
    </HashLink>
  );
};

export default AnchorLink;
