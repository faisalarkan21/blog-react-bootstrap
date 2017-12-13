import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'history';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { showAlert } from '../actions/index';

import SignUpComponent from '../components/signup-form';
import { loadSignUp } from '../actions';

/* eslint no-use-before-define: ["error", { "functions": false }] */
@connect(mapStateToProps, { loadSignUp })
@withRouter
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitApi = this.handleSubmitApi.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { result } = nextProps;
    setTimeout(() => {
      this.props.history.push(result.res.endpoint);
    }, 3000);
  }

  handleSubmitApi(value) {
    return this.props.loadSignUp(value);
  }

  render() {
    return (
      <div>
        <SignUpComponent handleSubmitApi={this.handleSubmitApi} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    result: state.callApi,
  };
}


export default SignUp;

