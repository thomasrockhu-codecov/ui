import { action } from '@storybook/addon-actions';
import { isSameWeek } from 'date-fns';
import React from 'react';
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
