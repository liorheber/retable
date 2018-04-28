import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import Row from "../row/row";
import Cell from "../cell/cell";

const Dynamic = styled.div`
  overflow: auto;
  position: relative;
  z-index: 2;
  background: white;
  display: flex;
  flex-direction: column;
`;

class DynamicArea extends PureComponent {
  render() {
    const { rows, columns, rowHeight, width, onSelectRow } = this.props;
    return (
      <ScrollSyncPane>
        <Dynamic>
          {rows.map((row, index) => (
            <Row rowHeight={rowHeight} key={index} index={index}  width={width} onSelectRow={onSelectRow}>
              {columns.map((col, index) => (
                <Cell width={col.width} key={index} className={`col-${col.id}`} type={col.type} value={row[col.id]}/>
              ))}
            </Row>
          ))}
          <Row rowHeight={30} index={-1} />
        </Dynamic>
      </ScrollSyncPane>
    );
  }
}

export default DynamicArea;
