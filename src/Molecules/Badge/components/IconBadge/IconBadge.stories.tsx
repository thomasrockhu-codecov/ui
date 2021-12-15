import React from 'react';
import { Icon, Illustration } from '../../../..';
import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / IconBadge',
  parameters: {
    component: Badge.IconBadge,
  },
};

export const DefaultUse = () => {
  return (
    <Display
      items={[
        {
          title: 'Default use',
          component: (
            <Badge.IconBadge>
              <Icon.Add8 />
            </Badge.IconBadge>
          ),
        },
        {
          title: 'Custom icon badge with custom props',
          component: (
            <Badge.IconBadge badgeColor={(t) => t.color.bulbBackground} badgeSize="l">
              <Icon.Lightbulb24 color={(t) => t.color.bulbForeground} />
            </Badge.IconBadge>
          ),
        },
        {
          title: 'Custom icon badge size',
          component: (
            <Badge.IconBadge badgeColor={(t) => t.color.bulbBackground} badgeSize={30}>
              <Icon.Lightbulb24 color={(t) => t.color.bulbForeground} />
            </Badge.IconBadge>
          ),
        },
        {
          title: 'Badge with illustration',
          component: (
            <Badge.IconBadge badgeSize="xl">
              <Illustration.UrgentMailFill64 />
            </Badge.IconBadge>
          ),
        },
        {
          title: 'Badge with illustration with custom props',
          component: (
            <Badge.IconBadge badgeSize="xl">
              <span>
                <Illustration.UrgentMailFill64
                  color={(t) => t.color.textLight}
                  secondaryColor={(t) => t.color.negative}
                />
              </span>
            </Badge.IconBadge>
          ),
        },
      ]}
    />
  );
};
DefaultUse.story = {
  name: 'Default and Common uses',
};
