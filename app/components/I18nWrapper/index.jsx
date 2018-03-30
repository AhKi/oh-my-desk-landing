import React from 'react';
import PropTypes from 'prop-types';
import I18n from 'utils/I18n';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
const childContextTypes = {
  language: PropTypes.string,
  onChangeContextLang: PropTypes.func,
};

/*
 * 홈페이지에서 사용할 언어 정보를 전달해주는 컴포넌트
 *
 * context.language: 자식 컴포넌트의 리랜더링을 위해 전달해주는 값
 * state.language: I18nWrapper 컴포넌트의 리랜더링을 위해 관리해주는 state
 * window.language: 사용 언어에 대한 정보를 전역적으로 접근하기 위한 변수
 */
class I18nWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: I18n.language,
    };
    // 언어의 기본값을 사용자의 navigator.language 값을 통해 설정
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  getChildContext() {
    return {
      language: this.state.language,
      onChangeContextLang: this.handleChangeLanguage,
    };
  }

  handleChangeLanguage(e) {
    this.setState({ language: e.target.value });
    I18n.changeLanguage(e.target.value);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

I18nWrapper.propTypes = propTypes;
I18nWrapper.childContextTypes = childContextTypes;

export default I18nWrapper;
