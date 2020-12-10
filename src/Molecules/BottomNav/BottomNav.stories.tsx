import React from 'react';
import { action } from '@storybook/addon-actions';
import BottomNav from './BottomNav';

export default {
  title: 'Molecules / Bottom Navigation',
  parameters: {
    component: BottomNav,
  },
};

export const Default = () => (
  <BottomNav
    isLastStep={false}
    isLoading={false}
    onCancel={action('cancel')}
    onForward={action('forward')}
    onPrev={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
  />
);

export const WebviewEmbedded = () => (
  <BottomNav
    isLastStep={false}
    isLoading={false}
    isEmbedded
    onCancel={action('cancel')}
    onForward={action('forward')}
    onPrev={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
  />
);

export const PreviousButtonDisabled = () => (
  <BottomNav
    isLastStep={false}
    isLoading={false}
    isEmbedded
    onCancel={action('cancel')}
    onForward={action('forward')}
    onPrev={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
    hidePreviousButton
  />
);
