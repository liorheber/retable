import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

import Cell from "../../cell/cell";
import Resize from "../draggable/draggable";
import { ResizeConsumer } from "../../features/with_resize/with_resize";

const HeaderCellStyle = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;

class HeaderCell extends PureComponent {
  render() {
    const { width, id, value, resizable, minWidth, ...col } = this.props;
    return (
      <ResizeConsumer>
        {({ marker, resizeStart, resizeEnd, commitResize, defaultMinWidth }) => (
          <HeaderCellStyle>
            <Cell
              width={width}
              className={`col-${id}`}
              type="HEADER"
              value={value}
              col={col}
              id={id}
            />
            {resizable && (
              <Resize
                id={id}
                width={width}
                draggable={true}
                commitResize={commitResize}
                marker={marker}
                resizeStart={resizeStart}
                resizeEnd={resizeEnd}
                minWidth={minWidth || defaultMinWidth}
              />
            )}
          </HeaderCellStyle>
        )}
      </ResizeConsumer>
    );
  }
}

export default HeaderCell;
