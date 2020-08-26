import React from '../../../web_modules/react.js';
import './styles.css.proxy.js';

const KeyWord = props => {
  const styles = {
    default: {}
  };
  let outputStyles = { ...styles.default,
    ...props.style
  };
  const TagName = props.tagName;
  let setProps = { ...props
  };
  setProps.style = outputStyles;
  setProps.className = `key-word${props.className ? ' ' + props.className : ''}`;
  delete setProps.row;
  delete setProps.tagName;
  return /*#__PURE__*/React.createElement(TagName, setProps, props.children);
};

KeyWord.defaultProps = {
  style: {},
  row: false,
  tagName: 'span'
};
export default KeyWord;