import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'routes';
import { BrowserRouter } from 'react-router-dom';
import 'scss/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root'),
);
