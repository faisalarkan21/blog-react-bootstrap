import React from 'react';

import LoginComponent from '../components/login-form';
import { showResults } from '../middleware/submit-test';


class Login extends React.Component {
  static propTypes ={

  }


  render() {
    return (
      <div>
        <LoginComponent onSubmit={showResults} linkDaftar="/daftar" />

      </div>

    );
  }
}


export default Login;

