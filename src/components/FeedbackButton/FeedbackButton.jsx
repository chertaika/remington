import './FeedbackButton.css';

const FeedbackButton = ({ onClick }) => (
  <div className="feedback-button" onClick={onClick}>
    <span className="feedback-button__icon" />
    <span className="feedback-button__rings" />
    <span className="feedback-button__rings" />
    <span className="feedback-button__rings" />
  </div>
);

export default FeedbackButton;
