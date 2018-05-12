import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import HeaderCell from "../header_cell/header_cell";
import { DYNAMIC_AREA } from "../../resources/z_index";

const Dynamic = styled.div`
  overflow: hidden;
  position: relative;
  z-index: ${DYNAMIC_AREA};
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
  white-space: nowrap;
`;

class DynamicHeader extends PureComponent {
  render() {
    const { columns } = this.props;
    return (
      <ScrollSyncPane>
        <Dynamic>
          {columns.map(col => (
            <HeaderCell key={`header-${col.id}`} value={col.name} {...col} />
          ))}
        </Dynamic>
      </ScrollSyncPane>
    );
  }
}

export default DynamicHeader;
