import React from 'react';
import { IconBadge } from './IconBadge';

export default {
  title: 'Atoms / IconBadge',
};

export const defaultUse = () => <IconBadge icon="Add24" />;
defaultUse.story = {
  name: 'Default use',
};
export const badgeWithIcon = () => <IconBadge icon="UrgentMailFill64" />;
defaultUse.story = {
  name: 'Badge with illustration',
};

export const customBadgeSize = () => <IconBadge badgeSize="m" icon="Add8" />;
customBadgeSize.story = {
  name: 'Custom badge size',
};
