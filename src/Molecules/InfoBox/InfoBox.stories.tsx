import React from 'react';
import { storiesOf } from '@storybook/react';

import { InfoBox } from '../..';
import { Display } from '../../common/Display';

storiesOf('Molecules | InfoBox', module)
  .add('Default usage', () => (
    <InfoBox title="Info box">Use this to display an information box</InfoBox>
  ))
  .add('Displaying title', () => (
    <Display
      items={[
        {
          title: 'With title',
          component: <InfoBox title="This is a title">This message has a title</InfoBox>,
        },
        {
          title: 'Without title',
          component: <InfoBox>This message does not have a title</InfoBox>,
        },
      ]}
    />
  ))
  .add('Different variant', () => (
    <Display
      items={[
        {
          title: 'info',
          component: (
            <InfoBox title="Info" variant="info">
              This is an information message
            </InfoBox>
          ),
        },
        {
          title: 'error',
          component: (
            <InfoBox title="Error" variant="error">
              This is an error message
            </InfoBox>
          ),
        },
        {
          title: 'warning',
          component: (
            <InfoBox title="Warning" variant="warning">
              This is a warning message
            </InfoBox>
          ),
        },
        {
          title: 'success',
          component: (
            <InfoBox title="Success" variant="success">
              This is a success message
            </InfoBox>
          ),
        },
      ]}
    />
  ));
