import React from 'react';
import { connect } from 'react-redux';

import { ErrorPage, DataEmpty } from '../../components/lib';
import DashboardLayout from './dashboard-layout';
import HomeComponent from '../../components/home';
import { loadGetHome, loadIsLoading } from '../../actions';
import * as helper from '../../middleware/helper';

@connect(mapStateToProps, { loadGetHome, loadIsLoading })
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }

  componentWillMount() {
    this.handleFetch();
  }

  componentWillReceiveProps(nextProps) {
    const { result } = nextProps;
    this.resultFetch = result;
  }

  handleFetch() {
    this.props.loadGetHome();
  }


  render() {
    const { result } = this.props;

    return (
      <div>
        <DashboardLayout>
          <HomeComponent
            {...result}
          />
        </DashboardLayout>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.callApi,
    isLoading: state.isLoading,
    errorCode: state.fetchError,

  };
}


export default Dashboard;

