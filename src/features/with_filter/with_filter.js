import React, { PureComponent, Fragment } from "react";
import ReactDOM from "react-dom";
import Filter from "./filter";

const Context = React.createContext();

const withFilter = WrappedComponent =>
  class extends PureComponent {
    constructor(props, context) {
      super(props, context);
      this.filter = React.createRef();
      this.state = {
        isOpen: false,
        openFilter: this.openFilter.bind(this),
        closeFilter: () => this.setState({ isOpen: false })
      };
    }

    openFilter(button) {
      const buttonNode = ReactDOM.findDOMNode(button.current);
      const filterNode = ReactDOM.findDOMNode(this.filter.current);
      this.setState({ isOpen: true }, () => this.setPlacement(buttonNode, filterNode));
    }

    setPlacement(buttonNode, filterNode) {
      console.log();
      const { top, height, left } = buttonNode.getBoundingClientRect();
      const { width } = filterNode.getBoundingClientRect();
      const leftPosition = window.innerWidth - left > 300 ? left - width/2 : left - width;
      filterNode.style.left = leftPosition + "px";
      filterNode.style.top = top + height + 12 + "px";
    }

    render() {
      const { isOpen, closeFilter } = this.state;
      return (
        <Context.Provider value={this.state}>
          <WrappedComponent {...this.props} />
          <Filter ref={this.filter} isOpen={isOpen} closeFilter={closeFilter}/>
        </Context.Provider>
      );
    }
  };

export const FilterConsumer = Context.Consumer;

export default withFilter;
