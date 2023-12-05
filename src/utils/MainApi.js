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
      privacyEndpoint,
    },
  }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._slidesEndpoint = slidesEndpoint;
    this._shopsEndpoint = shopsEndpoint;
    this._subscribeEndpoint = subscribeEndpoint;
    this._goodsEndpoint = goodsEndpoint;
    this._feedbackEndpoint = feedbackEndpoint;
    this._privacyEndpoint = privacyEndpoint;
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

  getPrivacyPolicy() {
    return this._request(this._privacyEndpoint);
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
    subject = '',
    name,
    email,
    phone = '',
    question,
  }) {
    return this._request(this._feedbackEndpoint, {
      method: METHOD_POST,
      body: JSON.stringify({
        subject,
        name,
        email,
        phone,
        question,
      }),
    });
  }
}

const mainApi = new MainApi(mainApiSettings);
export default mainApi;
