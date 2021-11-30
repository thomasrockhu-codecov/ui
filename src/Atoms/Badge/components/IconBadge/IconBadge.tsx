import React from 'react';
import { IconBadgeComponent } from './IconBadge.types';
import { Icon, Illustration } from '../../../..';
import { BadgeBase } from '..';

const mapBadgeSize = (icon: string) => {
  const iconSize = icon.match(/(\d+)(?!.*\d)/)?.[0];
  switch (iconSize) {
    case '8':
      return 's';
    case '16':
    case '24':
      return 'm';
    case '32':
    case '40':
      return 'l';
    case '48':
    case '64':
      return 'xl';
    default:
      return 'm';
  }
};

const mapToBadgeBase = (badgeSize: string) => {
  switch (badgeSize) {
    case 's':
      return 6;
    case 'm':
      return 8;
    case 'l':
      return 12;
    case 'xl':
      return 18;
    default:
      return 8;
  }
};

export const IconBadge: IconBadgeComponent = ({
  badgeSize,
  icon,
  iconColor,
  secondaryIconColor,
  badgeColor,
}) => {
  const IconComponent = Icon[icon] ?? Illustration[icon];

  const badgeBase = badgeSize ? mapToBadgeBase(badgeSize) : mapToBadgeBase(mapBadgeSize(icon));

  return (
    <BadgeBase
      backgroundColor={(t: any) => (badgeColor ? badgeColor(t) : t.color.cta)}
      badgeSize={badgeBase}
    >
      <IconComponent
        color={(t: any) => (iconColor ? iconColor(t) : t.color.textLight)}
        secondaryColor={(t: any) =>
          secondaryIconColor ? secondaryIconColor(t) : t.color.textLight
        }
      />
    </BadgeBase>
  );
};
