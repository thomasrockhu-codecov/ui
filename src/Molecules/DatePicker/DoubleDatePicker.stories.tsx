import { action } from '@storybook/addon-actions';
import React from 'react';
import DatePicker from '.';
import { DOUBLE_DATE_PICKER } from './shared/constants';

export default {
  title: 'Molecules / DatePicker / Double DatePicker',
  parameters: {
    component: DatePicker,
  },
};

export const Default = () => (
  <DatePicker
    id="input-id"
    variant={DOUBLE_DATE_PICKER}
    label="Label"
    onChange={action('Range date')}
  />
);
