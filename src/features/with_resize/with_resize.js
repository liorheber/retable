import React, { PureComponent, Fragment } from "react";
import Marker from "./marker";

const Context = React.createContext();

const withResize = WrappedComponent =>
  class extends PureComponent {
    constructor(props, context) {
      super(props, context);
      this.marker = React.createRef();
      this.state = {
        resizing: false,
        marker: this.marker,
        resizeStart: () => this.setState({ resizing: true }),
        resizeEnd: () => this.setState({ resizing: false }),
        commitResize: this.commitResize.bind(this)
      };
    }

    commitResize(id, width) {
      const { updateColumns, columns } = this.props;
      const newColumns = columns.map(
        col => (col.id === id ? { ...col, width } : col)
      );
      this.setState({ resizing: false }, () => updateColumns(newColumns));
    }

    render() {
      const { resizing } = this.state;
      return (
        <Context.Provider value={this.state}>
          <WrappedComponent {...this.props} />
          <Marker ref={this.marker} resizing={resizing} />
        </Context.Provider>
      );
    }
  };

export const ResizeConsumer = Context.Consumer;

export default withResize;
