import React from 'react';
import { storiesOf } from '@storybook/react';

import { FeedbackBanner } from '../../index';
import { Display } from '../../common/Display/index';

storiesOf('Molecules | FeedbackBanner', module)
  .add('Default usage', () => (
    <FeedbackBanner title="Feedback banner">
      Feedback banner should only be used within modules to display information that needs
      attention. Content is flexible it can contain links and plain text.
    </FeedbackBanner>
  ))
  .add('Displaying title', () => (
    <Display
      items={[
        {
          title: 'With title',
          component: (
            <FeedbackBanner title="This is a title">This message has a title</FeedbackBanner>
          ),
        },
        {
          title: 'Without title',
          component: <FeedbackBanner>This message does not have a title</FeedbackBanner>,
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
            <FeedbackBanner title="Info" variant="info">
              This is an information message
            </FeedbackBanner>
          ),
        },
        {
          title: 'error',
          component: (
            <FeedbackBanner title="Error" variant="error">
              This is an error message
            </FeedbackBanner>
          ),
        },
        {
          title: 'warning',
          component: (
            <FeedbackBanner title="Warning" variant="warning">
              This is a warning message
            </FeedbackBanner>
          ),
        },
        {
          title: 'success',
          component: (
            <FeedbackBanner title="Success" variant="success">
              This is a success message
            </FeedbackBanner>
          ),
        },
      ]}
    />
  ))
  .add('Background color', () => (
    <Display
      items={[
        {
          title: 'default gray',
          component: (
            <FeedbackBanner title="Gray background" variant="info" backgroundColor="gray">
              If supplied with gray or if left undefined
            </FeedbackBanner>
          ),
        },
        {
          title: 'white',
          component: (
            <FeedbackBanner title="White background" variant="info" backgroundColor="white">
              If supplied with white
            </FeedbackBanner>
          ),
        },
      ]}
    />
  ))
  .add('Complex children', () => (
    <FeedbackBanner title="Warning, complex child" variant="warning">
      <div>
        <div>The message can also be stuctured as a more complex item than just a string</div>
        <div>
          For example, you can provide a <a href="/">link to somewhere</a> if you want to
        </div>
      </div>
    </FeedbackBanner>
  ));
