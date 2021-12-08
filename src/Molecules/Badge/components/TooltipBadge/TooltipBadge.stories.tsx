import React from 'react';
import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / TooltipBadge',
};

export const defaultUse = () => (
  <Display
    items={[
      {
        title: 'Small Tooltip',
        component: <Badge.TooltipBadge badgeSize="s" />,
      },
      {
        title: 'Large Tooltip',
        component: <Badge.TooltipBadge badgeSize="l" />,
      },
    ]}
  />
);
defaultUse.story = {
  name: 'Default use',
};
