import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";
import StaticHeader from "./static_header/static_header";
import DynamicHeader from "./dynamic_header/dynamic_header";

const HeaderStyle = styled.div`
  display: flex;
  position: sticky;
  z-index: 2;
  top: 0;
  z-index: 3;
  background: ${props => props.theme.background};
  overflow: hidden;
  white-space: nowrap;
  height: 52px;
  box-shadow: 0px 1px 6px 0px ${props => props.theme.rowBorder};
`;

class Header extends PureComponent {
  render() {
    const {
      staticColumns,
      dynamicColumns,
      width
    } = this.props;
    return (
      <HeaderStyle>
        <StaticHeader
          columns={staticColumns}
          width={width}
        />
        <DynamicHeader
          columns={dynamicColumns}
        />
      </HeaderStyle>
    );
  }
}

export default Header;
