import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import LoginComponent from '../components/login-form';
import { loadLogin, checkAuth } from '../actions';

/* eslint no-use-before-define: ["error", { "functions": false }] */
@connect(mapStateToProps, { loadLogin })
@withRouter
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }


  componentWillMount() {
    const { isLoginAuthenticated } = this.props;
    if (isLoginAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { result } = nextProps;
    console.log(nextProps);
    setTimeout(() => {
      this.props.history.push(result.location);
    }, 500);
  }

  handleLogin(value) {
    const { location } = this.props;
    if (location.state) {
      const { location } = this.props.history;
      delete location.state;
      setTimeout(() => {
        this.props.history.replace({ ...history.location, location });
      }, 200);
    }
    return this.props.loadLogin(value);
  }

  render() {
    return (
      <div>
        <LoginComponent
          handleLogin={this.handleLogin}
          message={this.props.location.state}
          linkDaftar="/daftar"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.loginAuth,
  };
}


export default Login;

