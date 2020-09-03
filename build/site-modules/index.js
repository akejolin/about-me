import __SNOWPACK_ENV__ from '../metadata/env.js?hash=999a70d0b2c562f4b06f8f76b2a78200';
import.meta.env = __SNOWPACK_ENV__;

import React from '../web_modules/react.js?hash=837e9c8767c0c5bb1a63ca951413ac6b';
import ReactDOM from '../web_modules/react-dom.js?hash=6966c01d3268d3149e5b2f67edf4b1ff';
import App from './App.js?hash=c4c18bd9d4ea469c416386aa7813cd4a';
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement

if (import.meta.hot) {
  import.meta.hot.accept();
}