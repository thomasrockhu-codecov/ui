import React from 'react';
import { action } from '@storybook/addon-actions';

import { Pill } from './Pill';

export default {
  title: 'Atoms | Pill',

  parameters: {
    component: Pill,
  },
};

const onRemoveClickAction = action('Pill onRemoveClickAction');
const onValueClickAction = action('PillonCompareWithClick onValueClickAction');

export const basicPill = () => (
  <Pill onRemoveClick={onRemoveClickAction} onValueClick={onValueClickAction}>
    1234
  </Pill>
);

basicPill.story = {
  name: 'Basic Pill',
};

export const pillWithBar = () => <Pill barColor={t => t.color.pill8}>123</Pill>;

pillWithBar.story = {
  name: 'Pill with colored bar',
};
