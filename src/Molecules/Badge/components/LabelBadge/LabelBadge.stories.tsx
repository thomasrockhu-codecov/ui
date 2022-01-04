import React from 'react';
import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / Label',
  parameters: {
    component: Badge.Label,
  },
};

export const Showcase = () => {
  return (
    <Display
      items={[
        {
          title: 'Primary',
          component: <Badge.Label>Primary</Badge.Label>,
        },
        {
          title: 'Primary Bold',
          component: <Badge.Label weight="bold">Primary Bold</Badge.Label>,
        },
        {
          title: 'Secondary',
          component: <Badge.Label type="secondary">Secondary</Badge.Label>,
        },
        {
          title: 'Secondary Bold',
          component: (
            <Badge.Label type="secondary" weight="bold">
              Secondary Bold
            </Badge.Label>
          ),
        },
        {
          title: 'Custom badge color',
          component: (
            <Badge.Label badgeColor={(t) => t.color.badgeBackgroundNegative}>
              Custom badge color
            </Badge.Label>
          ),
        },
        {
          title: 'Custom text color',
          component: <Badge.Label color={(t) => t.color.warning}>Custom text color</Badge.Label>,
        },
      ]}
    />
  );
};
Showcase.story = {
  name: 'Showcase',
};
