import React from 'react';
import { connect } from 'react-redux';


import DashboardLayout from './dashboard-layout';
import DetailUserComponent from '../../components/detail-user';
import { ErrorPage, DataEmpty, ReapopSnackBar } from '../../components/lib';
import { loadPostApi, loadGetUser, loadIsLoading, loadUnloadedData } from '../../actions';

@connect(mapStateToProps, {
  loadPostApi, loadGetUser, loadIsLoading, loadUnloadedData,
})
class DetailUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const { params } = this.props.match;
    this.props.loadGetUser(`/users/${params.user_id}`);
  }


  handleSubmit(value) {
    const { match } = this.props;
    return this.props.loadPostApi(`/users/update/${match.params.user_id}`, value);
  }


  render() {
    const { result } = this.props;

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

