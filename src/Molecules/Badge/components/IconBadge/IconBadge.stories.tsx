import React from 'react';
import { Icon, Illustration } from '../../../..';
import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / Icon',
  parameters: {
    component: Badge.Icon,
  },
};

export const DefaultAndCommonUseCases = () => {
  return (
    <Display
      items={[
        {
          title: 'Default use',
          component: (
            <Badge.Icon>
              <Icon.Add8 />
            </Badge.Icon>
          ),
        },
        {
          title: 'Custom icon badge with custom props',
          component: (
            <Badge.Icon badgeColor={(t) => t.color.bulbBackground} badgeSize="l">
              <Icon.Lightbulb24 color={(t) => t.color.bulbForeground} />
            </Badge.Icon>
          ),
        },
        {
          title: 'Custom icon badge size',
          component: (
            <Badge.Icon badgeColor={(t) => t.color.bulbBackground} badgeSize={30}>
              <Icon.Lightbulb24 color={(t) => t.color.bulbForeground} />
            </Badge.Icon>
          ),
        },
        {
          title: 'Badge with illustration default use',
          component: (
            <Badge.Icon badgeSize="xl">
              <Illustration.UrgentMailFill64 />
            </Badge.Icon>
          ),
        },
        {
          title: 'Badge with illustration with custom props',
          component: (
            <Badge.Icon badgeSize="xl">
              <span>
                <Illustration.UrgentMailFill64
                  color={(t) => t.color.badgeIconColor}
                  secondaryColor={(t) => t.color.warning}
                />
              </span>
            </Badge.Icon>
          ),
        },
      ]}
    />
  );
};
DefaultAndCommonUseCases.story = {
  name: 'Default and common use cases',
};
