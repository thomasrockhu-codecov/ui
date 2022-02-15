import React from 'react';
import { Icon } from '../..';

export type IconPickerType = (
  buttonSize: string,
) => { iconComponent: JSX.Element; iconName: string }[];

const FALLBACK_ICON_SIZE = 16;

export const allSuitableIcons = Object?.entries(Icon)
  ?.filter(([iconName, _]: [string, React.ComponentType<any>]) => iconName.match(/16$/))
  ?.sort((a, b) => a[0].localeCompare(b[0]))
  .map(([iconName, _]: [string, React.ComponentType<any>]) => ({
    iconName: (iconName?.match(/(.*?)\d+$/) || [])[1],
  }));

const getAvailableIconName = ({
  iconName,
  preferredSize,
}: {
  iconName: string;
  preferredSize: number;
}) => {
  const preferred = `${iconName}${preferredSize}`;
  const fallback = `${iconName}${FALLBACK_ICON_SIZE}`;
  return Icon[preferred] ? preferred : fallback;
};

const getIconComponent = ({
  iconName,
  iconOutline,
}: {
  iconName: string;
  iconOutline: boolean;
}) => {
  const IconComponent = Icon[iconName];
  const style = iconOutline ? { outline: '1px dashed #bbb' } : {};
  return <IconComponent color="currentColor" style={style} />;
};

const createIconPicker: (
  iconsSlice: { iconName: string }[],
  preferredIconSizes: Record<string, number>,
  iconOutline: boolean,
) => IconPickerType = (iconsSlice, preferredIconSizes, iconOutline) => (buttonSize) =>
  iconsSlice
    .map(({ iconName }: any) =>
      getAvailableIconName({
        iconName,
        preferredSize: preferredIconSizes[buttonSize] || FALLBACK_ICON_SIZE,
      }),
    )
    .map((iconName: string) => ({
      iconName,
      iconComponent: getIconComponent({ iconName, iconOutline }),
    }));

export default createIconPicker;
