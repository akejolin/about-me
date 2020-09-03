function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../../web_modules/react.js?hash=837e9c8767c0c5bb1a63ca951413ac6b';
import './styles.css.proxy.js?hash=4ac2b63226ee8edb45128926f4925b4f';

const KeyWord = props => {
  const styles = {
    default: {}
  };

  let outputStyles = _objectSpread(_objectSpread({}, styles.default), props.style);

  const TagName = props.tagName;

  let setProps = _objectSpread({}, props);

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