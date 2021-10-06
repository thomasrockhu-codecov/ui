import React from 'react';
import { VisuallyHidden } from '../..';

export default {
  title: 'Atoms / VisuallyHidden',
  parameters: {
    component: VisuallyHidden,
  },
};
export const visuallyHiddenLabel = () => (
  <>
    There&apos;s text here that&apos;s only displayed for screen readers:
    <VisuallyHidden>I&apos;m only shown for screen readers.</VisuallyHidden>
  </>
);

visuallyHiddenLabel.story = {
  name: 'Visually hidden label',
};
