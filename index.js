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

const { persistor, store } = configureStore();

/* eslint-enable */
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <PersistGate
        loading={<div />}
        persistor={persistor}
      >
        <Root />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
);

