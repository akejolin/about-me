import React from 'react'
import PropTypes from 'prop-types'

interface AppProps {
  row?: boolean;
  style?: object;
  tagName: string;
  children?: any;
}

const FlexView = (props: AppProps) => {

  const styles = {
    default: {
      height: '100%',
      width: '100%',
      flexGrow: 1,
      display: 'flex',
      flexDirection: props.row ? 'row': 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }

  let outputStyles: any = {
    ...styles.default,
    ...props.style,
  }

  if (outputStyles.width === '100%') {
    outputStyles = {
      ...outputStyles,
      ...{
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
      },
    }
  }
  if (outputStyles.height === '100%') {
    outputStyles = {
      ...outputStyles,
      ...{
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
      },
    }
  };
  const TagName:string = props.tagName;
  let setProps:any = {...props}
  setProps.style = outputStyles
  delete setProps.row
  delete setProps.tagName

  return (
    <TagName {...setProps}>
      { props.children }
    </TagName>
  )

}
FlexView.defaultProps = {
  style: {},
  row: false,
  tagName: 'div',
}


export default FlexView;