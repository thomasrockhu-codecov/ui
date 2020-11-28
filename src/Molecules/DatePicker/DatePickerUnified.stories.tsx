import React from 'react';
import { action } from '@storybook/addon-actions';
import DatePicker from './DatePicker';

export default {
  title: 'Molecules / DatePicker / Unified',
  parameters: {
    component: DatePicker,
  },
};

export const Regular = () => {
  return (
    <DatePicker
      id="regular-datepicker"
      label="Regular"
      onChange={action('onChange')}
      variant="REGULAR"
    />
  );
};

export const Range = () => {
  return (
    <DatePicker id="range-datepicker" label="Range" onChange={action('onChange')} variant="RANGE" />
  );
};

export const Double = () => {
  return (
    <DatePicker
      id="double-datepicker"
      labelFrom="Date from"
      labelTo="Date to"
      onChange={action('onChange')}
      variant="DOUBLE"
    />
  );
};
