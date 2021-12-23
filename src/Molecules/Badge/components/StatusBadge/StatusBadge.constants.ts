import { ColorFn } from '../BaseBadge/BaseBadge.types';

export const VARIANT_CREATE = 'create';
export const VARIANT_COMPLETE = 'complete';
export const VARIANT_PENDING = 'pending';
export const VARIANT_ERROR = 'error';
export const VARIANT_WARNING = 'warning';
export const VARIANT_INFORMATION = 'information';

export const MAP_BADGE_AND_ICON_SIZES = {
  s: { badgeSize: 6, iconSize: '16' },
  m: { badgeSize: 8, iconSize: '16' },
  l: { badgeSize: 12, iconSize: '24' },
  xl: { badgeSize: 18, iconSize: '32' },
};

export const MAP_ICON_COMPONENT_NAME = {
  [VARIANT_CREATE]: 'Add',
  [VARIANT_COMPLETE]: 'Check',
  [VARIANT_PENDING]: 'Clock',
  [VARIANT_ERROR]: 'Cross',
  [VARIANT_WARNING]: 'ExclamationMark',
  [VARIANT_INFORMATION]: 'InformationMark',
};
export const ICON_COLOR: ColorFn = (t) => t.color.badgeIconColor;
