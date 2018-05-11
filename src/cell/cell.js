import React, { PureComponent } from "react";

import { RenderersConsumer } from "../features/with_renderers/with_renderers";
import CellWrapper from "./cell_wrapper";


class Cell extends PureComponent {
  render() {
    const { width, type, value, id, col } = this.props;
    return (
      <CellWrapper width={width}>
        <RenderersConsumer>
          {({ getRenderer }) => {
            const Renderer = getRenderer(type);
            return <Renderer value={value} id={id} {...col} />;
          }}
        </RenderersConsumer>
      </CellWrapper>
    );
  }
}

export default Cell;
