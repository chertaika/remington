import {
  mainApiSettings,
} from './constants';

class MainApi {
  constructor({
    baseUrl,
    headers,
    endpoints: {
      slidesEndpoint,
    },
  }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._slidesEndpoint = slidesEndpoint;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  async _request(endpoint, options) {
    const response = await fetch(`${this._baseUrl}${endpoint}`, { headers: this._headers, ...options });
    return this._checkResponse(response);
  }

  getSlides() {
    return this._request(this._slidesEndpoint);
  }
}

const mainApi = new MainApi(mainApiSettings);
export default mainApi;
