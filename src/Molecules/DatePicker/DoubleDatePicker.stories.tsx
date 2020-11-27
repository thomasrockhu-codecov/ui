import { action } from '@storybook/addon-actions';
import { add, isSameWeek } from 'date-fns';
import React, { useState } from 'react';
import { Button, Flexbox } from '../..';
import { DoubleDatePicker } from './DoubleDatePicker';

export default {
  title: 'Molecules / DatePicker / Double DatePicker',
  parameters: {
    component: DoubleDatePicker,
  },
};

const dateNow = new Date();

export const Default = () => (
  <DoubleDatePicker id="input-id" label="Label" onChange={action('Range date')} />
);

export const SameWeekDisabled = () => {
  return (
    <DoubleDatePicker
      id="disable-dates-input"
      label="Disabled dates on same week"
      disableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

export const SameWeekEnabled = () => {
  return (
    <DoubleDatePicker
      id="enable-dates-input"
      label="Only enabled dates in same week"
      enableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
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
      <DoubleDatePicker
        id="controlled"
        label="Controlled"
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        onChange={(selectedStartDate, selectedEndDate) => {
          if (selectedStartDate) setStartDate(selectedStartDate);
          if (selectedEndDate) setEndDate(selectedEndDate);
          action('onChange');
        }}
      />
    </>
  );
};

export const DisabledInput = () => {
  return <DoubleDatePicker id="disabled-input" label="Disabled input" disabled />;
};

export const DisallowSingleDayRange = () => (
  <DoubleDatePicker
    id="input-id"
    label="Label"
    onChange={action('Range date')}
    disallowSingleDayRange
  />
);
