import React from 'react';
import { connect } from 'react-redux';

import DashboardLayout from './dashboard-layout';
import DetailUserComponent from '../../components/detail-user';
import { loadFetchApi } from '../../actions';

@connect(mapStateToProps, { loadFetchApi })
class DetailUser extends React.Component {
  componentWillMount() {
    const { params } = this.props.match;
    console.log(params);
    this.props.loadFetchApi(`/users/${params.user_id}`);
  }


  render() {
    const { result } = this.props;

    return (
      <div>
        <DashboardLayout>
          <DetailUserComponent {...result} />
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


export default DetailUser;

