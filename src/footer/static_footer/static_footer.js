import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import Cell from "../../cell/cell";

const Static = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: white;
  min-width: ${props => props.width}px;
  max-width: ${props => props.width}px;
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
`;

class StaticFooter extends PureComponent {
  render() {
    const { columns, width } = this.props;
    return (
      <Static width={width}>
        {columns.map((col, index) => (
          <Cell width={col.width} className={`col-${col.id}`} key={index}>
            {col.name}
          </Cell>
        ))}
      </Static>
    );
  }
}

export default StaticFooter;
