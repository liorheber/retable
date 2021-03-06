import React, { PureComponent } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";
import Checkbox from "../../components/checkbox/checkbox";
import ExpandCollapse from "../../components/expand_collapse/expand_collapse";

import HeaderCell from "../header_cell/header_cell";

import { SelectionConsumer } from "../../features/with_selection/with_selection";
import { TreeConsumer } from "../../features/with_tree/with_tree";

import { STATIC_AREA } from "../../resources/z_index";

const Static = styled.div`
  overflow: hidden;
  position: relative;
  z-index: ${STATIC_AREA};
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
      <TreeConsumer>
        {({ withTree }) => (
          <SelectionConsumer>
            {({ onSelectAll, selection, isAllSelected, withSelection }) => {
              const widthOffset =
                (withTree ? 40 : 10) + (withSelection ? 40 : 10);
              return (
                <Static width={width} widthOffset={widthOffset}>
                  <div style={{ padding: "0 10px" }}>
                    {withTree && <ExpandCollapse />}
                    {withSelection && (
                      <Checkbox
                        checked={isAllSelected}
                        indeterminate={!isAllSelected && selection.length > 0}
                        onClick={onSelectAll}
                      />
                    )}
                  </div>
                  {columns.map(col => (
                    <HeaderCell
                      key={`header-${col.id}`}
                      value={col.name}
                      {...col}
                    />
                  ))}
                </Static>
              );
            }}
          </SelectionConsumer>
        )}
      </TreeConsumer>
    );
  }
}

export default StaticHeader;
