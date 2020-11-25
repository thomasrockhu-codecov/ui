import { action } from '@storybook/addon-actions';
import React from 'react';
import { DoubleDatePicker } from './DoubleDatePicker';

export default {
  title: 'Molecules / DatePicker / Double DatePicker',
  parameters: {
    component: DoubleDatePicker,
  },
};

export const Default = () => (
  <DoubleDatePicker id="input-id" label="Label" onChange={action('Range date')} />
);
