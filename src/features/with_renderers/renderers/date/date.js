import React, { PureComponent } from "react";
import format from "date-fns/format";

import Renderer from "../renderer";

export const DATE_FORMAT = "MM/DD/YYYY";
export const DATE_TIME_FORMAT = "MM/DD/YYYY HH:mm";

export class DateRenderer extends PureComponent {
  getFormattedUnixTime(value, type) {
    let dateFormat;
    const dateValue = !isNaN(Number(value))
      ? new Date(parseInt(value, 10))
      : value;

    switch (type) {
      case "DATE_TIME":
        dateFormat = DATE_TIME_FORMAT;
        break;

      case "DATE":
      default:
        dateFormat = DATE_FORMAT;
        break;
    }

    return format(dateValue, dateFormat);
  }

  render() {
    const { value, type } = this.props;
    return (
      <Renderer>
        {value ? this.getFormattedUnixTime(value, type) : null}
      </Renderer>
    );
  }
}

export default DateRenderer;
