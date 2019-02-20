import React, { Component } from 'react';
import { MaskedInput } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  state = { text: '', phone: '' };

  render() {
    const { text, phone } = this.state;
    return (
      <SandboxComponent>
        <MaskedInput
          mask={[
            {
              length: [1, 2],
              options: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
              ],
              regexp: /^1[1-2]$|^[0-9]$/,
              placeholder: 'hh',
            },
            { fixed: ':' },
            {
              length: 2,
              options: ['00', '15', '30', '45'],
              regexp: /^[0-5][0-9]$|^[0-9]$/,
              placeholder: 'mm',
            },
            { fixed: ' ' },
            {
              length: 2,
              options: ['am', 'pm'],
              regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
              placeholder: 'ap',
            },
          ]}
          value={text}
          onChange={event => this.setState({ text: event.target.value })}
        />
        <br />
        <MaskedInput
          mask={[
            { fixed: '(' },
            {
              length: 3,
              regexp: /^[0-9]{1,3}$/,
              placeholder: 'xxx',
            },
            { fixed: ')' },
            { fixed: ' ' },
            {
              length: 3,
              regexp: /^[0-9]{1,3}$/,
              placeholder: 'xxx',
            },
            { fixed: '-' },
            {
              length: 4,
              regexp: /^[0-9]{1,4}$/,
              placeholder: 'xxxx',
            },
          ]}
          value={phone}
          onChange={event => this.setState({ phone: event.target.value })}
        />
      </SandboxComponent>
    );
  }
}
