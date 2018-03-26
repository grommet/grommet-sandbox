import React, { Component } from 'react';
import { Box, Calendar, Drop, Keyboard, TextInput } from 'grommet';
import SandboxComponent from './SandboxComponent';

// Yes, these are for the odd but conventional U.S. way of representing dates.
const MONTHS = ['[2-9]', '0[1-9]', '1[0-2]'];
const DAYS = ['[4-9]', '0[1-9]', '[1-2][0-9]', '3[0-1]'];
const MONTH_REGEXP = new RegExp(MONTHS.map(m => `^${m}$`).join('|'));
const MONTH_DAY_REGEXP =
  new RegExp(DAYS.map(d => MONTHS.map(m => `^${m}/${d}$`).join('|')).join('|'));
const MONTH_DAY_YEAR_REGEXP = new RegExp('^(\\d{1,2})/(\\d{1,2})/(\\d{4})$');

class DateInput extends Component {
  state = { text: '' }

  componentDidUpdate() {
    if (this.focusInput) {
      const element = document.getElementById('date-input');
      element.focus();
    }
  }

  onFocus = () => {
    if (!this.focusInput) {
      this.setState({ active: true });
    } else {
      this.focusInput = false;
    }
  }

  onInput = (event) => {
    const { text } = this.state;
    let { target: { value } } = event;
    let date;
    const match = value.match(MONTH_DAY_YEAR_REGEXP);
    if (match) {
      date = (new Date(match[3], parseInt(match[1], 10) - 1, match[2])).toISOString();
    } else if (value.length > text.length) {
      // never add characters if the user is backspacing
      // add trailing '/' when it looks appropriate
      if (value.match(MONTH_REGEXP)) {
        value = `${value}/`;
      } else if (value.match(MONTH_DAY_REGEXP)) {
        value = `${value}/`;
      }
    }
    this.setState({ text: value, date, active: true });
  }

  onSelect = (isoDate) => {
    const date = new Date(isoDate);
    const text = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    this.setState({ date, text, active: false });
    this.focusInput = true;
  }

  render() {
    const { active, date, text } = this.state;
    return (
      <Box>
        <Keyboard onDown={() => this.setState({ active: true })}>
          <TextInput
            ref={(ref) => { this.ref = ref; }}
            id='date-input'
            placeholder='MM/DD/YYYY'
            value={text}
            onInput={this.onInput}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </Keyboard>
        {active ? (
          <Drop
            target={this.ref}
            align={{ top: 'bottom', left: 'left' }}
            onClose={() => this.setState({ active: false })}
          >
            <Box pad='small'>
              <Calendar size='small' date={date} onSelect={this.onSelect} />
            </Box>
          </Drop>
        ) : null}
      </Box>
    );
  }
}

export default () => (
  <SandboxComponent>
    <DateInput />
  </SandboxComponent>
);
