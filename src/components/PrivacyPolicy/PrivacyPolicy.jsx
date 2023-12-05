import './PrivacyPolicy.css';

const PrivacyPolicy = ({ privacy }) => (

  <div className="privacy-policy">
    <h2 className="privacy-policy__title">{privacy?.title}</h2>
    <p className="privacy-policy__text">{privacy?.content}</p>
  </div>

);

export default PrivacyPolicy;
