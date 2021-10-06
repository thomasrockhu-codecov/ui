import React from 'react';
import ListItem from '../ListItem';
import { List, Typography } from '../..';

export default {
  title: 'Atoms / List',
  parameters: {
    component: List,
  },
};

export const basicUnorderedList = () => (
  <List>
    <ListItem>
      <Typography>List item</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item</Typography>
    </ListItem>
  </List>
);

basicUnorderedList.story = {
  name: 'Basic unordered list',
};

export const basicOrderedList = () => (
  <List as="ol">
    <ListItem>
      <Typography>List item 1</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item 2</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item 3</Typography>
    </ListItem>
  </List>
);

basicOrderedList.story = {
  name: 'Basic ordered list',
};

export const SeparatedList = () => (
  <List separated>
    <ListItem>
      <Typography>List item 1</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item 2</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item 3</Typography>
    </ListItem>
  </List>
);

SeparatedList.story = {
  name: 'With separators between each li',
};
