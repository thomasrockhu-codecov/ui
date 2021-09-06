import React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';

import { Flexbox, Input } from '../../..';

const { onBlur, onFocus, onChange } = actions('onBlur', 'onFocus', 'onChange');

export default {
  title: 'Molecules / Input / Phone',
  parameters: {
    component: Input.Phone,
  },
  decorators: [withKnobs],
};

export const defaultStory = () => (
  <Input.Phone
    name="default-example"
    label="Phone number"
    placeholder="123 456 789"
    size={select('Size', { Small: 's', Normal: undefined }, undefined)}
    disabled={boolean('Disabled', false)}
    onChange={onChange}
  />
);

defaultStory.story = {
  name: 'Default',
};

export const prefilledDefaultValues = () => (
  <Input.Phone
    onChange={onChange}
    name="disabled-example"
    label="Phone number"
    defaultValue={{ countryCode: '46', phoneNumber: '123 456 789' }}
  />
);

prefilledDefaultValues.story = {
  name: 'Prefilled default values',
};

export const autoFocus = () => (
  <Input.Phone
    name="default-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    autoFocus
  />
);

autoFocus.story = {
  name: 'Auto focus',
};

export const fullWidth = () => (
  <Input.Phone
    name="full-width-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
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
    onChange={onChange}
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
    onChange={onChange}
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
    onChange={onChange}
    success
  />
);

hasSuccess.story = {
  name: 'Has success',
};

export const isDisabled = () => (
  <Input.Phone
    name="disabled-example"
    label="Phone number"
    defaultValue={{ countryCode: '46', phoneNumber: '123 456 789' }}
    disabled
  />
);

isDisabled.story = {
  name: 'Is disabled',
};

export const sortByCountry = () => (
  <Flexbox container direction="column" gutter={3}>
    <Input.Phone name="country-code-example" label="Sweden" sortByCountry="se" />
    <Input.Phone name="country-code-example" label="Denmark" sortByCountry="dk" />
    <Input.Phone name="country-code-example" label="Finland" sortByCountry="fi" />
    <Input.Phone name="country-code-example" label="Norway" sortByCountry="no" />
    <Input.Phone name="country-code-example" label="Other" sortByCountry="other" />
  </Flexbox>
);

sortByCountry.story = {
  name: 'Sort by country',
};

export const enableSearchComponent = () => (
  <Input.Phone
    name="enable-search-component-example"
    label="Phone number"
    placeholder="123 456 789"
    size={select('Size', { Small: 's', Normal: undefined }, undefined)}
    disabled={boolean('Disabled', false)}
    onChange={onChange}
    disableSearchComponent={false}
  />
);

enableSearchComponent.story = {
  name: 'Enable search component',
};

export const withBlurAndFocus = () => (
  <Input.Phone
    name="on-blur-example"
    label="Phone number"
    placeholder="123 456 789"
    size={select('Size', { Small: 's', Normal: undefined }, undefined)}
    disabled={boolean('Disabled', false)}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
  />
);

withBlurAndFocus.story = {
  name: 'With blur and focus function',
};
