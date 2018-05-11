import NumberRenderer from "./renderers/number/number";
import TextRenderer from "./renderers/text/text";
import Image from "./renderers/image/image";
import DateRenderer from "./renderers/date/date";
import Header from "./renderers/header/header";
import {PercentageRenderer} from "./renderers/percentage/percentage";
import ColorRenderer from "./renderers/color/color";

export default {
  HEADER: Header,
  TEXT: TextRenderer,
  IMAGE: Image,
  DATE: DateRenderer,
  DATETIME: DateRenderer,
  NUMBER: NumberRenderer,
  PERCENTAGE: PercentageRenderer,
  COLOR: ColorRenderer,
}