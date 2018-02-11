import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { notify } from 'reapop';


import { loadLogOut, loadCheckAuth, loadIsFetchError } from '../../actions';
import { ReapopSnackBar, ErrorPage, DataEmpty } from '../../components/lib';
import NavBarContainer from '../navbar-container';

@connect(mapStateToProps, {
  loadLogOut, loadCheckAuth, notify, loadIsFetchError,
})
@withRouter
class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.props.loadCheckAuth();
  }

  componentWillReceiveProps(nextProps) {
    const { result } = nextProps;
    console.log(this.props);
    if (!result.isLoginAuthenticated) {
      this.props.history.push(result.location);
    }
  }

  componentWillUnmount() {
    this.props.loadIsFetchError(null);
  }

  render() {
    const { isLoading, errorCode } = this.props;

    let renderComponent = null;

    if (isLoading === true) {
      return null;
    } else if (errorCode === 500) {
      renderComponent = <ErrorPage />;
    } else if (errorCode === 404) {
      renderComponent = <DataEmpty />;
    } else {
      renderComponent = this.props.children;
    }

    return (
      <div>
        <NavBarContainer />
        <ReapopSnackBar />
        {renderComponent}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.loginAuth,
    errorCode: state.fetchError,
    isLoading: state.isLoading,
  };
}


export default DashboardLayout;

