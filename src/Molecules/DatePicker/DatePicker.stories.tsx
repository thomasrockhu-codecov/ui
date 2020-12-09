import React from 'react';
import { action } from '@storybook/addon-actions';
import DatePicker from './DatePicker';

export default {
  title: 'Molecules / DatePicker',
  parameters: {
    component: DatePicker,
  },
};

export const All = () => {
  return (
    <>
      <DatePicker
        id="regular-datepicker"
        label="Regular"
        onChange={action('onChange regular')}
        variant="REGULAR"
      />
      <DatePicker
        id="range-datepicker"
        label="Range"
        onChange={action('onChange range')}
        variant="RANGE"
      />
      <DatePicker
        id="double-datepicker"
        labelFrom="Date from"
        labelTo="Date to"
        onChange={action('onChange double')}
        variant="DOUBLE"
      />
    </>
  );
};
