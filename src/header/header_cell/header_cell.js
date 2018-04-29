import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

import Cell from "../../cell/cell";
import Resize from "../draggable/draggable";

class HeaderCell extends PureComponent {
  render() {
    const {
      width,
      id,
      children,
      commitResize,
      value,
      marker,
      draggingStart,
      draggingEnd
    } = this.props;
    return (
      <div style={{ position: "relative", display: "flex", height: "100%" }}>
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
          draggingStart={draggingStart}
          draggingEnd={draggingEnd}
        />
      </div>
    );
  }
}

export default HeaderCell;
