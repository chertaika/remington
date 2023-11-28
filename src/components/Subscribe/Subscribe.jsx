import './Subscribe.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useFormValidator from '../../hooks/useFormValidator';
import {
  EMAIL_REGEX,
  ERROR_CODE_422,
  NAME_REGEX,
  REQUEST_ERROR_MESSAGE,
} from '../../utils/constants';
import mainApi from '../../utils/MainApi';

const Subscribe = () => {
  const [subscribeResult, setSubscribeResult] = useState({ status: '', message: '' });
  const {
    inputValues,
    errorMessages,
    setErrorMessages,
    isValid,
    handleChange,
    resetForm,
  } = useFormValidator();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { message } = await mainApi.subscribe(inputValues);
      setSubscribeResult({ status: 'success', message });
      resetForm();
    } catch ({ errors, status, message }) {
      if (status === ERROR_CODE_422) {
        if (errors.name && errors.email) {
          setErrorMessages({
            name: errors.name,
            email: errors.email,
          });
          return;
        }
        if (errors.name) setErrorMessages({ name: errors.name.join(' ') });
        if (errors.email) setErrorMessages({ email: errors.email.join(' ') });
      } else if (status === 102) {
        setSubscribeResult({ status: 'fail', message });
      } else {
        setSubscribeResult({ status: 'fail', message: REQUEST_ERROR_MESSAGE });
      }
    }
  };

  return (
    <section className="subscribe" id="promotions">
      <h2 className="subscribe__title">
        Подпишись и получи скидку 3% на первую покупку
      </h2>
      <form className="subscribe__form" method="post" onSubmit={handleSubmit}>
        <label className="subscribe__field">
          <input
            className={`subscribe__input ${errorMessages.name ? 'subscribe__input_type_error' : ''}`}
            id="name-input"
            placeholder="Имя"
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            autoComplete="off"
            required
            pattern={NAME_REGEX}
            value={inputValues.name ?? ''}
            onChange={handleChange}
          />
          <span className="subscribe__input-error name-input-error">{errorMessages.name}</span>
        </label>
        <label className="subscribe__field">
          <input
            className={`subscribe__input ${errorMessages.email ? 'subscribe__input_type_error' : ''}`}
            id="email-input"
            placeholder="Email"
            name="email"
            type="email"
            minLength="8"
            maxLength="30"
            autoComplete="off"
            required
            pattern={EMAIL_REGEX}
            value={inputValues.email ?? ''}
            onChange={handleChange}
          />
          <span className="subscribe__input-error name-input-error">{errorMessages.email}</span>
        </label>
        <button
          className="subscribe__submit-btn button-hover subscribe__submit-btn_disabled"
          type="submit"
          disabled={!isValid}
          aria-label="Кнопка Подписаться"
        />
      </form>
      <p className="subscribe__safe">
        Нажимая на кнопку &quot;Подписаться&quot;, Вы соглашаетесь c&nbsp;
        <Link
          className="subscribe__policy link-hover"
          to="https://ekipirovka70.ru/"
        >
          Политикой конфиденциальности
        </Link>
      </p>
      <div className={`subscribe__status ${subscribeResult.message ? 'subscribe__status_visible' : ''}`}>
        <p className={`subscribe__status-message  ${subscribeResult.status === 'fail' ? 'subscribe__status-message_type_error' : ''}`}>{subscribeResult.message}</p>
      </div>

    </section>
  );
};

export default Subscribe;
