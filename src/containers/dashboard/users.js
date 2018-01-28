import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from './dashboard-layout';

import { ErrorPage, DataEmpty } from '../../components/lib';
import { momentFormat } from '../../middleware/moment-config';
import UserListComponent from '../../components/users';
import { loadFetchApi } from '../../actions';

@connect(mapStateToProps, { loadFetchApi })
class UserList extends Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }

  componentWillMount() {
    this.handleFetch();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps.result;

    if (data.status === 500) {
      this.renderComponent = <ErrorPage />;
    } else if (data.length === 0) {
      this.renderComponent = <DataEmpty />;
    } else {
      this.renderComponent =
        <UserListComponent {...nextProps.result} handleRefresh={this.handleFetch} />;
    }
  }

  handleFetch() {
    this.props.loadFetchApi('/users');
  }


  renderComponent;

  render() {
    return (
      <div>
        <DashboardLayout>
          {this.renderComponent}
        </DashboardLayout>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.callApi,
  };
}


export default UserList;
