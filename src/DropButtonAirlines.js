import React, { Component } from 'react';
import { Anchor, Box, Button, DropButton, Heading, Text } from 'grommet';
import { FormAdd, FormClose } from 'grommet-icons';
import SandboxComponent from './SandboxComponent';
import MultiSelect from './MultiSelect';

const airlines = [
  'Aegean Airlines',
  'Aer Lingus',
  'Aeroflot',
  'Aerolineas Argentinas',
  'Aeromexico',
  'Air Canada',
  'Air China',
  'Air Europa',
  'Air France',
  'Air India',
  'Air India Express',
  'Air New Zealand',
  'Air Serbia',
  'Air Tahiti Nui',
  'Air Transat',
  'Air Vanuatu',
  'AirAsia',
  'AirAsia X',
  'airberlin',
  'Alaska Airlines',
  'Alitalia',
  'Allegiant',
  'American Airlines',
  'ANA',
  'Asiana',
  'AtlasGlobal',
  'Austrian',
  'Avianca',
  'Azul',
  'Bangkok Airways',
  'British Airways',
  'Brussels Airlines',
  'Cathay Pacific',
  'CEBU Pacific Air',
  'China Airlines',
  'China Eastern',
  'China Southern',
  'Condor',
  'Copa Airlines',
  'Czech Airlines',
  'Delta',
  'Dragonair',
  'easyJet',
  'Edelweiss Air',
  'EL AL',
  'Emirates',
  'Ethiopian Airlines',
  'Etihad',
  'Eurowings',
  'EVA Air',
  'Fiji Airways',
  'Finnair',
  'FlyBE',
  'Frontier',
  'Garuda Indonesia',
  'Germanwings',
  'Gol',
  'Gulf Air',
  'Hainan Airlines',
  'Hawaiian Airlines',
  'Iberia',
  'Icelandair',
  'IndiGo Airlines',
  'InterJet',
  'Japan Airlines',
  'Jet Airways',
  'JetBlue',
  'Jetstar',
  'Kenya Airways',
  'KLM',
  'Korean Air',
  'LATAM Brasil',
  'LATAM Chile',
  'Lion Airlines',
  'LOT Polish Airlines',
  'Lufthansa',
  'Malaysia Airlines',
  'Monarch',
  'Nok Air',
  'Norwegian Air Shuttle',
  'Oman Air',
  'OpenSkies',
  'Peach',
  'Philippine Airlines',
  'Porter',
  'Qantas',
  'Qatar Airways',
  'Regional Express',
  'Royal Air Maroc',
  'Royal Brunei',
  'Royal Jordanian',
  'Ryanair',
  'S7 Airlines',
  'SAS',
  'Saudia',
  'Scoot Airlines',
  'Silkair',
  'Singapore Airlines',
  'Skylanes',
  'South African Airways',
  'Southwest',
  'SpiceJet',
  'Spirit',
  'Spring Airlines',
  'Spring Japan',
  'SriLankan Airlines',
  'Sun Country',
  'SWISS',
  'TACA',
  'TAP Portugal',
  'THAI',
  'Thomas Cook Airlines',
  'Thomson',
  'tigerair',
  'tigerair Australia',
  'TUIfly',
  'Turkish Airlines',
  'United',
  'Vanilla Air',
  'Vietnam Airlines',
  'Virgin America',
  'Virgin Atlantic',
  'Virgin Australia',
  'Volaris',
  'Vueling Airlines',
  'WestJet',
  'Wizzair',
  'WOW air',
  'Xiamen Airlines',
];

export default class DropButtonAirlines extends Component {
  state = {
    selected: [],
    open: undefined,
    available: airlines,
  }

  filter = query => (
    this.setState({
      available: this.get(undefined, query),
      open: true,
    })
  );

  close = () => this.setState({ open: undefined, available: this.get() });

  get = (selected = this.state.selected, query) => {
    let all = [...airlines];
    if (query) {
      all = all.filter(airline => airline.toLowerCase().match(query.toLowerCase()));
    }
    if (selected.length) {
      all = all.filter(value => selected.indexOf(value) === -1);
    }
    return all;
  }

  select = (airline) => {
    const newSelected = [...this.state.selected];
    newSelected.push(airline);
    this.setState({
      open: undefined,
      selected: newSelected,
      available: this.get(newSelected),
    });
  }

  remove = (index) => {
    const newSelected = [...this.state.selected];
    newSelected.splice(index, 1);
    this.setState({
      open: undefined,
      selected: newSelected,
      available: this.get(newSelected),
    });
  }

  reset = (event) => {
    event.preventDefault();
    this.setState({
      selected: [],
      available: this.get([]),
    });
  }

  render() {
    const { available, open, selected } = this.state;

    let itemNodes;
    if (selected.length) {
      itemNodes = (
        <Box pad={{ vertical: 'small' }}>
          {selected.map((airline, index) => (
            <Box align='center' key={airline} direction='row' justify='between' pad={{ vertical: 'xsmall' }}>
              <Text margin={{ right: 'small' }}>{airline}</Text>
              <Button
                a11yTitle={`Delete ${airline}`}
                plain={true}
                onClick={() => this.remove(index)}
              >
                <Box align='center'>
                  <FormClose />
                </Box>
              </Button>
            </Box>
          ))}
          <Box align='start' margin={{ vertical: 'small' }}>
            <Anchor href='#' onClick={this.reset}>
              Clear Airlines
            </Anchor>
          </Box>
        </Box>
      );
    }

    return (
      <SandboxComponent>
        <Box basis='small'>
          <DropButton
            a11yTitle='Open Airlines drop'
            open={open}
            onClose={this.close}
            dropContent={
              <MultiSelect
                dropSize='medium'
                category='Airline'
                onSearch={this.filter}
                onClose={this.close}
                items={available}
                onSelect={this.select}
              />
            }
          >
            <Box
              direction='row'
              justify='between'
              align='center'
              gap='small'
              pad={{ vertical: 'xsmall' }}
            >
              <Heading level={4} margin='none'>
                <strong>Airlines</strong>
              </Heading>
              <FormAdd />
            </Box>
          </DropButton>
          {itemNodes}
        </Box>
      </SandboxComponent>
    );
  }
}
