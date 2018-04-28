import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

import Renderer from "../renderer";

const HeaderStyle = styled.div`
  text-transform: uppercase;
  color: #939cac;
`;

class Header extends PureComponent {
  render() {
    const { value } = this.props;
    return (
      <Renderer>
        <HeaderStyle>{value}</HeaderStyle>
      </Renderer>
    );
  }
}

export default Header;
