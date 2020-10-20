import React from 'react';
import {
  ScreenSize,
  MediaPropsAndSize,
  GetMediaQuery,
  GetScreenMedia,
  RenderForSizesComponent,
} from './RenderForSizes.types';
import IsomorphicMedia from '../../../../Atoms/IsomorphicMedia';

export const getScreenMedia: GetScreenMedia = ({ xs, sm, md, lg, xl }) => {
  const screenMedia = [
    { size: 'xs' as ScreenSize, ...xs },
    { size: 'sm' as ScreenSize, ...sm },
    { size: 'md' as ScreenSize, ...md },
    { size: 'lg' as ScreenSize, ...lg },
    { size: 'xl' as ScreenSize, ...xl },
  ]
    .filter((media) => Object.keys(media).length > 1)
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
  containerProps,
  componentProps,
}) => {
  const propsPerMedia = getScreenMedia({ xs, sm, md, lg, xl });

  return (
    <>
      {propsPerMedia.map((props, index, arr) => {
        const { size } = props;
        const nextSize = arr[index + 1] ? arr[index + 1].size : null;

        if (size === 'xs' && !nextSize) {
          return (
            <Container key={size} {...containerProps} {...props}>
              <Component {...componentProps} {...props} />
            </Container>
          );
        }

        return (
          <IsomorphicMedia
            key={size}
            query={(t) => getMediaQuery(t, size, nextSize)}
            as={Container}
            {...containerProps}
            {...props}
          >
            <Component {...componentProps} {...props} />
          </IsomorphicMedia>
        );
      })}
    </>
  );
};
