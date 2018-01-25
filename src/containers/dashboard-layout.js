import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { loadLogOut, loadCheckAuth } from '../actions';
import NavBarContainer from './navbar-container';

@connect(mapStateToProps, { loadLogOut, loadCheckAuth })
@withRouter
class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.props.loadCheckAuth();
  }

  componentWillReceiveProps(nextProps) {
    const { result } = nextProps;

    if (!result.isLoginAuthenticated) {
      this.props.history.push(result.location);
    }
  }

  handleLogOut() {
    this.props.loadLogOut();
  }


  render() {
    return (
      <div>
        <NavBarContainer />
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

