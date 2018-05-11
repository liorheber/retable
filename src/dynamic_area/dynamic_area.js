import React, { PureComponent } from "react";
import { ScrollSyncPane } from "react-scroll-sync";

import DynamicWrapper from "./dynamic_wrapper";
import { SelectionConsumer } from "../features/with_selection/with_selection";

import Row from "../row/row";
import Cell from "../cell/cell";

class DynamicArea extends PureComponent {
  render() {
    const { rows, columns, rowHeight, width } = this.props;
    return (
      <SelectionConsumer>
        {({ selection, onSelectRow }) => (
          <ScrollSyncPane>
            <DynamicWrapper>
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
            </DynamicWrapper>
          </ScrollSyncPane>
        )}
      </SelectionConsumer>
    );
  }
}

export default DynamicArea;
