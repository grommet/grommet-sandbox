import React, { Component } from 'react';
import { Box, Select, Text } from 'grommet';
import { Amex, Mastercard, Visa } from 'grommet-icons';
import SandboxComponent from './SandboxComponent';

const creditCardOptions = [
  {
    type: 'visa', number: '4455', expires: '10/19', name: 'Paul Spencer',
  },
  {
    type: 'mastercard', number: '0143', expires: '08/20', name: 'Paul T Spencer David Aguela',
  },
  {
    type: 'amex', number: '8563', expires: '01/17', name: 'Paul S',
  },
];

const overflowStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

function getCreditCardIcon(type) {
  let icon;
  if (type === 'amex') {
    icon = <Amex color='plain' />;
  } else if (type === 'mastercard') {
    icon = <Mastercard color='plain' />;
  } else if (type === 'visa') {
    icon = <Visa color='plain' />;
  }
  return icon;
}

function renderCreditCardValue(creditCard) {
  return (
    <Box align='center' direction='row' pad='small'>
      {getCreditCardIcon(creditCard.type)}
      <Text margin={{ left: 'xsmall' }}>
        &#9679;&#9679;&#9679;&#9679;
      </Text>
      <Text margin={{ horizontal: 'xsmall' }}>
        <strong>{creditCard.number}</strong>
      </Text>
      <Text margin='none' color='light-6'>({creditCard.expires})</Text>
      <Text margin={{ horizontal: 'xsmall' }} style={overflowStyle}>
        {creditCard.name}
      </Text>
    </Box>
  );
}

function renderCreditCardOption(creditCardOption) {
  if (!creditCardOption) {
    return <Box align='start' pad='small'>None</Box>;
  }
  return (
    <Box
      align='center'
      direction='row'
      pad='small'
    >
      <Box
        a11yTitle={`${creditCardOption.type}, number: ${creditCardOption.number}`}
        direction='row'
        style={{ minWidth: '180px' }}
      >
        {getCreditCardIcon(creditCardOption.type)}
        <Text margin={{ left: 'xsmall' }}>
          &#9679;&#9679;&#9679;&#9679;
        </Text>
        <Text margin={{ horizontal: 'xsmall' }}>
          <strong>{creditCardOption.number}</strong>
        </Text>
        <Text margin='none' color='light-6'>({creditCardOption.expires})</Text>
      </Box>
      <Text margin={{ horizontal: 'xsmall' }}>
        {creditCardOption.name}
      </Text>
    </Box>
  );
}

export default class extends Component {
  state = { creditCard: undefined }

  render() {
    const { creditCard } = this.state;
    return (
      <SandboxComponent>
        <Select
          a11yTitle='Open Credit Card Select'
          activeOptionIndex={
            creditCard ? creditCardOptions.indexOf(creditCard) + 1 : undefined
          }
          background='white'
          placeholder='Select Credit Card'
          options={[undefined].concat(creditCardOptions)}
          value={creditCard ? renderCreditCardValue(creditCard) : undefined}
          onChange={({ option }) => this.setState({ creditCard: option })}
        >
          {option => renderCreditCardOption(option)}
        </Select>
      </SandboxComponent>
    );
  }
}
