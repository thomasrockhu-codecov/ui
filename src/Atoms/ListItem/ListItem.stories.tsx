import React from 'react';
import { ListItem, Typography } from '../..';

export default {
  title: 'Atoms / ListItem',
  parameters: {
    component: ListItem,
  },
};

export const basicListItem = () => (
  <ul>
    <ListItem>
      <Typography>List item</Typography>
    </ListItem>
  </ul>
);

basicListItem.story = {
  name: 'Basic list item',
};
