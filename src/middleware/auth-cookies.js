import Cookies from 'js-cookie';


export const tokenAuth = {
  setCookies(token) {
    Cookies.set('token', token);
  },
  tokenAuthenticated() {
    const token = Cookies.get('token');
    if (token) {
      return true;
    }
    return false;
  },
  eraseCookies() {
    Cookies.remove('token', { path: '' });
  },

};

