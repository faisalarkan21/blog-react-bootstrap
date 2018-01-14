import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { tokenAuth } from '../middleware/auth-cookies';
import { AppNav } from '../components/lib';
import { loadLogOut, loadCheckAuth } from '../actions';


@connect(mapStateToProps, { loadLogOut })
@withRouter
class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleDashboard = this.handleDashboard.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.IsLogged = nextProps.result.isLoginAuthenticated;
  }

  handleLogOut() {
    this.props.loadLogOut();
  }

  handleDashboard() {
    this.props.history.push('/dashboard');
  }

  render() {
    console.log(tokenAuth.tokenAuthenticated());
    const { dataToken, authToken } = tokenAuth.tokenAuthenticated();
    const { isPublicRoute } = this.props;
    return (
      <AppNav
        isPublicRoute={isPublicRoute}
        toDashboard={this.handleDashboard}
        logOut={this.handleLogOut}
        isLoginAuthenticated={authToken}
        dataToken={dataToken}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.loginAuth,
  };
}
export default NavBarContainer;
