import React, { PureComponent } from "react";
import Icon from "material-ui/Icon";
import Pet from "@material-ui/icons/Pets";
import Person from "@material-ui/icons/Person";

import Renderer from "../../src/features/with_renderers/renderers/renderer";

const icons = {
  PET: Pet,
  HUMAN: Person
};

class IconRenderer extends PureComponent {
  static defaultProps = {
    value: { icon: undefined, tooltip: undefined }
  };

  render() {
    const { icon, tooltip } = this.props.value;
    const IconComponent = icons[icon];
    return (
      <Renderer title={tooltip}>
        <Icon>{IconComponent && <IconComponent />}</Icon>
      </Renderer>
    );
  }
}

export default IconRenderer;
