import React from '../web_modules/react.js';
import FlexView from './components/FlexView/index.js';
import './styles.css.proxy.js';
import logo from './media/SVG/akejolin-logo-negative.svg.proxy.js';

function App({}) {
  return /*#__PURE__*/React.createElement(FlexView, {
    className: "App"
  }, /*#__PURE__*/React.createElement(FlexView, {
    className: "App"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    style: {
      width: '30vw'
    }
  }), ">"), /*#__PURE__*/React.createElement(FlexView, {
    className: "App"
  }));
}

export default App;