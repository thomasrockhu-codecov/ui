import React from 'react';
import { Theme } from 'theme/theme.types';
import { Icon } from '../../../..';
import { IconBadge } from '..';
import { ColorFn } from '../BaseBadge/BaseBadge.types';
import { StatusBadgeComponent, StatusVariant, StatusBadgeSize } from './StatusBadge.types';

const VARIANT_CREATE = 'create';
const VARIANT_COMPLETE = 'complete';
const VARIANT_PENDING = 'pending';
const VARIANT_ERROR = 'error';
const VARIANT_WARNING = 'warning';
const VARIANT_INFORMATION = 'information';

const MAP_BADGE_AND_ICON_SIZES = {
  s: { badgeSize: 6, iconSize: '16' },
  m: { badgeSize: 8, iconSize: '16' },
  l: { badgeSize: 12, iconSize: '24' },
  xl: { badgeSize: 18, iconSize: '32' },
};

const MAP_ICON_COMPONENT_NAME = {
  [VARIANT_CREATE]: 'Add',
  [VARIANT_COMPLETE]: 'Check',
  [VARIANT_PENDING]: 'Clock',
  [VARIANT_ERROR]: 'Cross',
  [VARIANT_WARNING]: 'ExclamationMark',
  [VARIANT_INFORMATION]: 'InformationMark',
};
const ICON_COLOR = (t: Theme) => t.color.svgStokeLight;

const getStatusBadgeProps = (
  variant: StatusVariant,
  badgeSize: StatusBadgeSize,
): { icon: React.ReactElement; badgeColor: ColorFn; badgeSize: number } => {
  const sizes = MAP_BADGE_AND_ICON_SIZES[badgeSize];

  // Map icon component name and icon size dependent on badge size eg.
  const iconBaseName = MAP_ICON_COMPONENT_NAME[variant];
  const iconComponentName = `${iconBaseName}${sizes.iconSize}`;

  const IconComponent = Icon[iconComponentName];

  switch (variant) {
    case VARIANT_CREATE:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.color.cta,
        badgeSize: sizes.badgeSize,
      };
    case VARIANT_COMPLETE:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.color.positive,
        badgeSize: sizes.badgeSize,
      };
    case VARIANT_PENDING:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.color.warning,
        badgeSize: sizes.badgeSize,
      };
    case VARIANT_ERROR:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.color.negative,
        badgeSize: sizes.badgeSize,
      };
    case VARIANT_WARNING:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.color.warning,
        badgeSize: sizes.badgeSize,
      };
    case VARIANT_INFORMATION:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.color.cta,
        badgeSize: sizes.badgeSize,
      };

    default:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.color.cta,
        badgeSize: sizes.badgeSize,
      };
  }
};

export const StatusBadge: StatusBadgeComponent = ({ variant, badgeSize }) => {
  const statusBadgeProps = getStatusBadgeProps(variant, badgeSize);

  return (
    <IconBadge badgeSize={statusBadgeProps.badgeSize} badgeColor={statusBadgeProps.badgeColor}>
      {statusBadgeProps.icon}
    </IconBadge>
  );
};
