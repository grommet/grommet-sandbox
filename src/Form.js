import React, { Component } from 'react';
import { Box, Button, CheckBox, FormField, RadioButton, RangeInput, Select,
  TextArea, TextInput } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class Form extends Component {
  state = {
    textInput: '',
    textArea: '',
    side: '',
    size: '',
    checkBox: false,
    position: '',
    rangeInput: 0,
  }

  render() {
    const { checkBox, position, rangeInput, side, size, textArea,
      textInput } = this.state;
    const help = ((textArea === 'help' || textInput === 'help') ?
      'here\'s how you do it' : undefined);
    const error = ((textInput === 'error' || textArea === 'error')
      ? 'something is not right' : undefined);
    let border;
    if (position === 'none') {
      border = false;
    } else if (position) {
      border = { position, side: (side || 'bottom'), size };
    }
    const fieldProps = { help, error, border };

    return (
      <SandboxComponent pad='none'>
        <Box>
          <FormField label='TextInput' {...fieldProps}>
            <TextInput
              value={textInput}
              onInput={event => this.setState({ textInput: event.target.value })}
            />
          </FormField>
          <FormField label='Side' {...fieldProps}>
            <Select
              options={['all', 'bottom', 'left', 'vertical', 'horizontal']}
              value={side}
              onChange={event => this.setState({ side: event.option })}
            />
          </FormField>
          <FormField label='Size' {...fieldProps}>
            <Select
              options={['', 'small', 'medium', 'large']}
              value={size}
              onChange={event => this.setState({ size: event.option })}
            />
          </FormField>
          <FormField label='TextArea' {...fieldProps}>
            <TextArea
              value={textArea}
              onInput={event => this.setState({ textArea: event.target.value })}
            />
          </FormField>
          <FormField {...fieldProps}>
            <Box pad='small'>
              <CheckBox
                label='CheckBox'
                checked={checkBox}
                onChange={event => this.setState({ checkBox: event.target.checked })}
              />
            </Box>
          </FormField>
          <FormField label='Position' {...fieldProps}>
            <Box pad='small' gap='xsmall'>
              {['inner', 'outer', 'none'].map(id => (
                <RadioButton
                  key={id}
                  name='radio'
                  id={id}
                  label={id}
                  checked={id === position}
                  onChange={() => this.setState({ position: id })}
                />
              ))}
            </Box>
          </FormField>
          <FormField label='RangeInput' {...fieldProps}>
            <Box pad='small'>
              <RangeInput
                plain={true}
                focusIndicator={false}
                value={rangeInput}
                onChange={event => this.setState({ rangeInput: event.target.value })}
              />
            </Box>
          </FormField>
          <Box margin={{ top: 'medium' }}>
            <Button label='Submit' primary={true} onClick={() => {}} />
          </Box>
        </Box>
      </SandboxComponent>
    );
  }
}
