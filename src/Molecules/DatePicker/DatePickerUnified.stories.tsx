import React from 'react';
import { action } from '@storybook/addon-actions';
import DatePicker from './DatePicker';

export default {
  title: 'Molecules / DatePicker / Unified',
  parameters: {
    component: DatePicker,
  },
};

export const Single = () => {
  return (
    <DatePicker id="input-id" label="Default" onChange={action('onChange')} variant="REGULAR" />
  );
};

export const Range = () => {
  return <DatePicker id="input-id" label="Default" onChange={action('onChange')} variant="RANGE" />;
};

export const Double = () => {
  return (
    <DatePicker id="input-id" label="Default" onChange={action('onChange')} variant="DOUBLE" />
  );
};
