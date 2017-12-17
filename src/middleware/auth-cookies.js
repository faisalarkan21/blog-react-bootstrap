import Cookies from 'js-cookie';


export const tokenAuth = {
  tokenAuthenticated() {
    const token = Cookies.get('userToken');
    if (token) {
      return true;
    }
    return false;
  },
};

