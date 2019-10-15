import React from 'react';
import { ListItem } from '../..';

export default {
  title: 'Atoms | ListItem',
};

export const basicListItem = () => (
  <ul>
    <ListItem>List item</ListItem>
  </ul>
);

basicListItem.story = {
  name: 'Basic list item',
};
