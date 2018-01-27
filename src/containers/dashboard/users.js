import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from './dashboard-layout';

import { ErrorPage, DataEmpty } from '../../components/lib';
import { momentFormat } from '../../middleware/moment-config';
import UserListComponent from '../../components/users';
import { loadFetchApi } from '../../actions';

@connect(mapStateToProps, { loadFetchApi })
class UserList extends Component {
  componentWillMount() {
    return this.props.loadFetchApi('/users');
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps.result;
    console.log(data);
    if (data.status === 500) {
      this.renderComponent = <ErrorPage />;
    } else if (data.length === 0) {
      this.renderComponent = <DataEmpty />;
    } else {
      data.forEach((item) => {
        item.created_on = momentFormat(item.created_on, 'MMMM Do YYYY');
        item.role_id = item.role_id !== 1 ?
          'Penulis' : 'Administrator';
      });
      this.renderComponent = <UserListComponent {...nextProps.result} />;
    }
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
