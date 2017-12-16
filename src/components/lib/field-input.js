import React from 'react';
import { Panel, Col, Button, ButtonToolbar, HelpBlock, FormGroup, InputGroup, ControlLabel, FormControl } from 'react-bootstrap';


function FieldInput(props) {
  const {
    icon, input, meta: {
      touched, error, warning, invalid,
    },
  } = props;
  return (
    <FormGroup validationState={touched && invalid === true ? 'error' : null}>
      <InputGroup>
        <InputGroup.Addon>{icon}
        </InputGroup.Addon>
        <FormControl
          {...props}
          onChange={input.onChange}
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
