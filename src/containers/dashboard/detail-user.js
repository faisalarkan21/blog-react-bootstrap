import React from 'react';
import { connect } from 'react-redux';

import DashboardLayout from './dashboard-layout';
import DetailUserComponent from '../../components/detail-user';
import { ErrorPage, DataEmpty } from '../../components/lib';
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

    let renderComponent = null;

    if (isLoading) {
      return null;
    } else if (result.status === 500) {
      renderComponent = <ErrorPage />;
    } else if (result.status === 404) {
      renderComponent = <DataEmpty />;
    } else {
      renderComponent =
        <DetailUserComponent handleUpdate={this.handleSubmit} {...result} />;
    }

    return (
      <div>
        <DashboardLayout>
          {renderComponent}
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

