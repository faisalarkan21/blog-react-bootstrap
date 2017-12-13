import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testApi } from '../actions';
import MainComponent from '../components';


class App extends React.Component {
  render() {
    const { callApi } = this.props;
    console.log(callApi);
    return (
      <div>
        <MainComponent
          linkDaftar="/daftar"
          linkLogin="/login"
          testApi={this.props.stateAPi}
          dataResponse={callApi}
        />
      </div>

    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    callApi: state.callApi,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    stateAPi: testApi,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(App);

