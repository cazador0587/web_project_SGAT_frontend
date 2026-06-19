const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return res
      .json()
      .then((error) => Promise.reject(error.message || `Error: ${res.status}`));
  }

  signup({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkResponse);
  }

  signin({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._checkResponse);
  }

  getCurrentUser(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  getEquipments(token) {
    return fetch(`${this._baseUrl}/equipments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  createEquipment(data, token) {
    return fetch(`${this._baseUrl}/equipments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  updateEquipment(id, data, token) {
    return fetch(`${this._baseUrl}/equipments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteEquipment(id, token) {
    return fetch(`${this._baseUrl}/equipments/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi(BASE_URL);

export default mainApi;
