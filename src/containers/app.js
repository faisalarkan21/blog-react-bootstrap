import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTestApi } from '../actions';
import MainComponent from '../components';

/* eslint no-use-before-define: ["error", { "functions": false }] */
@connect(mapStateToProps, { loadTestApi })
class App extends React.Component {
  render() {
    const { result, loadTestApi } = this.props;
    return (
      <div>
        <MainComponent
          linkDaftar="/daftar"
          linkLogin="/login"
          testApi={loadTestApi}
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


export default App;

