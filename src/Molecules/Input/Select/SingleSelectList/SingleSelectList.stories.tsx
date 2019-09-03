import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { List, ListItem } from './SingleSelectList';
import { Display } from '../../../../common/Display';

storiesOf('Molecules | Input / Select / SingleSelectList', module)
  .add('Item default', () => <ListItem value={0} label="First" />)
  .add('Item selected', () => <ListItem value={0} label="First" selected />)
  .add('Item disabled', () => <ListItem value={0} label="First" disabled />)
  .add('List with different arrow positions', () => (
    <Display
      items={[
        {
          component: (
            <List>
              <ListItem value={-1} label="Default?" />
              <ListItem value={0} label="First" selected />
              <ListItem value={2} label="Second" />
              <ListItem value={3} label="Disabled" disabled />
            </List>
          ),
          title: 'Default (right)',
        },

        {
          component: (
            <List position="left">
              <ListItem value={-1} label="Default?" />
              <ListItem value={0} label="First" selected />
              <ListItem value={2} label="Second" />
              <ListItem value={3} label="Disabled" disabled />
            </List>
          ),
          title: 'Left',
        },
        {
          component: (
            <List position="center">
              <ListItem value={-1} label="Default?" />
              <ListItem value={0} label="First" selected />
              <ListItem value={2} label="Second" />
              <ListItem value={3} label="Disabled" disabled />
            </List>
          ),
          title: 'Center',
        },
      ]}
    />
  ));
