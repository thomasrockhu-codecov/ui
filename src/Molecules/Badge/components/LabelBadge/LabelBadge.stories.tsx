import React from 'react';
import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / LabelBadge',
  parameters: {
    component: Badge.LabelBadge,
  },
};

export const Showcase = () => {
  return (
    <Display
      items={[
        {
          title: 'Primary',
          component: <Badge.LabelBadge>Primary</Badge.LabelBadge>,
        },
        {
          title: 'Primary Bold',
          component: <Badge.LabelBadge weight="bold">Primary Bold</Badge.LabelBadge>,
        },
        {
          title: 'Secondary',
          component: <Badge.LabelBadge type="secondary">Secondary</Badge.LabelBadge>,
        },
        {
          title: 'Secondary Bold',
          component: (
            <Badge.LabelBadge type="secondary" weight="bold">
              Secondary Bold
            </Badge.LabelBadge>
          ),
        },
        {
          title: 'Custom badge color',
          component: (
            <Badge.LabelBadge badgeColor={(t) => t.color.badgeBackgroundNegative}>
              Custom badge color
            </Badge.LabelBadge>
          ),
        },
        {
          title: 'Custom text color',
          component: (
            <Badge.LabelBadge color={(t) => t.color.warning}>Custom text color</Badge.LabelBadge>
          ),
        },
      ]}
    />
  );
};
Showcase.story = {
  name: 'Showcase',
};
