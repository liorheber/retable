import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

import { SortConsumer } from "../../../with_sort/with_sort";
import { FilterConsumer } from "../../../with_filter/with_filter";

import Renderer from "../renderer";
import Filter from "../../../../components/filter/filter";
import Sort from "../../../../components/sort/sort";

const HeaderStyle = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.headerFontColor};
  white-space: normal;
`;

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = { hover: false };
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    const { value, id } = this.props;
    const { hover } = this.state;
    return (
      <Renderer
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <HeaderStyle>{value}</HeaderStyle>
        <div>
          <SortConsumer>
            {({ setSort, sort }) => {
              const isActive = sort[0].id === id;
              const direction = isActive ? sort[0].direction : undefined;
              return (
                <Sort
                  hover={hover}
                  onClick={() => setSort({ id, direction })}
                  isActive={isActive}
                  direction={direction}
                />
              );
            }}
          </SortConsumer>
          <FilterConsumer>
            {({ openFilter }) => <Filter hover={hover} onClick={openFilter} />}
          </FilterConsumer>
        </div>
      </Renderer>
    );
  }
}

export default Header;
