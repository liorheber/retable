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
        renderers: { ...renderers, ...props.renderers },
        getRenderer: this.getRenderer.bind(this)
      };
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
