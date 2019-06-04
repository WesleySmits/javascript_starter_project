import getBaseUrl from "./baseUrl";

export class UserApi {
  constructor() {
    this.baseUrl = getBaseUrl();
  }

  getUsers() {
    return this.get('users');
  }

  deleteUser(id) {
    return this.del(`users/${id}`);
  }

  get(url) {
    return fetch(this.baseUrl + url).then(this.onSuccess, this.onError);
  }

  del(url) {
    const request = new Request(this.baseUrl + url, {
      method: 'DELETE'
    });

    return fetch(request).then(this.onSuccess, this.onError);
  }

  onSuccess(response) {
    return response.json();
  }

  onError(error) {
    console.log(error); // eslint-disable-line no-console
  }
}
