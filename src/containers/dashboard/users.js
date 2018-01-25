import React, { Component } from 'react';
import UserListComponent from '../../components/users';
import DashboardLayout from './dashboard-layout';

class UserList extends Component {
  render() {
    return (

      <div>
        <DashboardLayout>
          <UserListComponent />
        </DashboardLayout>
      </div>

    );
  }
}

export default UserList;
