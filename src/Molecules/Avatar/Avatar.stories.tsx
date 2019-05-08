import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '../..';

storiesOf('Molecules | Avatar', module)
  .add('Basic usage', () => <Avatar>ASK</Avatar>)
  .add('With element as children', () => (
    <Avatar>
      <abbr title="Investeringssparkonto">ISK</abbr>
    </Avatar>
  ));
