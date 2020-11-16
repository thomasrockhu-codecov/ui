import { action } from '@storybook/addon-actions';
import { isSameWeek } from 'date-fns';
import React from 'react';
import DatePicker from '.';
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

export const DisabledInput = () => {
  return (
    <DatePicker id="disabled-input" variant={RANGE_DATE_PICKER} label="Disabled input" disabled />
  );
};
