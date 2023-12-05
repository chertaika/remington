import './PrivacyPolicy.css';

const PrivacyPolicy = ({ privacy }) => (

  <main className="privacy-policy">
    <h2 className="privacy-policy__title">{privacy?.title}</h2>
    <p className="privacy-policy__text">{privacy?.content}</p>
  </main>

);

export default PrivacyPolicy;
