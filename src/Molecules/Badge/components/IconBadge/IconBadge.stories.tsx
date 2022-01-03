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

export const DefaultAndCommonUseCases = () => {
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
          title: 'Badge with illustration default use',
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
                  color={(t) => t.color.badgeIconColor}
                  secondaryColor={(t) => t.color.warning}
                />
              </span>
            </Badge.IconBadge>
          ),
        },
      ]}
    />
  );
};
DefaultAndCommonUseCases.story = {
  name: 'Default and common use cases',
};
