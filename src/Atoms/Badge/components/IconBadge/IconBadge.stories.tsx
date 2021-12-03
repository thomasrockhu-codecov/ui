import React from 'react';
import { Icon, Illustration } from '../../../..';
import Badge from '../..';

export default {
  title: 'Atoms / Badge / IconBadge',
};

export const defaultUse = () => (
  <Badge.IconBadge>
    <Icon.Add8 />
  </Badge.IconBadge>
);
defaultUse.story = {
  name: 'Default use',
};

export const customProps = () => (
  <Badge.IconBadge badgeColor={(t) => t.color.bulbBackground} badgeSize="l">
    <Icon.Lightbulb24 color={(t) => t.color.bulbForeground} />
  </Badge.IconBadge>
);
customProps.story = {
  name: 'Custom icon badge with custom props',
};

export const customSize = () => (
  <Badge.IconBadge badgeColor={(t) => t.color.bulbBackground} badgeSize={50}>
    <Icon.Lightbulb24 color={(t) => t.color.bulbForeground} />
  </Badge.IconBadge>
);
customSize.story = {
  name: 'Custom icon badge size',
};

export const badgeWithIllustration = () => (
  <Badge.IconBadge badgeSize="xl">
    <Illustration.UrgentMailFill64 />
  </Badge.IconBadge>
);
badgeWithIllustration.story = {
  name: 'Badge with illustration',
};

// TODO: rename this
export const badgeWithIllustrationWithCustomProps = () => (
  <Badge.IconBadge badgeSize="xl">
    <span>
      <Illustration.UrgentMailFill64
        color={(t) => t.color.textLight}
        secondaryColor={(t) => t.color.negative}
      />
    </span>
  </Badge.IconBadge>
);
badgeWithIllustrationWithCustomProps.story = {
  name: 'Badge with illustration with custom props',
};
