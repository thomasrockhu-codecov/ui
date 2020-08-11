import React from 'react';

import { LayoutEffectMedia } from './LayoutEffectMedia';

export default {
  title: 'Atoms | LayoutEffectMedia',
  parameters: {
    component: LayoutEffectMedia,
  },
};

export const basicUsage = () => {
  return (
    <>
      <LayoutEffectMedia query={t => t.media.lessThan(t.breakpoints.md)}>
        I am only shown on screens smaller than medium size
      </LayoutEffectMedia>
      <LayoutEffectMedia query={t => t.media.between(t.breakpoints.md, t.breakpoints.lg)}>
        I am only shown between medium and large sizes
      </LayoutEffectMedia>
      <LayoutEffectMedia query={t => t.media.greaterThan(t.breakpoints.lg)}>
        I am only shown on screens bigger than large size
      </LayoutEffectMedia>
    </>
  );
};

basicUsage.story = {
  name: 'Basic usage',
};

export const withSizeKey = () => {
  return (
    <>
      <LayoutEffectMedia query={t => t.media.lessThan(t.breakpoints.md.size)}>
        I am only shown on screens smaller than medium size
      </LayoutEffectMedia>
      <LayoutEffectMedia query={t => t.media.between(t.breakpoints.md.size, t.breakpoints.lg.size)}>
        I am only shown between medium and large sizes
      </LayoutEffectMedia>
      <LayoutEffectMedia query={t => t.media.greaterThan(t.breakpoints.lg.size)}>
        I am only shown on screens bigger than large size
      </LayoutEffectMedia>
    </>
  );
};

withSizeKey.story = {
  name: 'With size key',
};
