import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from './dashboard-layout';
import { ErrorPage, DataEmpty } from '../../components/lib';
import { momentFormat } from '../../middleware/moment-config';
import UserListComponent from '../../components/users';
import { loadGetUsers, loadIsLoading } from '../../actions';

@connect(mapStateToProps, { loadGetUsers, loadIsLoading })
class UserList extends Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch() {
    this.props.loadGetUsers();
  }


  render() {
    const { result } = this.props;

    return (
      <div>
        <DashboardLayout>
          <UserListComponent {...result} handleRefresh={this.handleFetch} />;
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
