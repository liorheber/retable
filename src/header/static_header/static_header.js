import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";
import Checkbox from "../../components/checkbox/checkbox";
import ExpandCollapse from "../../components/expand_collapse/expand_collapse";

import HeaderCell from "../header_cell/header_cell";

import { SelectionConsumer } from "../../features/with_selection/with_selection";

const Static = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.background};
  min-width: ${props => props.width + props.widthOffset}px;
  max-width: ${props => props.width + props.widthOffset}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

class StaticHeader extends PureComponent {
  render() {
    const { columns, width } = this.props;
    return (
      <SelectionConsumer>
        {({ onSelectAll, selection, isAllSelected, withSelection }) => {
          const widthOffset = 40 + (withSelection ? 40 : 10);
          return (
            <Static width={width} widthOffset={widthOffset}>
              <div style={{ padding: "0 10px" }}>
                <ExpandCollapse />
                {withSelection && (
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={!isAllSelected && selection.length > 0}
                    onClick={onSelectAll}
                  />
                )}
              </div>
              {columns.map((col, index) => (
                <HeaderCell key={index} value={col.name} {...col} />
              ))}
            </Static>
          );
        }}
      </SelectionConsumer>
    );
  }
}

export default StaticHeader;
