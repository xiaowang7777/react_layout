import React from "react";
import {InputHOC} from "./form/Input";

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focusInputDom = React.createRef();
    this.state = {
      text: ""
    }
  }

  handleFocusInput() {
    this.focusInputDom.current.handlerInputDomFocus();
    console.log(this.state.text)
  }

  handlerTextOnChange(event) {
    this.setState(({
      text: event.target.value
    }))
  }

  render() {
    return (
      <div>
        <InputHOC type={"text"} focus={true} noForwardRef={this.focusInputDom} value={this.state.value}
                  onChange={this.handlerTextOnChange.bind(this)}/>
        <InputHOC type={"button"} onClick={this.handleFocusInput.bind(this)} value={"ccc"}/>
      </div>
    )
  }
}

export {CustomTextInput}