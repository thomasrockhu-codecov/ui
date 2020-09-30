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

export const BadgeDefault = () => {
  const BadgeDefaultExample = () => <Badge>4</Badge>;
  const NoChildrenBadge = () => <Badge></Badge>;
  return (
    <div>
      <Typography type="title3">Badge component</Typography>
      <BadgeDefaultExample />
      <NoChildrenBadge />
    </div>
  );
};

BadgeDefault.story = {
  name: 'Default',
};
