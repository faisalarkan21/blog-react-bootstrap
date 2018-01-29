import React from 'react';
import { HelpBlock, FormGroup, InputGroup, ControlLabel, FormControl } from 'react-bootstrap';


const SelectComponent = props => (

  <FormControl value={props.input.value} componentClass="select" placeholder="select">
    <option value="Administrator">Administrator</option>
    <option value="Penulis">Penulis</option>
  </FormControl>

);


function FieldInput(props) {
  const {
    icon, type, label, input, meta: {
      touched, error, warning, invalid,
    },
  } = props;

  let renderInput = null;

  if (type === 'text') {
    input.value = input.value.replace(/(?:^|\s)\S/g, a => a.toUpperCase());
  } else if (type === 'select') {
    renderInput = <SelectComponent />;
  }

  return (
    <FormGroup validationState={touched && invalid === true ? 'error' : null}>
      <InputGroup style={{ marginBottom: 15 }}>
        <InputGroup.Addon>{icon}
        </InputGroup.Addon>
        <ControlLabel>{label}</ControlLabel>

        {renderInput === null ?
          <FormControl
            {...props}
            onChange={props.input.onChange}
            value={props.input.value}
          /> :
          <SelectComponent {...props} />}

        <HelpBlock>{touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
        </HelpBlock>
      </InputGroup>
    </FormGroup>
  );
}

export { FieldInput };
