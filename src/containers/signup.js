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
    isSuccess: false,
  }

  handleSubmitApi(value) {
    const result = postApi(value);
    Promise.resolve(result).then((res) => {
      setTimeout(() => {
        if (res.data === 'OK') {
          this.setState({ isSuccess: true });
        }
      }, 4000);
    });
  }


  render() {
    const { isSuccess } = this.state;

    if (isSuccess) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <SignUpComponent handleSubmitApi={this.handleSubmitApi} />
      </div>

    );
  }
}


export default SignUp;

