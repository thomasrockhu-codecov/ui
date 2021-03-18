import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import 'jest-styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styleSheetSerializer } from 'jest-styled-components/serializer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { addSerializer } from 'jest-specific-snapshot';

addSerializer(styleSheetSerializer);

// Workaround for https://github.com/facebook/react/issues/11565#issuecomment-3688771492
// @ts-ignore
ReactDOM.createPortal = (node) => React.createElement('portal-dummy', null, node);

jest.mock('framer-motion', () => {
  const React = require('react'); // eslint-disable-line global-require,no-shadow
  const Dummy = (type = React.Fragment) => ({ children }) =>
    React.createElement(type, {}, ...(Array.isArray(children) ? children : [children]));

  return {
    motion: {
      span: Dummy('span'),
      div: Dummy('div'),
      section: Dummy('section'),
    },
    useDragControls: () => ({}),
    AnimatePresence: Dummy(),
  };
});

Math.random = () => 0.421;

/* eslint-disable */
// @ts-ignore
global.IntersectionObserver = class IntersectionObserver {
  observe() {
    return null;
  }

  unobserve() {
    return null;
  }

  disconnect() {
    return null;
  }
};
/* eslint-enable */

initStoryshots({
  test: multiSnapshotWithOptions({}),
  storyNameRegex: /^(?!(Documentation|Experimental)).*$/,
});
