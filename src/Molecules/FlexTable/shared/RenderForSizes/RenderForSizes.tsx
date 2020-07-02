import React from 'react';
import { GetScreenMedia } from './RenderForSizes.types';
import { Media } from '../../../..';

export const getScreenMedia: GetScreenMedia = ({ xs, sm, md, lg, xl }) => {
  return [
    { size: 'xs', ...xs },
    { size: 'sm', ...sm },
    { size: 'md', ...md },
    { size: 'lg', ...lg },
    { size: 'xl', ...xl },
  ]
    .filter(media => Object.keys(media).length > 1)
    .map((_, index, arr) => {
      const sizesUpToNow = arr.slice(0, index + 1);
      const screenSizeProps = sizesUpToNow.reduce(
        (acc2, values) => ({
          ...acc2,
          ...values,
        }),
        {},
      );
      return screenSizeProps;
    });
};

const getMediaQuery = (t, currentSize, nextSize) => {
  if (currentSize === 'xs' && nextSize) {
    return t.media.lessThan(t.breakpoints[nextSize]);
  }
  if (nextSize) {
    return t.media.between(t.breakpoints[currentSize], nextSize);
  }
  return t.media.greaterThan(t.breakpoints[currentSize]);
};

export const RenderForSizes = ({ xs, sm, md, lg, xl, Component, Container }) => {
  const propsPerMedia = getScreenMedia({ xs, sm, md, lg, xl });

  return propsPerMedia.map(({ size, ...props }, index, arr) => {
    const nextSize = arr[index + 1] ? arr[index + 1].size : null;

    const component = Component({ size, ...props });
    const container = Container({ size, children: component, ...props });

    if (size === 'xs' && !nextSize) {
      return container;
    }

    return <Media key={size} query={t => getMediaQuery(t, size, nextSize)} as={() => container} />;
  });
};
