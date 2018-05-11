import React, { PureComponent } from "react";
import { ScrollSyncPane } from "react-scroll-sync";

import FooterWrapper from "./footer_wrapper";
import StaticFooter from "./static_footer/static_footer";
import DynamicFooter from "./dynamic_footer/dynamic_footer";

class Footer extends PureComponent {
  render() {
    const { dynamicColumns, width, totals } = this.props;
    return (
      <FooterWrapper>
        <StaticFooter width={width} />
        <DynamicFooter columns={dynamicColumns} totals={totals} />
      </FooterWrapper>
    );
  }
}

export default Footer;
