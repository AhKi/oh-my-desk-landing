import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App(props) {
  return (
    <div className="App">{props.children}</div>
  );
}

App.propTypes = propTypes;

export default hot(module)(App);
