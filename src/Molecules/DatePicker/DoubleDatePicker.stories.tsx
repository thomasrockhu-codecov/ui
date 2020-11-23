import { action } from '@storybook/addon-actions';
import React from 'react';
import { DoubleDatePicker } from './DoubleDatePicker';
import { DOUBLE_DATE_PICKER } from './shared/constants';

export default {
  title: 'Molecules / DatePicker / Double DatePicker',
  parameters: {
    component: DoubleDatePicker,
  },
};

export const Default = () => (
  <DoubleDatePicker
    id="input-id"
    variant={DOUBLE_DATE_PICKER}
    label="Label"
    onChange={action('Range date')}
  />
);
