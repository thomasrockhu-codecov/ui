import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Icon } from '../..';
import { SelectionCard } from './SelectionCard';
import picture from './images/person.png';

const getCardProps = () => ({
  title: text('Title', 'Title'),
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

export const SelectionCardDefault = () => <SelectionCard {...getCardProps()} />;

SelectionCardDefault.story = {
  name: 'Default',
};

export const SelectionCardWithIcon = () => (
  <SelectionCard {...getCardProps()} icon={<Icon.House size={8} />} />
);

SelectionCardWithIcon.story = {
  name: 'With icon',
};

export const SelectionCardWithImage = () => (
  <SelectionCard
    {...getCardProps()}
    imageUrl={picture}
    imageAlt="A woman drinking coffee"
    onChange={action('on change triggered')}
  />
);

SelectionCardWithImage.story = {
  name: 'With image',
};
