import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics"
import {getComponentName} from "../util/util";

const inputHOC = function (Component) {
  class InputHOC extends React.Component {
    constructor(props) {
      super(props);
      this.inputDom = React.createRef();
      this.handlerInputDomFocus = this.handlerInputDomFocus.bind(this);
      this.handlerOnTextChange = this.handlerOnTextChange.bind(this);
      this.handlerOnFocus = this.handlerOnFocus.bind(this);
      this.handlerOnClick = this.handlerOnClick.bind(this);
    }

    componentDidMount() {
      if (this.props.focus !== undefined && this.props.focus) {
        this.handlerInputDomFocus();
      }
    }

    handlerInputDomFocus() {
      this.inputDom.current.focus();
    }

    handlerOnTextChange(event) {
      if (this.props.onChange !== undefined) {
        this.props.onChange(event)
      }
    }

    handlerOnFocus(event) {
      if (this.props.onFocus !== undefined) {
        this.props.onFocus(event);
      }
    }

    handlerOnClick() {
      if (this.props.onClick !== undefined) {
        this.props.onClick()
      }
    }

    render() {
      let {extraProp, ...passThroughProps} = this.props;
      return (
        <Component ref={this.props.forwardRef} {...passThroughProps} handlerFocus={this.handlerInputDomFocus}
                   input={(
                     <input type={this.props.type} ref={this.inputDom} onFocus={this.handlerOnFocus} value={this.props.value}
                            onChange={this.handlerOnTextChange} onClick={this.handlerOnClick}/>)}/>
      )
    }
  }

  InputHOC.displayName = `InputHOC(${getComponentName(Component)})`
  hoistNonReactStatics(InputHOC, Component);
  return React.forwardRef((props, ref) => {
    let {noForwardRef, ...forwardProps} = props
    return <InputHOC ref={noForwardRef} forwardRef={ref} {...forwardProps} />
  })
};

class InputTemplate extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.input}
      </React.Fragment>
    )
  }
}
InputTemplate.displayName = "InputTemplate";

export {inputHOC};

export const InputHOC = inputHOC(InputTemplate)