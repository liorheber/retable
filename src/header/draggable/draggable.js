import React, { PureComponent, Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { DraggableCore } from "react-draggable";
import debounce from "debounce";

import { MODAL } from "../../resources/z_index";

const DraggableStyle = styled.div`
  width: 5px;
  cursor: col-resize;
  height: 100%;
  z-index: ${MODAL};
  position: absolute;
  right: 0;
`;

class Resize extends PureComponent {
  constructor(props) {
    super(props);
    this.draggable = React.createRef();
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.moveLine = debounce(this.moveLine.bind(this), 1);
    this.state = {
      lastX: 0
    };
  }

  handleStart(event, draggableData) {
    event.preventDefault();
    const { marker, resizeStart } = this.props;
    const markerLine = ReactDOM.findDOMNode(marker.current);
    const draggableLine = ReactDOM.findDOMNode(this.draggable.current);
    markerLine.style.left = event.screenX - 50 + "px";
    markerLine.style.top = draggableLine.getBoundingClientRect().top + "px";
    this.setState({ lastX: draggableData.lastX, startX: event.clientX });
    resizeStart();
    window.addEventListener("mousemove", this.moveLine, true);
  }

  handleStop(event, draggableData) {
    event.preventDefault();
    const { lastX } = this.state;
    const { minWidth } = this.props;
    window.removeEventListener("mousemove", this.moveLine, true);
    const { id, commitResize, width } = this.props;
    const delta = draggableData.lastX - lastX;
    commitResize(id, Math.max(width + delta, minWidth));
  }

  moveLine(event) {
    event.preventDefault();
    const { marker, minWidth, width } = this.props;
    const { startX } = this.state;
    const markerLine = ReactDOM.findDOMNode(marker.current);
    const delta = startX - event.clientX;
    const limit = width - minWidth;
    if (delta < limit) {
      markerLine.style.left = event.clientX - 40 + "px";
    } else {
      markerLine.style.left = startX - limit - 40 + "px";
    }
  }

  render() {
    return (
      <Fragment>
        <DraggableCore
          onStop={this.handleStop}
          onStart={this.handleStart}
          axis="x"
          draggable
        >
          <DraggableStyle ref={this.draggable} />
        </DraggableCore>
      </Fragment>
    );
  }
}

export default Resize;
