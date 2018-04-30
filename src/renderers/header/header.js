import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

import Renderer from "../renderer";
import Filter from "../../components/filter/filter";
import Sort from "../../components/sort/sort";

const HeaderStyle = styled.div`
  text-transform: uppercase;
  color: #939cac;
  white-space: normal;
`;

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = { hover: false };
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    const { value } = this.props;
    const { hover } = this.state;
    return (
      <Renderer
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <HeaderStyle>{value}</HeaderStyle>
        <div>
          <Sort hover={hover} />
          <Filter hover={hover} />
        </div>
      </Renderer>
    );
  }
}

export default Header;
