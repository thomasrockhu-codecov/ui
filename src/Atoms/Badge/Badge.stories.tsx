import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Badge } from './Badge';
import docs from './Badge.mdx';
import { Typography } from '../..';

export default {
  title: 'Atoms | Badge',
  decorators: [withKnobs],
  parameters: {
    component: Badge,
    ...docs.parameters,
  },
};

export const Badges = () => {
  return (
    <div>
      <Typography type="title3">Badge component</Typography>
      <h2>Default Badge</h2>
      <Badge>4</Badge>
      <h3>Default empty Badge</h3>
      <Badge />

      <h2>Custom color Badge</h2>
      <Badge backgroundColor={(t) => t.color.positive}>5</Badge>
      <Badge backgroundColor={(t) => t.color.negative}>7</Badge>
      <Badge backgroundColor={(t) => t.color.disabledText}>6</Badge>
      <Badge color={(t) => t.color.warning}>2</Badge>

      <h2>Badge with large number</h2>
      <Badge>99</Badge>
      <Badge>999</Badge>
    </div>
  );
};
