import ReactDOM from 'react-dom';
import './index.scss';
import * as React from 'react';
import App from './_app';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
