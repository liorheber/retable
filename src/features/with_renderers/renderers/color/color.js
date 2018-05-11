import React, { PureComponent } from "react";
import styled from "styled-components";
import Renderer from "../renderer";

const Color = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e9ebf0;
  border-radius: 3px;
  max-width: 60px;
  min-width: 60px;
  height: 32px;
  background: ${props => props.color}
`;

export class ColorRenderer extends PureComponent {
  render() {
    const { value } = this.props;
    return (
      <Renderer>
          <Color color={value} title={value} />
      </Renderer>
    );
  }
}

export default ColorRenderer;
