import { action } from '@storybook/addon-actions';
import React from 'react';
import DatePicker from '.';
import { RANGE_DATE_PICKER } from './shared/constants';

export default {
  title: 'Molecules / DatePicker with range',
  parameters: {
    component: DatePicker,
  },
};

export const Default = () => (
  <DatePicker
    variant={RANGE_DATE_PICKER}
    id="input-id"
    label="Label"
    onChange={action('onChange')}
  />
);
