import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

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

  componentWillMount() {
    const { isLoginAuthenticated } = this.props;
    if (isLoginAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { result } = nextProps;
    console.log(result);
    setTimeout(() => {
      this.props.history.push(result.dataObject.location);
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

