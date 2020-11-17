import { action } from '@storybook/addon-actions';
import { add, isSameWeek } from 'date-fns';
import React, { useState } from 'react';
import DatePicker from '.';
import { Button, Flexbox } from '../..';
import { RANGE_DATE_PICKER } from './shared/constants';

export default {
  title: 'Molecules / DatePicker / DatePicker with range',
  parameters: {
    component: DatePicker,
  },
};

const dateNow = new Date();

export const Default = () => (
  <DatePicker
    id="input-id"
    variant={RANGE_DATE_PICKER}
    label="Label"
    onChange={action('Range date')}
  />
);

export const SameWeekDisabled = () => {
  return (
    <DatePicker
      id="disable-dates-input"
      variant={RANGE_DATE_PICKER}
      label="Disabled dates on same week"
      disableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

export const SameWeekEnabled = () => {
  return (
    <DatePicker
      id="enable-dates-input"
      variant={RANGE_DATE_PICKER}
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
      <DatePicker
        id="controlled"
        variant={RANGE_DATE_PICKER}
        label="Controlled"
        selectedDate={startDate}
        selectedEndDate={endDate}
        onChange={(selectedDate, selectedEndDate) => {
          setStartDate(selectedDate);
          if (selectedEndDate) setEndDate(selectedEndDate);
          action('onChange');
        }}
      />
    </>
  );
};

export const DisabledInput = () => {
  return (
    <DatePicker id="disabled-input" variant={RANGE_DATE_PICKER} label="Disabled input" disabled />
  );
};
