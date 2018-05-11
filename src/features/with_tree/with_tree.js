import React, { PureComponent, Fragment } from "react";

const Context = React.createContext();

const withTree = WrappedComponent =>
  class extends PureComponent {
    constructor(props, context) {
      super(props, context);
      this.state = {
        withTree: props.selection
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.withTree !== nextProps.withTree) {
        return {
          withTree: nextProps.withTree
        };
      } else {
        return null;
      }
    }

    render() {
      return (
        <Context.Provider value={this.state}>
          <WrappedComponent {...this.props} />
        </Context.Provider>
      );
    }
  };

export const TreeConsumer = Context.Consumer;

export default withTree;
