import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { Icon, Flexbox, Typography } from '../..';
import { SelectionCard } from './SelectionCard';

const StyledFlexbox = styled(Flexbox)`
  width: 100%;
`;

const requiredProps = {
  title: 'Title',
  onChange: action('on change triggered'),
};

const getCardProps = () => ({
  tag: text('Tag', 'Tag'),
  text: text(
    'Text',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque dignissim dolor.',
  ),
  border: boolean('Border', true),
  disabled: boolean('Disabled', false),
  outline: boolean('Outline', true),
  horizontal: boolean('Horizontal', false),
  selected: boolean('Selected', false),
  error: boolean('Error', false),
});

export default {
  title: 'Molecules | SelectionCard',
  parameters: {
    component: SelectionCard,
  },
  decorators: [withKnobs],
};

export const SelectionCardDefault = () => <SelectionCard {...getCardProps()} {...requiredProps} />;

SelectionCardDefault.story = {
  name: 'Default',
};

export const SelectionCardWithReactNode = () => (
  <SelectionCard
    {...getCardProps()}
    {...requiredProps}
    title={
      <StyledFlexbox container justifyContent="flex-start">
        <Flexbox item>
          <Typography type="primary" weight="bold">
            Title in a flexbox
          </Typography>
        </Flexbox>
      </StyledFlexbox>
    }
    text={
      <StyledFlexbox container justifyContent="flex-end">
        <Flexbox item>
          <Typography type="secondary">Text in a flexbox</Typography>
        </Flexbox>
      </StyledFlexbox>
    }
  />
);

SelectionCardWithReactNode.story = {
  name: 'With ReactNode',
};

export const SelectionCardWithIcon = () => (
  <SelectionCard {...getCardProps()} {...requiredProps} icon={<Icon.House size={8} />} />
);

SelectionCardWithIcon.story = {
  name: 'With icon',
};
