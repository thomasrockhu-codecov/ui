import React from 'react';
import styled from 'styled-components';
import { IconBadgeProps, WrapperComponent } from './IconBadge.types';
import { Icon, Illustration } from '../..';

const Wrapper = styled('span')<WrapperComponent>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  height: ${(p) => p.theme.spacing.unit(p.badgeSize)}px;
  min-width: ${(p) => p.theme.spacing.unit(p.badgeSize)}px;
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor(p.theme) : p.theme.color.cta)};
  border-radius: ${(p) => p.theme.spacing.unit(p.badgeSize)}px;
`;

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

export const IconBadge: React.FC<IconBadgeProps> = ({
  badgeSize,
  icon,
  iconColor,
  secondaryIconColor,
  badgeColor,
}) => {
  const IconComponent = Icon[icon] ?? Illustration[icon];

  const badgeBase = badgeSize ? mapToBadgeBase(badgeSize) : mapToBadgeBase(mapBadgeSize(icon));

  return (
    <Wrapper
      backgroundColor={(t: any) => (badgeColor ? badgeColor(t) : t.color.cta)}
      badgeSize={badgeBase}
    >
      <IconComponent
        color={(t: any) => (iconColor ? iconColor(t) : t.color.textLight)}
        secondaryColor={(t: any) =>
          secondaryIconColor ? secondaryIconColor(t) : t.color.textLight
        }
      />
    </Wrapper>
  );
};
