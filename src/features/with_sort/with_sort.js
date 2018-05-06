import React, { PureComponent, Fragment } from "react";

const Context = React.createContext();

const withSort = WrappedComponent =>
  class extends PureComponent {
    static defaultProps = {
      sort: [{ id: undefined, direction: undefined }],
      onSortChange: () => {}
    };

    constructor(props, context) {
      super(props, context);
      this.state = {
        setSort: this.setSort.bind(this)
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (
        !prevState ||
        JSON.stringify(prevState.sort) !== JSON.stringify(nextProps.sort)
      ) {
        return {
          sort: nextProps.sort
        };
      }
      return null;
    }

    setSort({ id, direction }) {
      const sort = [];
      const { onSortChange } = this.props;
      if (direction === "asc" || direction === undefined) {
        sort.push({ id, direction: "desc" });
      } else {
        sort.push({ id, direction: "asc" });
      }
      this.setState({ sort });
      onSortChange(sort);
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
