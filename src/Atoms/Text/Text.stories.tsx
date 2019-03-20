import React from 'react';

import { storiesOf } from '@storybook/react';
import Text from '.';

// prettier-ignore
storiesOf('Atoms/Text', module)
  .add('basic use', () => <Text.Primary>Hello world!</Text.Primary>)
  .add('as paragraph', () => <Text.Primary as="p">Hello world!</Text.Primary>)
  .add('styled', () => <Text.Primary styled>Hello world!</Text.Primary>)
  .add('styled as paragraph', () => <Text.Primary styled as="p">Hello world!</Text.Primary>)
