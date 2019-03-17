import React from 'react';

import { storiesOf } from '@storybook/react';

import { Rect } from './Rect';
// import { Circle } from './Circle';

// prettier-ignore
storiesOf('Atoms/Placeholder', module)
  .add('Rect', () => <Rect height="100vh" width="100%"/>)
