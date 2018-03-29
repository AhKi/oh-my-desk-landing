import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import I18n from 'components/I18n';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App(props) {
  return (
    <div className="App">
      <I18n>
        {props.children}
      </I18n>
    </div>
  );
}

App.propTypes = propTypes;

export default hot(module)(App);
