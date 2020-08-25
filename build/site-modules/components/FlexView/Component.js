import React from '../../../web_modules/react.js';
import './styles.css.proxy.js';

const FlexView = props => {
  const styles = {
    default: {} // Default has been moved to scss

  };
  let outputStyles = { ...styles.default,
    ...props.style
  };

  if (outputStyles.width === '100%') {
    outputStyles = { ...outputStyles,
      ...{
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0
      }
    };
  }

  if (outputStyles.height === '100%') {
    outputStyles = { ...outputStyles,
      ...{
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
      }
    };
  }

  ;
  const TagName = props.tagName;
  let setProps = { ...props
  };
  setProps.style = outputStyles;
  setProps.className = "flex-view";
  delete setProps.row;
  delete setProps.tagName;
  return /*#__PURE__*/React.createElement(TagName, setProps, props.children);
};

FlexView.defaultProps = {
  style: {},
  row: false,
  tagName: 'div'
};
export default FlexView;