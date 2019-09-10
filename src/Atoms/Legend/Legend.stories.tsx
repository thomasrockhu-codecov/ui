import React from 'react';
import { storiesOf } from '@storybook/react';
import { Legend, Typography } from '../..';

storiesOf('Atoms | Legend', module)
  .add('Docs', () => <p>The Legend component defines a caption for the Fieldset component.</p>)
  .add('Default', () => <Legend>Caption text</Legend>)
  .add('With custom element', () => (
    <Legend>
      <Typography type="primary">Caption text</Typography>
    </Legend>
  ));
