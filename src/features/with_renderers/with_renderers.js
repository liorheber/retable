import React, { PureComponent } from "react";
import renderers from "./renderers";

const Context = React.createContext();

const withRenderers = WrappedComponent =>
  class extends PureComponent {
    static defaultProps = {
      renderers: {}
    };

    constructor(props, context) {
      super(props, context);
      this.state = {
        renderers: renderers,
        getRenderer: this.getRenderer.bind(this)
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (!prevState || prevState.renderers !== nextProps.renderers) {
        return {
          renderers: { ...renderers, ...nextProps.renderers }
        };
      }
      return null;
    }

    getRenderer(type) {
      const { renderers } = this.state;
      return renderers[type] ? renderers[type] : renderers["TEXT"];
    }

    render() {
      return (
        <Context.Provider value={this.state}>
          <WrappedComponent {...this.props} />
        </Context.Provider>
      );
    }
  };

export const RenderersConsumer = Context.Consumer;

export default withRenderers;
