import React, { useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Flexbox, Icon, Typography } from '../..';
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
  <QuickFilter {...getCardProps('Default')} onChange={onChange} />
);

QuickFilterDefault.story = {
  name: 'Default',
};

export const QuickFilterWithReactNode = () => (
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
);

QuickFilterWithReactNode.story = {
  name: 'With ReactNode',
};

export const QuickFilterWithIcon = () => {
  return (
    <>
      <QuickFilter {...getCardProps('With Icon')} onChange={onChange} icon={<Icon.Money16 />} />
    </>
  );
};

QuickFilterWithIcon.story = {
  name: 'With icon',
};

export const QuickFilterWithVariants = () => {
  return (
    <>
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
    </>
  );
};

QuickFilterWithVariants.story = {
  name: 'With variants',
};

export const QuickFilterWithValueControlledBehavior = () => {
  const Component = () => {
    const [value, setValue] = useState(false);

    return (
      <>
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
      </>
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
      <QuickFilter label="" value="This component is controlled" icon={<Icon.Apartment24 />} />
    );
  };
  return <Component />;
};

QuickFilterWithoutLabel.story = {
  name: 'Without label',
};
