import './FeedbackPopup.css';
import { useEffect, useRef } from 'react';
import Inputmask from 'inputmask';
import useFormValidator from '../../hooks/useFormValidator';
import Popup from '../Popup/Popup';
import { EMAIL_REGEX, NAME_REGEX } from '../../utils/constants';

const FeedbackPopup = ({
  questionTitle, onClose, isOpen, onClearQuestion,
}) => {
  const phoneRef = useRef();

  const {
    inputValues,
    errorMessages,
    setInputValues,
    isValid,
    handleChange,
    resetForm,
  } = useFormValidator();

  useEffect(() => {
    resetForm();
    setInputValues({ question: questionTitle });
  }, [questionTitle]);

  useEffect(() => {
    Inputmask({ showMaskOnHover: false }).mask(phoneRef.current);
  }, [phoneRef]);

  console.log(inputValues);

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="feedback-popup">
        <h2 className="feedback-popup__title">Форма обратной связи</h2>
        <p className="feedback-popup__subtitle">Заполните обязательные поля, и наш специалист ответит на интересующие Вас вопросы.</p>
        <form name="feedback-popup" className="feedback-popup__form">
          <div className={`feedback-popup__question ${questionTitle ? 'feedback-popup__question_visible' : ''}`}>
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
                pattern="^\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$"
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
      </div>
    </Popup>
  );
};

export default FeedbackPopup;
