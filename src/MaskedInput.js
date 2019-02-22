import React, { Component } from 'react';
import { Box, MaskedInput } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
state = { value: '' };

onChange = (event) => {
  this.setState({ value: event.target.value });
};

render() {
  const { value } = this.state;
  return (
    <SandboxComponent>
      <Box fill={true} align='center' justify='start' pad='large'>
        <Box width='medium'>
          <MaskedInput
            mask={[
                {
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
                  length: 2,
                  regexp: /^[1-12]$|^[1,2]$/,
                  placeholder: 'mm',
                },
                { fixed: '/' },
                {
                  length: 2,
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
                    '13',
                    '14',
                    '15',
                    '16',
                    '17',
                    '18',
                    '19',
                    '20',
                    '21',
                    '22',
                    '23',
                    '24',
                    '25',
                    '26',
                    '27',
                    '28',
                    '29',
                    '30',
                    '31',
                  ],
                  regexp: /^[1-31]$|^[1,2]$/,
                  placeholder: 'dd',
                },
                { fixed: '/' },
                {
                  length: 4,
                  options: [
                    '2000',
                    '1999',
                    '1998',
                    '1997',
                    '1996',
                    '1995',
                    '1994',
                    '1993',
                    '1992',
                    '1991',
                    '1990',
                    '1989',
                    '1988',
                    '1987',
                    '1986',
                    '1985',
                    '1984',
                    '1983',
                    '1982',
                    '1981',
                    '1980',
                    '1979',
                    '1978',
                    '1977',
                    '1976',
                    '1975',
                    '1974',
                    '1973',
                    '1972',
                    '1971',
                    '1970',
                  ],
                  regexp: /[1970-2000]$|^[1,4]$/,
                  placeholder: 'yyyy',
                },
              ]}
            value={value}
            onChange={this.onChange}
          />
        </Box>
      </Box>
    </SandboxComponent>
  );
}
}
