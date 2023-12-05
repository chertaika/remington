import './PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <main className="page-not-found">
    <div className="page-not-found__image" />
    <p className="page-not-found__text">
      Страница, на которую вы пытаетесь попасть, не существует или была удалена. Перейдите на
      {' '}
      <Link className="page-not-found__link link-hover" to="/">главную страницу</Link>
    </p>
  </main>
);

export default PageNotFound;
