import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import I18nWrapper from 'components/I18nWrapper';
import LanguageSelect from 'components/LanguageSelect';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App(props) {
  return (
    <div className="App">
      <I18nWrapper>
        <LanguageSelect />
        {props.children}
      </I18nWrapper>
    </div>
  );
}

App.propTypes = propTypes;

export default hot(module)(App);
