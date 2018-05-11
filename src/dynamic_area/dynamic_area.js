import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";
import { SelectionConsumer } from "../features/with_selection/with_selection";

import Row from "../row/row";
import Cell from "../cell/cell";

const Dynamic = styled.div`
  overflow: auto;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
`;

class DynamicArea extends PureComponent {
  render() {
    const { rows, columns, rowHeight, width } = this.props;
    return (
      <SelectionConsumer>
        {({ selection, onSelectRow }) => (
          <ScrollSyncPane>
            <Dynamic>
              {rows.map((row, index) => (
                <Row
                  rowHeight={rowHeight}
                  key={`dynamic-row-${index}`}
                  index={index}
                  width={width}
                  onSelectRow={onSelectRow}
                  selected={selection.includes(index)}
                >
                  {columns.map((col, index) => (
                    <Cell
                      width={col.width}
                      key={`row-${index}-col-${col.id}`}
                      className={`col-${col.id}`}
                      type={col.type}
                      value={row[col.id]}
                      col={col}
                    />
                  ))}
                </Row>
              ))}
              <Row rowHeight={30} index={-1} />
            </Dynamic>
          </ScrollSyncPane>
        )}
      </SelectionConsumer>
    );
  }
}

export default DynamicArea;
