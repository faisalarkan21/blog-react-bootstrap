import Cookies from 'js-cookie';


export const tokenAuth = {
  setCookies(token, data) {
    Cookies.set('auth', token);
    Cookies.set('data', data);
  },
  tokenAuthenticated() {
    const authToken = Cookies.get('auth');
    const dataToken = Cookies.get('data');
    if (authToken) {
      return {
        authToken: true,
        dataToken: JSON.parse(dataToken),
      };
    }
    return {
      authToken: false,
      dataToken: '',
    };
  },
  eraseCookies() {
    Cookies.remove('auth');
    Cookies.remove('data');
  },

};

