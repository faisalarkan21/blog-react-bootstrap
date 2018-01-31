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
    this.props.loadIsLoading(true);
    this.props.loadFetchApi('/users');
  }
  // componentDidCatch(error, info) {
  //   console.log(error);
  //   console.log(info);
  // }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }


  handleFetch() {

  }


  render() {
    const { isLoading, result } = this.props;
    // console.log(isLoading);
    console.log(this.props);
    // console.log(typeof result.data);
    if (isLoading === true) {
      return null;
    }


    // if (result.data.status === 500) {
    //   return <ErrorPage />;
    // }


    return (
      <div>
        <DashboardLayout>
          <UserListComponent {...result} handleRefresh={this.handleFetch} />
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
