import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'history';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { showAlert } from '../actions/index';

import SignUpComponent from '../components/signup-form';
import { test, showResults, postApi } from '../middleware/api';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitApi = this.handleSubmitApi.bind(this);
  }

  state ={
    isRedirect: false,
    isError: false,
    isSuccess: false,
  }

  handleRedirect() {
    setTimeout(() => {
      this.setState({ isRedirect: true });
    }, 3000);
  }

  handleSubmitApi(value) {
    this.handleRedirect();
    postApi(value).then((res) => {
      if (res.data) {
        this.setState({ isSuccess: true });
      }
    }).catch((err) => {
      this.setState({ isError: true });
    });
  }


  render() {
    const { isRedirect, isError, isSuccess } = this.state;

    if (isRedirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <SignUpComponent handleSubmitApi={this.handleSubmitApi} isError={isError} isSuccess={isSuccess} />
      </div>

    );
  }
}


export default SignUp;

