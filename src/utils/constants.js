const SLIDES_ENDPOINT = '/slides';
const SHOPS_ENDPOINT = '/shops';
const SUBSCRIBE_ENDPOINT = '/subscribe';
const GOODS_ENDPOINT = '/goods';
const FEEDBACK_ENDPOINT = '/feedback';
const PRIVACY_ENDPOINT = '/rules';

const mainApiSettings = {
  baseUrl: 'https://dev.ekipirovka70.ru/api',
  headers: {
    'Content-Type': 'application/json',
  },
  endpoints: {
    slidesEndpoint: SLIDES_ENDPOINT,
    shopsEndpoint: SHOPS_ENDPOINT,
    subscribeEndpoint: SUBSCRIBE_ENDPOINT,
    goodsEndpoint: GOODS_ENDPOINT,
    feedbackEndpoint: FEEDBACK_ENDPOINT,
    privacyEndpoint: PRIVACY_ENDPOINT,
  },
};

// коды ошибок запросов
const ERROR_CODE_422 = 422;
const ERROR_CODE_487 = 487;

// сообщения запросов
const REQUEST_ERROR_MESSAGE = 'Что-то пошло не так... Попробуйте позже.';

// методы запросов
const METHOD_POST = 'POST';

// регулярные выражения валидации
const EMAIL_REGEX = '^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$';
const NAME_REGEX = '[A-Za-zА-Яа-яЁё\\s\\-]+';

const ERROR = 'Ошибка';

export {
  mainApiSettings,
  METHOD_POST,
  ERROR,
  EMAIL_REGEX,
  NAME_REGEX,
  REQUEST_ERROR_MESSAGE,
  ERROR_CODE_422,
  ERROR_CODE_487,
};
