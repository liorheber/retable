import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import HeaderCell from "../header_cell/header_cell";

const Dynamic = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
  white-space: nowrap;
`;

class DynamicHeader extends PureComponent {
  render() {
    const { columns } = this.props;
    return (
      <ScrollSyncPane>
        <Dynamic>
          {columns.map((col, index) => (
            <HeaderCell
              key={index}
              value={col.name}
              {...col}
            />
          ))}
        </Dynamic>
      </ScrollSyncPane>
    );
  }
}

export default DynamicHeader;
