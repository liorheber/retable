import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

import Cell from "../../cell/cell";
import Resize from "../draggable/draggable";
import { ResizeConsumer } from "../../with_resize/with_resize";

const HeaderCellStyle = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;

class HeaderCell extends PureComponent {
  render() {
    const { width, id, commitResize, value } = this.props;
    return (
      <ResizeConsumer>
        {({ marker, resizeStart, resizeEnd }) => (
          <HeaderCellStyle>
            <Cell
              width={width}
              className={`col-${id}`}
              type="HEADER"
              value={value}
            />
            <Resize
              id={id}
              width={width}
              draggable={true}
              commitResize={commitResize}
              marker={marker}
              resizeStart={resizeStart}
              resizeEnd={resizeEnd}
            />
          </HeaderCellStyle>
        )}
      </ResizeConsumer>
    );
  }
}

export default HeaderCell;
