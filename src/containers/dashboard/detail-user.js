import React from 'react';
import { connect } from 'react-redux';

import DashboardLayout from './dashboard-layout';
import DetailUserComponent from '../../components/detail-user';
import { loadPostApi, loadFetchApi, loadIsLoading } from '../../actions';

@connect(mapStateToProps, { loadPostApi, loadFetchApi, loadIsLoading })
class DetailUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const { params } = this.props.match;
    console.log(params);
    this.props.loadFetchApi(`/users/${params.user_id}`);
  }


  handleSubmit(value) {
    console.log(value);
  }


  render() {
    const { isLoading, result } = this.props;
    console.log(this.props);
    if (isLoading) {
      return null;
    }
    return (
      <div>
        <DashboardLayout>
          <DetailUserComponent handleUpdate={this.handleSubmit} {...result} />;
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


export default DetailUser;

