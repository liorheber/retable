import React, { PureComponent, Fragment } from "react";

const Context = React.createContext();

const withSelection = WrappedComponent =>
  class extends PureComponent {
    constructor(props, context) {
      super(props, context);
      this.state = {
        selection: [],
        handleSelection: this.handleSelection.bind(this),
        onSelectRow: index => {
          const { selection } = this.state;
          const isSelected = selection.includes(index);
          this.removeSelections(index, isSelected);
        },
        onSelectAll: () => {
          const { rows } = this.props;
          const { selection } = this.state;
          const isAllSelected = selection.length === rows.length;
          const newSelection = isAllSelected ? [] : rows.map((item, index) => index);
          this.setState({ selection: newSelection });
        }
      };
    }

    handleSelection(index, isSelected, event) {
      event && event.stopPropagation();
      const { selection } = this.state;
      if (isSelected) {
        this.setState({ selection: selection.filter(id => id !== index) });
      } else {
        const newSelection = selection.slice();
        newSelection.push(index);
        this.setState({ selection: newSelection });
      }
    }

    removeSelections(index, isSelected) {
      this.setState({ selection: [] }, () =>
        this.handleSelection(index, isSelected)
      );
    }

    render() {
      const { rows } = this.props;
      const { selection } = this.state;
      const isAllSelected = selection.length === rows.length;
      return (
        <Context.Provider value={{...this.state, isAllSelected}}>
          <WrappedComponent {...this.props} />
        </Context.Provider>
      );
    }
  };

export const SelectionConsumer = Context.Consumer;

export default withSelection;
