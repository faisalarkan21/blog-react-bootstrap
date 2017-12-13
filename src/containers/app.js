import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTestApi } from '../actions';
import MainComponent from '../components';


class App extends React.Component {
  render() {
    const { result, testApi } = this.props;

    return (
      <div>
        <MainComponent
          linkDaftar="/daftar"
          linkLogin="/login"
          testApi={testApi}
          dataResponse={result}
        />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.callApi,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    testApi: loadTestApi,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(App);

