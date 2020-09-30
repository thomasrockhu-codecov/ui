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
  const DefaultBadge = () => <Badge>4</Badge>;
  const DefaultEmptyBadge = () => <Badge />;
  const CustomBadgeBackgroundGreen = () => (
    <Badge backgroundColor={(t) => t.color.positive}>5</Badge>
  );
  const CustomBadgeBackgroundRed = () => <Badge backgroundColor={(t) => t.color.negative}>7</Badge>;
  const CustomBadgeBackgroundGray = () => (
    <Badge backgroundColor={(t) => t.color.disabledText}>6</Badge>
  );
  const CustomBadgeColorYellow = () => <Badge color={(t) => t.color.warning}>2</Badge>;
  const DefaultBadgeLargeNumber = () => <Badge>99</Badge>;
  return (
    <div>
      <Typography type="title3">Badge component</Typography>
      <DefaultBadge />
      <DefaultEmptyBadge />
      <CustomBadgeBackgroundGreen />
      <CustomBadgeBackgroundRed />
      <CustomBadgeBackgroundGray />
      <CustomBadgeColorYellow />
      <DefaultBadgeLargeNumber />
    </div>
  );
};

Badges.story = {
  name: 'Default',
};
