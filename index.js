import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import path from 'path';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from './src/store/configureStore';
import Root from './src/containers/root';

/* eslint-disable */
import 'typeface-roboto'; 
import './public/style/base.scss';
import 'font-awesome/css/font-awesome.min.css';
import './public/style/metismenu.css';

/* eslint-enable */
ReactDOM.render(

  <Provider store={configureStore}>
    <BrowserRouter>

      <Root />

    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
);

