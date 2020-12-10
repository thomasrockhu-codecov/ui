import { action } from '@storybook/addon-actions';
import { add, isSameWeek } from 'date-fns';
import React, { useState } from 'react';
import { Button, Flexbox, Typography } from '../../..';
import DatePicker from '../DatePicker';

export default {
  title: 'Molecules / DatePicker / Double DatePicker',
  parameters: {
    component: DatePicker,
  },
};

const dateNow = new Date();

export const Default = () => (
  <>
    <Typography>Observe! Arrow navigation is yet to be implemented</Typography>
    <DatePicker
      id="input-id"
      labelFrom="Label"
      labelTo=""
      onChange={action('Range date')}
      variant="DOUBLE"
    />
  </>
);

export const SameWeekDisabled = () => {
  return (
    <DatePicker
      id="disable-dates-input"
      labelFrom="Disabled dates on same week"
      labelTo=""
      disableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
      variant="DOUBLE"
    />
  );
};

export const SameWeekEnabled = () => {
  return (
    <DatePicker
      id="enable-dates-input"
      labelFrom="Only enabled dates in same week"
      labelTo=""
      enableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
      variant="DOUBLE"
    />
  );
};

export const Controlled = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(add(startDate, { days: 4 }));

  return (
    <>
      <Flexbox container gutter={2}>
        <Flexbox item>
          <Button onClick={() => setStartDate(add(startDate, { days: 1 }))}>Next Date</Button>
        </Flexbox>
        <Flexbox item>
          <Button onClick={() => setEndDate(add(endDate, { days: 1 }))}>Next End Date</Button>
        </Flexbox>
      </Flexbox>
      <DatePicker
        id="controlled"
        labelFrom="Controlled"
        labelTo="Controlled"
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        onChange={(selectedStartDate, selectedEndDate) => {
          if (selectedStartDate) setStartDate(selectedStartDate);
          if (selectedEndDate) setEndDate(selectedEndDate);
          action('onChange');
        }}
        variant="DOUBLE"
      />
    </>
  );
};

export const DisabledInput = () => {
  return (
    <DatePicker
      id="disabled-input"
      labelFrom="Disabled input"
      labelTo=""
      disabled
      variant="DOUBLE"
    />
  );
};

export const DisallowSingleDayRange = () => (
  <DatePicker
    id="input-id"
    labelFrom="Label"
    labelTo=""
    onChange={action('Range date')}
    disallowSingleDayRange
    variant="DOUBLE"
  />
);
