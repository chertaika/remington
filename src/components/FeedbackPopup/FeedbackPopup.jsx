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
  questionSubject, onClose, isOpen, onClearQuestionSubject,
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
          number: errors.number ? errors.phone.join(' ') : '',
          comment: errors.comment ? errors.question.join(' ') : '',
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
    setInputValues({ ...inputValues, subject: questionSubject });
  }, [questionSubject]);

  useEffect(() => {
    Inputmask({ showMaskOnHover: false }).mask(phoneRef.current);
  }, [phoneRef]);

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="feedback-popup popup-content">
        <button
          className="feedback-popup__close-btn popup-close-btn"
          type="button"
          aria-label="Закрыть всплывающее окно"
          onClick={onClose}
        />
        <div className="feedback-popup__content">
          <h2 className="feedback-popup__title">Форма обратной связи</h2>
          <form name="feedback-popup" className="feedback-popup__form" onSubmit={handleSubmit}>
            <div className={`feedback-popup__question ${inputValues.subject ? 'feedback-popup__question_visible' : ''}`}>
              <input
                type="text"
                name="subject"
                value={inputValues.subject ?? ''}
                className="feedback-popup__question-input"
                disabled
              />
              <button
                type="button"
                className="feedback-popup__question-delete-btn"
                aria-label="кнопка Удалить название товара"
                onClick={onClearQuestionSubject}
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
                  name="phone"
                  ref={phoneRef}
                  placeholder="+7 (___) ___-__-__"
                  data-inputmask="'mask': '+7 (999) 999-99-99'"
                  className={`feedback-popup__input ${errorMessages.phone ? 'feedback-popup__input_type_error' : ''}`}
                  value={inputValues.phone ?? ''}
                  onChange={handleChange}
                />
              </label>
              <span className="feedback-popup__input-error">{errorMessages.phone}</span>
            </div>
            <div className="feedback-popup__field">
              <label className="feedback-popup__label feedback-popup__label_type_textarea">
                Ваш вопрос (предложение/замечание) *
                <textarea
                  name="question"
                  className={`feedback-popup__textarea ${errorMessages.question ? 'feedback-popup__textarea_type_error' : ''}`}
                  value={inputValues.question ?? ''}
                  onChange={handleChange}
                  required
                />
              </label>
              <span className="feedback-popup__input-error">{errorMessages.question}</span>
            </div>
            <div
              className={
              `feedback-popup__message ${feedbackResult.status === 'fail'
                ? 'feedback-popup__message_type_error'
                : ''}`
             }
            >
              {feedbackResult.message}
            </div>
            <button
              type="submit"
              className="feedback-popup__submit-btn button-hover"
              disabled={!isValid}
              aria-label="кнопка Отправить"
            />
            <p className="feedback-popup__safe">
              Нажимая на кнопку &quot;Отправить&quot;, Вы соглашаетесь c&nbsp;
              <a className="feedback-popup__policy link-hover" href="/privacy-policy">Политикой&nbsp;конфиденциальности</a>
            </p>
          </form>
        </div>
      </div>
    </Popup>
  );
};

export default FeedbackPopup;
