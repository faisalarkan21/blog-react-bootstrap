import React from 'react';
import { connect } from 'react-redux';

import { ErrorPage, DataEmpty } from '../../components/lib';
import DashboardLayout from './dashboard-layout';
import HomeComponent from '../../components/home';
import { loadFetchApi, loadIsLoading } from '../../actions';
import * as helper from '../../middleware/helper';

@connect(mapStateToProps, { loadFetchApi, loadIsLoading })
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }

  componentDidMount() {
    this.handleFetch();
  }

  componentWillReceiveProps(nextProps) {
    const { result } = nextProps;
    this.resultFetch = result;
  }

  handleFetch() {
    this.props.loadFetchApi('/users/data/list-statistic-users');
  }

  resultFetch = {
    dataObject: {},
  };


  render() {
    const { isLoading, result } = this.props;

    let renderComponent = null;
    const arrayLastLogin = [];

    if (isLoading === true) {
      return null;
    } else if (result.status === 500) {
      renderComponent = <ErrorPage />;
    } else if (result.status === 404) {
      renderComponent = <DataEmpty />;
    }

    if (!helper.isEmpty(this.resultFetch.dataObject)) {
      this.resultFetch.dataObject.resultLastLogin.map(item => arrayLastLogin.push(item));
    }

    renderComponent =
        (<HomeComponent
          {...result}
          arrayLastLogin={arrayLastLogin}
          handleRefresh={this.handleFetch}
        />);

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


export default Dashboard;

