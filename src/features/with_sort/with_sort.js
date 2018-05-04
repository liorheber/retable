import React, { PureComponent, Fragment } from "react";

const Context = React.createContext();

const withSort = WrappedComponent =>
  class extends PureComponent {
    constructor(props, context) {
      super(props, context);
      this.state = {
        sort: [{id: undefined, direction: undefined}],
        setSort: this.setSort.bind(this)
      };
    }

    setSort({ id, direction }) {
      if (direction === "asc" || direction === undefined) {
        this.setState({ sort: [{ id, direction: "desc" }] });
      } else {
        this.setState({ sort: [{ id, direction: "asc" }] });
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

export const SortConsumer = Context.Consumer;

export default withSort;
