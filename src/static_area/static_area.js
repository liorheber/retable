import React, {PureComponent, Fragment} from "react";
import {ScrollSyncPane} from "react-scroll-sync";
import styled from 'styled-components';

import Row from "../row/row";
import Cell from "../cell/cell";
import Checkbox from "../components/checkbox/checkbox";

const Static = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  z-index: 2;
  background: white;
  min-width: ${props => props.width + 40}px;
  max-width: ${props => props.width + 40}px;
  display: flex;
  flex-direction: column;
`;


class StaticArea extends PureComponent {

  selectRow(index, event) {
    const rows = document.getElementsByClassName(`row-${index}`);
    if(event.target.checked) {
      rows[0].classList.add("row-selected");
      rows[1].classList.add("row-selected");
    } else {
      rows[0].classList.remove("row-selected");
      rows[1].classList.remove("row-selected");
    }
  }

  render() {
    const {rows, columns, width, rowHeight} = this.props;
    return (
      <Static width={width}>
        {rows.map((row, index) => (
          <Row rowHeight={rowHeight} key={index} index={index}  width={width + 40}>
            <Checkbox onChange={(event) => this.selectRow(index, event)}/>
            {columns.map((col, index) => (
              <Cell width={col.width} key={index} className={`col-${col.id}`} type={col.type} value={row[col.id]}/>
            ))}
          </Row>
        ))}
        <Row rowHeight={30} index={-1} />
      </Static>
    );
  }
}


export default StaticArea;