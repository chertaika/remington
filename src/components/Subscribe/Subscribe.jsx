import './Subscribe.css';
import { Link } from 'react-router-dom';
import useFormValidator from '../../hooks/useFormValidator';
import { EMAIL_REGEX, NAME_REGEX } from '../../utils/constants';

const Subscribe = () => {
  const {
    inputValues,
    errorMessages,
    isValid,
    handleChange,
  } = useFormValidator();

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
      <div className="subscribe__status">
        <p className="subscribe__status-message" />
      </div>

    </section>
  );
};

export default Subscribe;
