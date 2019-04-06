import React from 'react';
import { storiesOf } from '@storybook/react';

import { Development } from '../..';
import { Display } from '../../common/Display';

storiesOf('Atoms | Development', module)
  .add('Primary', () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development.Primary value={5.4} /> },
        { title: 'Zero value', component: <Development.Primary value={0} /> },
        { title: 'Negative value', component: <Development.Primary value={-2.1} /> },
      ]}
    />
  ))
  .add('Secondary', () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development.Secondary value={5.4} /> },
        { title: 'Zero value', component: <Development.Secondary value={0} /> },
        { title: 'Negative value', component: <Development.Secondary value={-2.1} /> },
      ]}
    />
  ))
  .add('Tertiary', () => (
    <Display
      items={[
        { title: 'Positive value', component: <Development.Tertiary value={5.4} /> },
        { title: 'Zero value', component: <Development.Tertiary value={0} /> },
        { title: 'Negative value', component: <Development.Tertiary value={-2.1} /> },
      ]}
    />
  ));
