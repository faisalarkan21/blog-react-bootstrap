import React from 'react';
import { HelpBlock, FormGroup, InputGroup, ControlLabel, FormControl } from 'react-bootstrap';


function FieldInput(props) {
  const {
    icon, type, label, input, meta: {
      touched, error, warning, invalid,
    },
  } = props;


  if (type === 'text') {
    input.value = input.value.replace(/(?:^|\s)\S/g, a => a.toUpperCase());
  }

  return (
    <FormGroup validationState={touched && invalid === true ? 'error' : null}>
      <InputGroup style={{ marginBottom: 15 }}>
        <InputGroup.Addon>{icon}
        </InputGroup.Addon>
        <ControlLabel>{label}</ControlLabel>

        <FormControl
          {...props}
          onChange={input.onChange}
          value={input.value}
        />

        <HelpBlock>{touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
        </HelpBlock>
      </InputGroup>
    </FormGroup>
  );
}

export { FieldInput };
