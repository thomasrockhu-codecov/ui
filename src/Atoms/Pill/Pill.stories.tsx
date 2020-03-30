import React from 'react';

import { Pill } from './Pill';

export default {
  title: 'Atoms | Pill',

  parameters: {
    component: Pill,
  },
};

export const basicPill = () => <Pill value="1234" />;

basicPill.story = {
  name: 'Basic Pill',
};

export const pillWithBar = () => <Pill value="123" barColor={t => t.color.pill8} />;

pillWithBar.story = {
  name: 'Pill with colored bar',
};
