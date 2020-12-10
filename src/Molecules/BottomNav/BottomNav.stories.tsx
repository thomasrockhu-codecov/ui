import React from 'react';
import { action } from '@storybook/addon-actions';
import BottomNav from './BottomNav';

export const bottomNavigation = ({ isLastStep = false, isLoading = false }) => (
  <BottomNav
    isLastStep={isLastStep}
    isLoading={isLoading}
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

bottomNavigation.story = {
  name: 'Bottom Navigation',
};
