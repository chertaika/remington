import {
  mainApiSettings, METHOD_POST,
} from './constants';

class MainApi {
  constructor({
    baseUrl,
    headers,
    endpoints: {
      slidesEndpoint,
      shopsEndpoint,
      subscribeEndpoint,
      goodsEndpoint,
      feedbackEndpoint,
    },
  }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._slidesEndpoint = slidesEndpoint;
    this._shopsEndpoint = shopsEndpoint;
    this._subscribeEndpoint = subscribeEndpoint;
    this._goodsEndpoint = goodsEndpoint;
    this._feedbackEndpoint = feedbackEndpoint;
  }

  async _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    const error = await res.json();
    error.status = res.status;
    return Promise.reject(error);
  }

  async _request(endpoint, options) {
    const response = await fetch(`${this._baseUrl}${endpoint}`, { headers: this._headers, ...options });
    return this._checkResponse(response);
  }

  getSlides() {
    return this._request(this._slidesEndpoint);
  }

  getShops() {
    return this._request(this._shopsEndpoint);
  }

  getGood(endpoint) {
    return this._request(`${this._goodsEndpoint}/${endpoint}`);
  }

  subscribe({ name, email }) {
    return this._request(this._subscribeEndpoint, {
      method: METHOD_POST,
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  sendFeedback({
    question = '',
    name,
    email,
    number = '',
    comment,
  }) {
    return this._request(this._feedbackEndpoint, {
      method: METHOD_POST,
      body: JSON.stringify({
        question,
        name,
        email,
        number,
        comment,
      }),
    });
  }
}

const mainApi = new MainApi(mainApiSettings);
export default mainApi;
