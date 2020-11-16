import React from 'react';
import { action } from '@storybook/addon-actions';
import { isSameWeek } from 'date-fns';
import { DatePicker } from './DatePicker';

export default {
  title: 'Molecules / DatePicker',
  parameters: {
    component: DatePicker,
  },
};

const dateNow = new Date();

export const Default = () => {
  return <DatePicker id="input-id" label="Label" onChange={action('onChange')} />;
};

export const SameWeekDisabled = () => {
  return (
    <DatePicker
      id="disable-dates-input"
      label="Label"
      disableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

export const SameWeekEnabled = () => {
  return (
    <DatePicker
      id="enable-dates-input"
      label="Label"
      enableDate={(date) => isSameWeek(dateNow, date)}
      onChange={action('onChange')}
    />
  );
};

export const DisabledInput = () => {
  return <DatePicker id="disabled-input" label="Label" disabled />;
};
