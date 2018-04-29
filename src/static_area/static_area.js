import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import Row from "../row/row";
import Cell from "../cell/cell";
import Checkbox from "../components/checkbox/checkbox";
import ExpandCollapse from "../components/expand_collapse/expand_collapse";

import { SelectionConsumer } from "../with_selection/with_selection";

const Static = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  z-index: 2;
  background: white;
  min-width: ${props => props.width + 80}px;
  max-width: ${props => props.width + 80}px;
  display: flex;
  flex-direction: column;
`;

class StaticArea extends PureComponent {
  render() {
    const {
      rows,
      columns,
      width,
      rowHeight
    } = this.props;
    return (
      <Static width={width}>
        {rows.map((row, index) => (
          <Row
            rowHeight={rowHeight}
            key={index}
            index={index}
            width={width + 80}
          >
            <div style={{ padding: "0 10px" }}>
              <ExpandCollapse />
              <SelectionConsumer>
                {({ handleSelection, selection }) => (
                  <Checkbox
                    onClick={event =>
                      handleSelection(index, selection.includes(index), event)
                    }
                    index={index}
                    selection={selection}
                    checked={selection.includes(index)}
                  />
                )}
              </SelectionConsumer>
            </div>
            {columns.map((col, index) => (
              <Cell
                width={col.width}
                key={index}
                className={`col-${col.id}`}
                type={col.type}
                value={row[col.id]}
              />
            ))}
          </Row>
        ))}
        <Row rowHeight={30} index={-1} />
      </Static>
    );
  }
}

export default StaticArea;
