import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { notify } from 'reapop';

import { loadLogOut, loadCheckAuth } from '../../actions';
import { ReapopSnackBar } from '../../components/lib';
import NavBarContainer from '../navbar-container';

@connect(mapStateToProps, { loadLogOut, loadCheckAuth, notify })
@withRouter
class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.props.loadCheckAuth();
  }

  componentWillReceiveProps(nextProps) {
    const { result } = nextProps;
    if (!result.isLoginAuthenticated) {
      this.props.history.push(result.location);
    }
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <ReapopSnackBar />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.loginAuth,
  };
}


export default DashboardLayout;

