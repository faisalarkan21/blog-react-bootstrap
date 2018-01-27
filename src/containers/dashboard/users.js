import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from './dashboard-layout';

import { momentFormat } from '../../middleware/moment-config';
import UserListComponent from '../../components/users';
import { loadFetchApi } from '../../actions';

@connect(mapStateToProps, { loadFetchApi })
class UserList extends Component {
  componentWillMount() {
    this.props.loadFetchApi('/users');
  }
  render() {
    console.log(this.props);
    const { result } = this.props;

    result.data.forEach((item) => {
      item.created_on = momentFormat(item.created_on, 'MMMM Do YYYY');
      item.last_login = item.last_login !== null ?
        momentFormat(item.last_login, 'MMMM Do YYYY') : '-';
    });

    return (
      <div>
        <DashboardLayout>
          <UserListComponent {...result} />
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
