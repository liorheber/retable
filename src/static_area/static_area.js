import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import { SelectionConsumer } from "../with_selection/with_selection";
import Row from "../row/row";
import Cell from "../cell/cell";
import RowActions from "../row/row_actions";

const Static = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.background};
  min-width: ${props => props.width + 80}px;
  max-width: ${props => props.width + 80}px;
  display: flex;
  flex-direction: column;
`;

class StaticArea extends PureComponent {
  render() {
    const { rows, columns, width, rowHeight } = this.props;
    return (
      <SelectionConsumer>
        {({ handleSelection, selection }) => (
          <Static width={width}>
            {rows.map((row, index) => (
              <Row
                rowHeight={rowHeight}
                key={index}
                index={index}
                width={width + 80}
              >
                <RowActions
                  index={index}
                  onClick={handleSelection}
                  selection={selection}
                />
                {columns.map((col, index) => (
                  <Cell
                    width={col.width}
                    key={index}
                    className={`col-${col.id}`}
                    type={col.type}
                    value={row[col.id]}
                    col={col}
                  />
                ))}
              </Row>
            ))}
            <Row rowHeight={30} index={-1} />
          </Static>
        )}
      </SelectionConsumer>
    );
  }
}

export default StaticArea;
