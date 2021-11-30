import React from 'react';
import Badge from '../..';

export default {
  title: 'Atoms / Badge / IconBadge',
};

export const defaultUse = () => <Badge.IconBadge icon="Add24" />;
defaultUse.story = {
  name: 'Default use',
};
export const badgeWithIcon = () => <Badge.IconBadge icon="UrgentMailFill64" />;
defaultUse.story = {
  name: 'Badge with illustration',
};

export const customBadgeSize = () => <Badge.IconBadge badgeSize="m" icon="Add8" />;
customBadgeSize.story = {
  name: 'Custom badge size',
};
