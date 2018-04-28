import React, {PureComponent, Fragment} from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from 'styled-components';

import Cell from "../../cell/cell";


const Dynamic = styled.div`
  overflow: auto;
  position: relative;
  z-index: 2;
  background: white;
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  display: flex;
  white-space: nowrap;
`;

class DynamicFooter extends PureComponent {

  render() {
    const { columns } = this.props;
    return (
          <ScrollSyncPane>
            <Dynamic>
              {columns.map((col, index) => <Cell width={col.width} className={`col-${col.id}`} key={index}>{col.name}</Cell>)}
            </Dynamic>
          </ScrollSyncPane>
    );
  }
}


export default DynamicFooter;