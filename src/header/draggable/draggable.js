import React, { PureComponent, Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { DraggableCore } from "react-draggable";
import debounce from "debounce";

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
    this.draggable = React.createRef();
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.moveLine = debounce(this.moveLine.bind(this), 1);
    this.state = {
      lastX: 0
    };
  }

  handleStart(event, draggableData) {
    const { marker, resizeStart } = this.props;
    const markerLine = ReactDOM.findDOMNode(marker.current);
    const draggableLine = ReactDOM.findDOMNode(this.draggable.current);
    markerLine.style.left = event.screenX - 12 + "px";
    markerLine.style.top = draggableLine.getBoundingClientRect().top + "px";
    this.setState({ lastX: draggableData.lastX });
    resizeStart();
    window.addEventListener("mousemove", this.moveLine, true);
  }

  handleStop(event, draggableData) {
    const { lastX } = this.state;
    const { resizeEnd } = this.props;
    resizeEnd();
    window.removeEventListener("mousemove", this.moveLine, true);
    const { id, commitResize, width } = this.props;
    const delta = draggableData.lastX - lastX;
    commitResize(id, width + delta);
  }

  moveLine(event) {
    const { marker } = this.props;
    const markerLine = ReactDOM.findDOMNode(marker.current);
    markerLine.style.left = event.screenX - 12 + "px";
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
