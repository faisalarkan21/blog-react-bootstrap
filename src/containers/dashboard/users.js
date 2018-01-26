import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from './dashboard-layout';
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
