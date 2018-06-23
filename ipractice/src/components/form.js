import React, { Component } from 'react';
import {FormGroup, Button, ControlLabel, FormControl, HelpBlock, Checkbox, Radio} from 'react-bootstrap';

class FormExample extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default FormExample;
