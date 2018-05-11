import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import Cell from "../../cell/cell";

const Dynamic = styled.div`
  overflow: auto;
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

class DynamicFooter extends PureComponent {
  render() {
    const { columns, totals } = this.props;
    return (
      <ScrollSyncPane>
        <Dynamic>
          {columns.map(col => (
            <Cell
              width={col.width}
              key={`footer-${col.id}`}
              className={`col-${col.id}`}
              type={col.type}
              value={totals[col.id]}
            />
          ))}
        </Dynamic>
      </ScrollSyncPane>
    );
  }
}

export default DynamicFooter;
