import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, SubmissionError } from 'redux-form';
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
  }

  handleSubmitApi(value) {
    return postApi(value).then((res) => {
      if (res.status === 200) {
        setTimeout(() => {
          this.setState({ isRedirect: true });
        }, 3000);
      } else if (res.data.code === '23505') {
        throw new SubmissionError({
          email: 'Email sudah terdaftar..',
          _error: 'Cek kembali pengisian email.',
        });
      }
    });
  }


  render() {
    const { isRedirect } = this.state;
    if (isRedirect) {
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

