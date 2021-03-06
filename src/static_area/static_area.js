import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import { SelectionConsumer } from "../features/with_selection/with_selection";
import { TreeConsumer } from "../features/with_tree/with_tree";
import Row from "../row/row";
import Cell from "../cell/cell";
import RowActions from "../row/row_actions";
import { STATIC_AREA } from "../resources/z_index";

const Static = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  z-index: ${STATIC_AREA};
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
      <TreeConsumer>
        {({ withTree }) => (
          <SelectionConsumer>
            {({ handleSelection, selection, withSelection, onSelectRow }) => {
              const widthOffset =
                (withTree ? 40 : 10) + (withSelection ? 40 : 10);
              return (
                <Static width={width} widthOffset={widthOffset}>
                  {rows.map((row, index) => (
                    <Row
                      rowHeight={rowHeight}
                      key={`static-row-${index}`}
                      index={index}
                      width={width + widthOffset}
                      onSelectRow={onSelectRow}
                      selected={selection.includes(index)}
                    >
                      <RowActions
                        index={index}
                        onClick={handleSelection}
                        selection={selection}
                        withSelection={withSelection}
                        withTree={withTree}
                      />
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
                </Static>
              );
            }}
          </SelectionConsumer>
        )}
      </TreeConsumer>
    );
  }
}

export default StaticArea;
