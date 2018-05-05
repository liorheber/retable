import React, { PureComponent, Fragment } from "react";

const Context = React.createContext();

const withColumns = WrappedComponent =>
  class extends PureComponent {
    static defaultProps = {
      onColumnChange: () => {}
    };

    constructor(props, context) {
      super(props, context);
      this.updateColumns = this.updateColumns.bind(this);
      this.state = {
        columns: props.columns
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (!prevState || prevState.columns !== nextProps.columns) {
        return {
          columns: nextProps.columns
        };
      }
      return null;
    }

    updateColumns(columns) {
      const { onColumnChange } = this.props;
      this.setState({ columns }, () => onColumnChange(columns));
    }

    render() {
      const { columns } = this.state;
      const staticColumns = columns.filter(col => col.defaultInColumnSelection);
      const dynamicColumns = columns.filter(
        col => !col.defaultInColumnSelection
      );
      return (
        <Context.Provider value={this.state}>
          <WrappedComponent
            {...this.props}
            staticColumns={staticColumns}
            dynamicColumns={dynamicColumns}
            updateColumns={this.updateColumns}
          />
        </Context.Provider>
      );
    }
  };

export const ColumnsConsumer = Context.Consumer;

export default withColumns;
