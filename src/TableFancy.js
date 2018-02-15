import React, { Component } from 'react';

import {
  Box, Button, Table, TableBody, TableCell, TableFooter, TableHeader, TableRow,
  Text,
} from 'grommet';
import { FormUp, FormDown } from 'grommet-icons';

// Always should store amount in cents to avoid precision errors
const DATA = [
  { id: 1, name: 'Eric', email: 'eric@local', size: 'S', amount: 3775 },
  { id: 2, name: 'Chris', email: 'chris@local', size: 'L', amount: 5825 },
  { id: 3, name: 'Alan', email: 'alan@local', size: 'M', amount: 4300 },
  { id: 4, name: 'Tracy', email: 'tracy@local', size: 'M', amount: 4300 },
  { id: 5, name: 'Jet', email: 'jet@local', size: 'M', amount: 4300 },
];

let TOTAL = 0;
DATA.forEach((datum) => { TOTAL += datum.amount; });

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const COLUMNS = [
  {
    property: 'name',
    label: 'Name',
    dataScope: 'row',
    format: datum => <strong>{datum.name}</strong>,
    size: 'xsmall',
  },
  {
    property: 'email',
    label: 'Email',
    size: 'small',
  },
  {
    property: 'size',
    label: 'Sz',
    size: 'xxsmall',
  },
  {
    property: 'amount',
    label: 'Amount',
    align: 'end',
    footer: amountFormatter.format(TOTAL / 100),
    format: datum => amountFormatter.format(datum.amount / 100),
    size: 'xsmall',
  },
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { data: DATA };
  }

  onSort = (property) => {
    const { sortProperty, sortDirection } = this.state;
    if (sortProperty === property) {
      this.setState({
        sortDirection: (sortDirection === 'asc' ? 'desc' : 'asc'),
      });
    } else {
      this.setState({
        sortProperty: property,
        sortDirection: 'asc',
      });
    }
  }

  render() {
    const { over, selected, sortProperty, sortDirection } = this.state;

    let data = DATA;
    if (sortProperty) {
      data = DATA.sort((d1, d2) => {
        if (sortProperty === 'amount') {
          return (sortDirection === 'asc' ?
            (d1[sortProperty] - d2[sortProperty]) :
            (d2[sortProperty] - d1[sortProperty]));
        }
        const v1 = d1[sortProperty].toUpperCase();
        const v2 = d2[sortProperty].toUpperCase();
        if (v1 < v2) {
          return (sortDirection === 'asc' ? -1 : 1);
        }
        if (v1 > v2) {
          return (sortDirection === 'asc' ? 1 : -1);
        }
        return 0;
      });
    }

    const sortIcon = (sortDirection === 'asc' ? <FormDown /> : <FormUp />);

    return (
      <Box pad='large' align='center'>

        <Box flex={false}>
          <Table caption='Fancy Table Header'>
            <TableHeader>
              <TableRow>
                {COLUMNS.map(c => (
                  <TableCell
                    key={c.property}
                    scope='col'
                    plain={true}
                    size={c.size}
                  >
                    <Button
                      fill={true}
                      hoverIndicator={true}
                      onClick={() => this.onSort(c.property)}
                    >
                      <Box
                        direction='row'
                        pad={{ horizontal: 'small', vertical: 'xsmall' }}
                        justify={c.align}
                        border='bottom'
                      >
                        <Text>{c.label}</Text>
                        {sortProperty === c.property ? sortIcon : null}
                      </Box>
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
          </Table>
        </Box>

        <Box flex={false} basis='xsmall' overflow='scroll'>
          <Table caption='Fancy Table'>
            <TableBody>
              {data.map((datum) => {
                let background;
                if (datum.id === selected) {
                  background = 'brand';
                } else if (datum.id === over) {
                  background = 'light-2';
                }
                return (
                  <TableRow key={datum.id}>
                    {COLUMNS.map(c => (
                      <TableCell
                        key={c.property}
                        scope={c.dataScope}
                        plain={true}
                        size={c.size}
                      >
                        <Button
                          fill={true}
                          plain={true}
                          onMouseOver={() => this.setState({ over: datum.id })}
                          onMouseOut={() => this.setState({ over: undefined })}
                          onClick={() => this.setState({
                            selected: (datum.id === selected ? undefined : datum.id),
                          })}
                        >
                          <Box
                            background={background}
                            pad={{ horizontal: 'small', vertical: 'xsmall' }}
                            align={c.align}
                          >
                            <Text>
                              {c.format ? c.format(datum) : datum[c.property]}
                            </Text>
                          </Box>
                        </Button>
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>

        <Box flex={false}>
          <Table caption='Fancy Table Footer'>
            <TableFooter>
              <TableRow>
                {COLUMNS.map(c => (
                  <TableCell
                    key={c.property}
                    scope='col'
                    border='top'
                    align={c.align}
                    size={c.size}
                  >
                    <Text>{c.footer}</Text>
                  </TableCell>
                ))}
              </TableRow>
            </TableFooter>
          </Table>
        </Box>

      </Box>
    );
  }
}
