import React, { Fragment } from "react";

import { withStyles } from "material-ui/styles";
import Radio, { RadioGroup } from "material-ui/Radio";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText
} from "material-ui/Form";

const style = {
  iconSize: {
    width: "20px",
    height: "20px"
  },
  icon: {
    fontSize: "18px"
  },
  progress: {
    width: "75%"
  },
  root: {
    justifyContent: "space-between",
    padding: "8px 0",
    width: "100%",
    background: "transparent",
    marginRight: "8px"
  }
};

const ThemeSelector = ({ value, onChange, options }) => (
  <FormControl component="fieldset">
    <RadioGroup value={value} onChange={onChange}>
      {options.map(option => (
        <FormControlLabel
          key={option.label}
          value={option.label}
          control={<Radio color="primary"/>}
          label={option.label}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

export default withStyles(style)(ThemeSelector);
