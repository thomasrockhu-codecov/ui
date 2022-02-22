import React from 'react';
import MD from 'react-markdown';
import { action } from '@storybook/addon-actions';

import docs from './IconButton.md';
import { Typography, Icon, Button } from '../../../..';

export default {
  title: 'Molecules / Button / Button.Icon',
  parameters: {
    component: Button,
  },
};

export const documentation = () => (
  <Typography type="primary">
    <MD>{docs}</MD>
  </Typography>
);

export const defaultUsage = () => (
  <Button.Icon onClick={action('clicked')}>
    <Icon.Attachment16 />
  </Button.Icon>
);

defaultUsage.story = {
  name: 'Default usage',
};
