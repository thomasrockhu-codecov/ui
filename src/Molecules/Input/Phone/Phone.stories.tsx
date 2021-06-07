/* eslint-disable no-console */
import React from 'react';
import { Input } from '../../..';

export default {
  title: 'Molecules / Input / Phone',
  parameters: {
    component: Input.Phone,
  },
};

export const defaultStory = () => (
  <Input.Phone
    name="default-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={console.log}
  />
);

defaultStory.story = {
  name: 'Default',
};

export const fullWidth = () => (
  <Input.Phone
    name="full-width-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={console.log}
    width="100%"
  />
);

fullWidth.story = {
  name: 'Full width',
};

export const withHelpText = () => (
  <Input.Phone
    name="with-help-text-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={console.log}
    extraInfo="Please fill in your phone number"
  />
);

withHelpText.story = {
  name: 'With help text',
};

export const hasError = () => (
  <Input.Phone
    name="has-error-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={console.log}
    error="Incorrect phone number"
  />
);

hasError.story = {
  name: 'Has an error',
};

export const hasSuccess = () => (
  <Input.Phone
    name="has-success-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={console.log}
    success
  />
);

hasSuccess.story = {
  name: 'Has success',
};

export const isDisabled = () => (
  <Input.Phone name="disabled-example" label="Phone number" value="123 456 789" disabled />
);

isDisabled.story = {
  name: 'Is disabled',
};
