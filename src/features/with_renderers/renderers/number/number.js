import React, { PureComponent } from "react";
import Renderer from "../renderer";

export class NumberRenderer extends PureComponent {

  render() {
    const { value } = this.props;
    return (
      <Renderer style={{justifyContent: "flex-end"}}>
        {value}
      </Renderer>
    );
  }
}

export default NumberRenderer;
