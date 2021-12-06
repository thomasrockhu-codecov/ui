import React, { useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Flexbox, Icon, Typography, Card } from '../..';
import { QuickFilter } from './QuickFilter';

export default {
  title: 'Molecules / QuickFilter',
  parameters: {
    component: QuickFilter,
  },
  decorators: [withKnobs],
};

const onChange = action('on change triggered');

const getCardProps = (label = '') => ({
  label: text(
    'Label',
    label ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque dignissim dolor.',
  ),
  value: text(
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

export const QuickFilterWithReactNode = () => (
  <Card>
    <QuickFilter
      {...getCardProps()}
      onChange={onChange}
      label={
        <Flexbox item>
          <Typography type="primary" weight="bold">
            Title in a flexbox
          </Typography>
        </Flexbox>
      }
    />
  </Card>
);

QuickFilterWithReactNode.story = {
  name: 'With ReactNode',
};

export const QuickFilterWithIcon = () => {
  return (
    <Card>
      <QuickFilter {...getCardProps('With Icon')} onChange={onChange} icon={<Icon.Money16 />} />
    </Card>
  );
};

QuickFilterWithIcon.story = {
  name: 'With icon',
};

export const QuickFilterWithVariants = () => {
  return (
    <Card>
      <QuickFilter
        {...getCardProps()}
        onChange={onChange}
        icon={<Icon.Money16 />}
        label=""
        variant="small"
      />

      <QuickFilter
        {...getCardProps()}
        onChange={onChange}
        icon={<Icon.Money16 />}
        label=""
        variant="big"
      />
    </Card>
  );
};

QuickFilterWithVariants.story = {
  name: 'With variants',
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

export const QuickFilterWithoutLabel = () => {
  const Component = () => {
    return (
      <Card>
        <QuickFilter
          label=""
          value="This component is not controlled"
          icon={<Icon.Apartment24 />}
        />
      </Card>
    );
  };
  return <Component />;
};

QuickFilterWithoutLabel.story = {
  name: 'Without label',
};
