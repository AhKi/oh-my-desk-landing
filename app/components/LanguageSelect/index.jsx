import React from 'react';
import PropTypes from 'prop-types';

const contextTypes = {
  language: PropTypes.string,
  onChangeContextLang: PropTypes.func,
};

class LanguageSelect extends React.Component {
  render() {
    const { language, onChangeContextLang } = this.context;

    return (
      <div>
        <select value={language} onChange={onChangeContextLang}>
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>
      </div>
    );
  }
}

LanguageSelect.contextTypes = contextTypes;

export default LanguageSelect;
