import React from 'react';
import MD from 'react-markdown';
import docs from './Badge.md';

import { Button, Typography } from '../..';

export default {
  title: 'Molecules / Badge',
  parameters: {
    component: Button,
  },
};

export const documentation = () => (
  <Typography type="primary">
    <MD>{docs}</MD>
  </Typography>
);
