import React, { PureComponent } from "react";
import Renderer from "../renderer";

export class TextRenderer extends PureComponent {

  render() {
    const { value } = this.props;
    const text = typeof value === "string" ? value : undefined;
    return (
      <Renderer>
        {text}
      </Renderer>
    );
  }
}

export default TextRenderer;
