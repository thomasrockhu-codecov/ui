import React from 'react';
import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / LabelBadge',
};

export const LabelBadge = () => {
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
            <Badge.LabelBadge color={(t) => t.color.text} badgeColor={(t) => t.color.menuAccent4}>
              Custom badge color
            </Badge.LabelBadge>
          ),
        },
        {
          title: 'Custom text color',
          component: (
            <Badge.LabelBadge
              color={(t) => t.color.bulbForeground}
              badgeColor={(t) => t.color.bulbBackground}
            >
              Custom text color
            </Badge.LabelBadge>
          ),
        },
      ]}
    />
  );
};
LabelBadge.story = {
  name: 'Label Badge',
};
