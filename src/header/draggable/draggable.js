import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import { DraggableCore } from "react-draggable";

const DraggableStyle = styled.div`
  width: 5px;
  cursor: col-resize;
  height: 100%;
  z-index: 100;
  position: absolute;
  right: 0;
`;

class Resize extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(event, draggableData) {
    if (draggableData.deltaX !== 0) {
      const { id, commitResize, width } = this.props;
      commitResize(id, width + draggableData.deltaX);
    }
  }

  render() {
    const { width } = this.props;
    return (
      <DraggableCore
        onDrag={this.handleDrag}
        axis="x"
      >
        <DraggableStyle />
      </DraggableCore>
    );
  }
}

export default Resize;
