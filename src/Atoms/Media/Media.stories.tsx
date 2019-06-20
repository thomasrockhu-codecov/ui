import { storiesOf } from '@storybook/react';
import React from 'react';

import { Media } from '../..';

storiesOf('Atoms | Media', module)
  .add('Basic usage', () => {
    return (
      <>
        <Media query={t => t.media.lessThan(t.size.md)}>
          I am only shown on screens smaller than medium size
        </Media>
        <Media query={t => t.media.between(t.size.md, t.size.lg)}>
          I am only shown between medium and large sizes
        </Media>
        <Media query={t => t.media.greaterThan(t.size.lg)}>
          I am only shown on screens bigger than large size
        </Media>
      </>
    );
  })
  .add('As prop', () => {
    return (
      <>
        <Media as="span" query={t => t.media.lessThan(t.size.md)}>
          I am only shown on screens smaller than medium size
        </Media>
        <Media
          as={({ children }) => <div style={{ background: 'pink' }}>{children}</div>}
          query={t => t.media.greaterThan(t.size.md)}
        >
          I am only shown after medium
        </Media>
      </>
    );
  });
