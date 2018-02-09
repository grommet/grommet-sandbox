import React, { Component } from 'react';

import { Box, Calendar } from 'grommet';

export default class CalendarSandbox extends Component {
  state = {}

  onSelectSingle = date => this.setState({ date })

  onSelectRange = (selectedDate) => {
    const { date, dates, previousSelectedDate } = this.state;
    if (!dates) {
      if (!date) {
        this.setState({ date: selectedDate });
      } else {
        const priorDate = new Date(date);
        const nextDate = new Date(selectedDate);
        if (priorDate.getTime() < nextDate.getTime()) {
          this.setState({ date: undefined, dates: [[date, selectedDate]] });
        } else if (priorDate.getTime() > nextDate.getTime()) {
          this.setState({ date: undefined, dates: [[selectedDate, date]] });
        }
      }
    } else {
      const priorDates = dates[0].map(d => new Date(d));
      const previousDate = new Date(previousSelectedDate);
      const nextDate = new Date(selectedDate);
      if (nextDate.getTime() < previousDate.getTime()) {
        if (nextDate.getTime() < priorDates[0].getTime()) {
          this.setState({ dates: [[selectedDate, dates[0][1]]] });
        } else if (nextDate.getTime() > priorDates[0].getTime()) {
          this.setState({ dates: [[dates[0][0], selectedDate]] });
        }
      } else if (nextDate.getTime() > previousDate.getTime()) {
        if (nextDate.getTime() > priorDates[1].getTime()) {
          this.setState({ dates: [[dates[0][0], selectedDate]] });
        } else if (nextDate.getTime() < priorDates[1].getTime()) {
          this.setState({ dates: [[selectedDate, dates[0][1]]] });
        }
      }
    }
    this.setState({ previousSelectedDate: selectedDate });
  }

  render() {
    const { date, dates } = this.state;
    return (
      <Box pad='large' align='center'>
        <Calendar
          date={date}
          dates={dates}
          onSelect={this.onSelectRange}
        />
      </Box>
    );
  }
}
