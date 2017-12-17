import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import path from 'path';
import { BrowserRouter } from 'react-router-dom';

import store from './src/store/configureStore';
import Root from './src/containers/root';


/* eslint-disable */
import 'typeface-roboto'; 
import './public/style/base.scss';
import 'font-awesome/css/font-awesome.min.css';

/* eslint-enable */
ReactDOM.render(


  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'),
);

