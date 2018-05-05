import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import { SelectionConsumer } from "../features/with_selection/with_selection";
import Row from "../row/row";
import Cell from "../cell/cell";
import RowActions from "../row/row_actions";

const Static = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.background};
  min-width: ${props => props.width + props.widthOffset}px;
  max-width: ${props => props.width + props.widthOffset}px;
  display: flex;
  flex-direction: column;
`;

class StaticArea extends PureComponent {
  render() {
    const { rows, columns, width, rowHeight } = this.props;
    return (
      <SelectionConsumer>
        {({ handleSelection, selection, withSelection }) => {
          const widthOffset = 40 + (withSelection ? 40 : 10);
          return (
            <Static width={width} widthOffset={widthOffset}>
              {rows.map((row, index) => (
                <Row
                  rowHeight={rowHeight}
                  key={index}
                  index={index}
                  width={width + widthOffset}
                >
                  <RowActions
                    index={index}
                    onClick={handleSelection}
                    selection={selection}
                    withSelection={withSelection}
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
          );
        }}
      </SelectionConsumer>
    );
  }
}

export default StaticArea;
