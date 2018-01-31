import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from './dashboard-layout';

import { ErrorPage, DataEmpty } from '../../components/lib';
import { momentFormat } from '../../middleware/moment-config';
import UserListComponent from '../../components/users';
import { loadFetchApi, loadIsLoading } from '../../actions';

@connect(mapStateToProps, { loadFetchApi, loadIsLoading })
class UserList extends Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch() {
    this.props.loadFetchApi('/users');
  }


  render() {
    const { isLoading, result } = this.props;

    let renderComponent = null;

    if (isLoading === true) {
      return null;
    } else if (result.status === 500) {
      renderComponent = <ErrorPage />;
    } else if (result.status === 404) {
      renderComponent = <DataEmpty />;
    } else {
      renderComponent =
        <UserListComponent {...result} handleRefresh={this.handleFetch} />;
    }

    return (
      <div>
        <DashboardLayout>
          {renderComponent}
        </DashboardLayout>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.callApi,
    isLoading: state.isLoading,

  };
}


export default UserList;
