import './Subscribe.css';

const Subscribe = () => (
  <section className="subscribe" id="promotions">
    <h2 className="subscribe__title">Подпишись и получи скидку 3% на первую покупку</h2>
    <form className="subscribe__form" method="post">
      <label className="subscribe__field">
        <input
          className="subscribe__input subscribe__input_type_name"
          id="name-input"
          placeholder="Имя"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          autoComplete="off"
          required
        />
        <span className="subscribe__input-error name-input-error" />
      </label>
      <label className="subscribe__field">
        <input
          className="subscribe__input subscribe__input_type_email"
          id="email-input"
          placeholder="Email"
          name="name"
          type="email"
          minLength="8"
          maxLength="30"
          autoComplete="off"
          required
        />
        <span className="subscribe__input-error email-input-error" />
      </label>
      <button className="subscribe__submit-btn button-hover subscribe__submit-btn_disabled" type="submit" disabled aria-label="Кнопка Подписаться" />
    </form>
    <p className="subscribe__safe">
      Нажимая на кнопку &quot;Подписаться&quot;, Вы соглашаетесь с
      <a className="subscribe__policy link-hover" href="https://ekipirovka70.ru/">Политикой конфиденциальности</a>
    </p>
    <div className="subscribe__status">
      <p className="subscribe__status-message" />
    </div>

  </section>
);

export default Subscribe;
