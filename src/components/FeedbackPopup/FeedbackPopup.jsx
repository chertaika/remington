import './FeedbackPopup.css';
import { useEffect, useRef, useState } from 'react';
import Inputmask from 'inputmask';
import useFormValidator from '../../hooks/useFormValidator';
import Popup from '../Popup/Popup';
import {
  EMAIL_REGEX,
  ERROR_CODE_422,
  ERROR_CODE_487,
  NAME_REGEX,
  REQUEST_ERROR_MESSAGE,
} from '../../utils/constants';
import mainApi from '../../utils/MainApi';

const FeedbackPopup = ({
  questionTitle, onClose, isOpen, onClearQuestion,
}) => {
  const [feedbackResult, setFeedbackResult] = useState({ status: '', message: '' });
  const phoneRef = useRef();

  const {
    inputValues,
    errorMessages,
    setInputValues,
    setErrorMessages,
    isValid,
    handleChange,
    resetForm,
  } = useFormValidator();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { message } = await mainApi.sendFeedback(inputValues);
      setFeedbackResult({ status: 'success', message });
      resetForm();
    } catch ({ errors, status, message }) {
      if (status === ERROR_CODE_422) {
        setErrorMessages({
          name: errors.name ? errors.name.join(' ') : '',
          email: errors.email ? errors.email.join(' ') : '',
          number: errors.number ? errors.number.join(' ') : '',
          comment: errors.comment ? errors.comment.join(' ') : '',
        });
      } else if (status === ERROR_CODE_487) {
        setFeedbackResult({ status: 'fail', message });
      } else {
        setFeedbackResult({ status: 'fail', message: REQUEST_ERROR_MESSAGE });
      }
    }
  };

  useEffect(() => {
    setFeedbackResult({ status: '', message: '' });
  }, [isOpen]);

  useEffect(() => {
    setInputValues({ ...inputValues, question: questionTitle });
  }, [questionTitle]);

  useEffect(() => {
    Inputmask({ showMaskOnHover: false }).mask(phoneRef.current);
  }, [phoneRef]);

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="feedback-popup">
        <h2 className="feedback-popup__title">Форма обратной связи</h2>
        <p className="feedback-popup__subtitle">Заполните обязательные поля, и наш специалист ответит на интересующие Вас вопросы.</p>
        <form name="feedback-popup" className="feedback-popup__form" onSubmit={handleSubmit}>
          <div className={`feedback-popup__question ${inputValues.question ? 'feedback-popup__question_visible' : ''}`}>
            <input
              type="text"
              name="question"
              value={inputValues.question ?? ''}
              className="feedback-popup__question-input"
              disabled
            />
            <button
              type="button"
              className="feedback-popup__question-delete-btn"
              aria-label="кнопка Удалить название товара"
              onClick={onClearQuestion}
            />
          </div>
          <div className="feedback-popup__field">
            <label className="feedback-popup__label">
              Имя *
              <input
                type="text"
                name="name"
                pattern={NAME_REGEX}
                className={`feedback-popup__input ${errorMessages.name ? 'feedback-popup__input_type_error' : ''}`}
                value={inputValues.name ?? ''}
                required
                onChange={handleChange}
              />
            </label>
            <span className="feedback-popup__input-error">{errorMessages.name}</span>
          </div>
          <div className="feedback-popup__field">
            <label className="feedback-popup__label">
              Email *
              <input
                type="email"
                name="email"
                pattern={EMAIL_REGEX}
                className={`feedback-popup__input ${errorMessages.email ? 'feedback-popup__input_type_error' : ''}`}
                value={inputValues.email ?? ''}
                required
                onChange={handleChange}
              />
            </label>
            <span className="feedback-popup__input-error">{errorMessages.email}</span>
          </div>
          <div className="feedback-popup__field">
            <label className="feedback-popup__label">
              Телефон
              <input
                type="text"
                name="number"
                ref={phoneRef}
                placeholder="+7 (___) ___-__-__"
                data-inputmask="'mask': '+7 (999) 999-99-99'"
                className={`feedback-popup__input ${errorMessages.number ? 'feedback-popup__input_type_error' : ''}`}
                value={inputValues.number ?? ''}
                onChange={handleChange}
              />
            </label>
            <span className="feedback-popup__input-error">{errorMessages.number}</span>
          </div>
          <div className="feedback-popup__field">
            <label className="feedback-popup__label">
              Ваш вопрос (предложение/замечание) *
              <textarea
                name="comment"
                className={`feedback-popup__textarea ${errorMessages.comment ? 'feedback-popup__textarea_type_error' : ''}`}
                value={inputValues.comment ?? ''}
                onChange={handleChange}
                required
              />
            </label>
            <span className="feedback-popup__input-error">{errorMessages.comment}</span>
          </div>
          <button
            type="submit"
            className="feedback-popup__submit-btn button-hover"
            disabled={!isValid}
            aria-label="кнопка Отправить"
          />
        </form>
        <p className="feedback-popup__note">* поля обязательные для заполнения</p>
        <div className={`feedback-popup__message ${feedbackResult.status === 'fail' ? 'feedback-popup__message_type_error' : ''}`}>{feedbackResult.message}</div>
      </div>
    </Popup>
  );
};

export default FeedbackPopup;
