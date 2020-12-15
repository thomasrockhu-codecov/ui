import React from 'react';
import { action } from '@storybook/addon-actions';
import BottomWizardBar from './BottomWizardBar';

export default {
  title: 'Molecules / Bottom Wizard Bar',
  parameters: {
    component: BottomWizardBar,
  },
};

export const Default = () => (
  <BottomWizardBar
    isLastStep={false}
    isLoading={false}
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
    cancelButtonLink="https://nordnet.se/cancel"
    previousButtonLink="https://nordnet.se/previous"
    submitButtonLink="https://nordnet.se/submit"
    nextButtonLink="https://nordnet.se/next"
  />
);

export const WebviewEmbedded = () => (
  <BottomWizardBar
    isLastStep={false}
    isLoading={false}
    isEmbedded
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
  />
);

export const WebviewEmbeddedLastStepAndLoading = () => (
  <BottomWizardBar
    isLastStep
    isLoading
    isEmbedded
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
  />
);

export const PreviousButtonDisabled = () => (
  <BottomWizardBar
    isLastStep={false}
    isLoading={false}
    isEmbedded
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
    hidePreviousButtonOnMobile
  />
);

export const LastStepAndLoading = () => (
  <BottomWizardBar
    isLastStep
    isLoading
    onCancel={action('cancel')}
    onNext={action('next')}
    onPrevious={action('previous')}
    onSubmit={action('submit')}
    titleText="Title"
    cancelText="Cancel"
    previousText="Previous"
    nextText="Next"
    submitText="Submit"
  />
);
