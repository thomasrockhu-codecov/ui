import React from 'react';
import {
  ScreenSize,
  MediaPropsAndSize,
  GetMediaQuery,
  GetScreenMedia,
  RenderForSizesComponent,
} from './RenderForSizes.types';
import { Media } from '../../../..';

export const getScreenMedia: GetScreenMedia = ({ xs, sm, md, lg, xl }) => {
  const screenMedia = [
    { size: 'xs' as ScreenSize, ...xs },
    { size: 'sm' as ScreenSize, ...sm },
    { size: 'md' as ScreenSize, ...md },
    { size: 'lg' as ScreenSize, ...lg },
    { size: 'xl' as ScreenSize, ...xl },
  ]
    .filter(media => Object.keys(media).length > 1)
    .map((_, index, arr) => {
      const sizesUpToNow = arr.slice(0, index + 1);
      const screenSizeProps = sizesUpToNow.reduce<MediaPropsAndSize>(
        (acc, values) => ({
          ...acc,
          ...values,
        }),
        {} as MediaPropsAndSize,
      );
      return screenSizeProps;
    });

  return screenMedia;
};

const getMediaQuery: GetMediaQuery = (theme, currentSize, nextSize) => {
  if (currentSize === 'xs' && nextSize) {
    return theme.media.lessThan(theme.breakpoints[nextSize]);
  }
  if (nextSize) {
    return theme.media.between(theme.breakpoints[currentSize], theme.breakpoints[nextSize]);
  }
  return theme.media.greaterThan(theme.breakpoints[currentSize]);
};

export const RenderForSizes: RenderForSizesComponent = ({
  xs,
  sm,
  md,
  lg,
  xl,
  Component,
  Container,
}) => {
  const propsPerMedia = getScreenMedia({ xs, sm, md, lg, xl });

  return (
    <>
      {propsPerMedia.map((props, index, arr) => {
        const { size } = props;
        const nextSize = arr[index + 1] ? arr[index + 1].size : null;
        const component = Component(props);
        const container = Container({ children: component, ...props });

        if (size === 'xs' && !nextSize) {
          return container;
        }

        const as = (() => container) as React.FC;

        return (
          <Media
            key={`${size}${index + 1}`}
            query={t => getMediaQuery(t, size, nextSize)}
            as={as}
          />
        );
      })}
    </>
  );
};
