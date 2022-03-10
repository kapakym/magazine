export default class UserStore {
  _isAuth: boolean;
  _user: Object;

  constructor() {
    this._isAuth = false;
    this._user = {};
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setUser(user: Object) {
    this._user = user;
  }
}
