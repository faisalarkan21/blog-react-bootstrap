import React from 'react';
import PropTypes from 'prop-types';

import MainComponent from '../components';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainComponent linkDaftar="/daftar" linkLogin="/login" />

      </div>

    );
  }
}


export default App;

