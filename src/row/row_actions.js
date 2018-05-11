import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import Checkbox from "../components/checkbox/checkbox";
import ExpandCollapse from "../components/expand_collapse/expand_collapse";

const RowActionsStyle = styled.div`
  padding: 0 10px;
`;

class RowActions extends PureComponent {
  render() {
    const { index, onClick, selection, withSelection, withTree } = this.props;
    return (
      <RowActionsStyle>
        {withTree && <ExpandCollapse />}
        {withSelection && (
          <Checkbox
            onClick={event => onClick(index, selection.includes(index), event)}
            index={index}
            selection={selection}
            checked={selection.includes(index)}
          />
        )}
      </RowActionsStyle>
    );
  }
}

export default RowActions;
