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
          const newSelection = [];
          rows.forEach((item, index) => {
            const row = document.getElementsByClassName(`row-${index}`);
            if (isAllSelected) {
              this.removeSelection(row);
            } else {
              this.addSelection(row);
              newSelection.push(index);
            }
          });
          this.setState({ selection: newSelection });
        }
      };
    }

    handleSelection(index, isSelected, event) {
      event && event.stopPropagation();
      const { selection } = this.state;
      const row = document.getElementsByClassName(`row-${index}`);
      if (isSelected) {
        this.removeSelection(row);
        this.setState({ selection: selection.filter(id => id !== index) });
      } else {
        this.addSelection(row);
        const newSelection = selection.slice();
        newSelection.push(index);
        this.setState({ selection: newSelection });
      }
    }

    removeSelections(index, isSelected) {
      const rows = document.getElementsByClassName(`row-selected`);
      while (rows.length) {
        rows[0].classList.remove("row-selected");
      }
      this.setState({ selection: [] }, () =>
        this.handleSelection(index, isSelected)
      );
    }

    removeSelection(row) {
      row[0].classList.remove("row-selected");
      row[1].classList.remove("row-selected");
    }

    addSelection(row) {
      row[0].classList.add("row-selected");
      row[1].classList.add("row-selected");
    }

    render() {
      const { selection } = this.state;
      return (
        <Context.Provider value={this.state}>
          <WrappedComponent {...this.props} selection={selection} />
        </Context.Provider>
      );
    }
  };

export const SelectionConsumer = Context.Consumer;

export default withSelection;
