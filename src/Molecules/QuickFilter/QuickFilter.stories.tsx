import React, { useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Icon, Card } from '../..';
import { QuickFilter } from './QuickFilter';

export default {
  title: 'Molecules / QuickFilter',
  parameters: {
    component: QuickFilter,
  },
  decorators: [withKnobs],
};

const onChange = action('on change triggered');

const getCardProps = (label = '', value = '') => ({
  label: text(
    'Label',
    label ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque dignissim dolor.',
  ),
  value:
    value ||
    text(
      'Value',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque dignissim dolor.',
    ),
  disabled: boolean('Disabled', false),
});

export const QuickFilterDefault = () => (
  <Card>
    <QuickFilter {...getCardProps('Default')} onChange={onChange} />
  </Card>
);

QuickFilterDefault.story = {
  name: 'Default',
};

export const QuickFilterOnlyLabel = () => {
  return (
    <Card>
      <QuickFilter {...getCardProps('Only label')} onChange={onChange} />
    </Card>
  );
};

QuickFilterOnlyLabel.story = {
  name: 'Only label',
};

export const QuickFilterOnlyIcon = () => {
  return (
    <Card>
      <QuickFilter {...getCardProps()} label="" onChange={onChange} icon={<Icon.Money16 />} />
    </Card>
  );
};

QuickFilterOnlyIcon.story = {
  name: 'Only icon',
};

export const QuickFilterWithValueControlledBehavior = () => {
  const Component = () => {
    const [value, setValue] = useState(false);

    return (
      <Card>
        <QuickFilter
          label="Controlled selection card"
          value="This component is controlled"
          selected={value}
          onChange={() => setValue(!value)}
        />
        <button type="button" onClick={() => setValue(true)}>
          Selected
        </button>
        <button type="button" onClick={() => setValue(false)}>
          Not selected
        </button>
        value: {value.toString()}
      </Card>
    );
  };
  return <Component />;
};

QuickFilterWithValueControlledBehavior.story = {
  name: 'With controlled behavior',
};
