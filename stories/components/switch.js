import React from "react";

import Switch from "material-ui/Switch";
import { FormControlLabel } from "material-ui/Form";

const SwitchComponent = ({ onChange, checked, label }) => (
  <FormControlLabel
    control={<Switch checked={checked} onChange={onChange} color="primary" />}
    label={label}
  />
);

export default SwitchComponent;
