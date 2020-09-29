import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Badge } from './Badge';
import docs from './Badge.mdx';

export default {
  title: 'Atoms | Badge',
  decorators: [withKnobs],
  parameters: {
    component: Badge,
    ...docs.parameters,
  },
};

export const badgeDefault = () => <Badge size={4}>4</Badge>;
