import React from 'react';
import I18n from 'utils/I18n';

const propTypes = {};
const defaultProps = {};

class ListSample extends React.Component {
  render() {
    const text = I18n.getText('list');
    const arr = [
      text.list1,
      text.list2,
      text.list3,
      text.list4,
    ];

    return (
      <ul>
        {arr.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }
}

ListSample.propTypes = propTypes;
ListSample.defaultProps = defaultProps;

export default ListSample;
