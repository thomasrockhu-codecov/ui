import React from 'react';

import { InfoBar } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules | InfoBar',
  parameters: {
    component: InfoBar,
  },
};

export const defaultUsage = () => (
  <InfoBar>
    InfoBar should be used on top of the pages to show Marketing or Customer Support communication
    messages. Content of the InfoBar is just rendered <code>children</code>
  </InfoBar>
);

defaultUsage.story = {
  name: 'Default usage',
};

export const onCloseProp = () => (
  <Display
    items={[
      {
        title: 'Without onClose (default)',
        component: <InfoBar>Without onClose prop InfoBar cannot be dismissed</InfoBar>,
      },
      {
        title: 'With onClose (alert("close"))',
        component: (
          <InfoBar onClose={() => alert('close')}>
            With onClose prop InfoBar can be dismissed, but ParentComponent is in charge to react
            and actually hide the InfoBar.
          </InfoBar>
        ),
      },
    ]}
  />
);

onCloseProp.story = {
  name: 'onClose prop demo',
};

export const differentVariants = () => (
  <Display
    items={[
      {
        title: 'default',
        component: (
          <InfoBar>
            We’re currently working on the new main menu. Links marked with arrow icon will redirect
            you to the previous website experience. <a href="#nonce">Read more</a>
          </InfoBar>
        ),
      },
      {
        title: 'general',
        component: (
          <InfoBar variant="general">
            We’re currently working on the new main menu. Links marked with arrow icon will redirect
            you to the previous website experience. <a href="#nonce">Read more</a>
          </InfoBar>
        ),
      },
      {
        title: 'warning',
        component: (
          <InfoBar variant="warning">
            We’re currently working on the new main menu. Links marked with arrow icon will redirect
            you to the previous website experience. <a href="#nonce">Read more</a>
          </InfoBar>
        ),
      },
      {
        title: 'error',
        component: (
          <InfoBar variant="error">
            The US market is currently down, we are fixing it right now. It will soon be back and
            running. <a href="#nonce">Read more</a>
          </InfoBar>
        ),
      },
      {
        title: 'success',
        component: (
          <InfoBar variant="success">
            We have fixed the US market issue. It is now back to service.{' '}
            <a href="#nonce">Read more</a>
          </InfoBar>
        ),
      },
    ]}
  />
);

differentVariants.story = {
  name: 'Different variants',
};
