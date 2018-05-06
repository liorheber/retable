import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

import Renderer from "../renderer";

const ImageStyle = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #e9ebf0;
  border-radius: 3px;
  max-width: 80px;
  min-width: 80px;
  height: 42px;
  background: ${props => props.theme.background};
`;

class Image extends PureComponent {
  render() {
    const { value } = this.props;
    return (
      <Renderer>
        <ImageStyle>
          <img src={value} height={40} />
        </ImageStyle>
      </Renderer>
    );
  }
}

export default Image;
