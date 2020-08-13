/**
 * @jest-environment node
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { createTheme } from '../../index';
import { Element, HTML_FROM_SSR } from './IsomorphicMedia.fixtures';
import { IsomorphicMedia, useIsomorphicMedia } from './index';

test('Server-side rendering', async () => {
  const html = renderToString(<Element />);

  expect(html).toBe(HTML_FROM_SSR);
});

test('useMedia hook: returns null if SSR', () => {
  const theme = createTheme();
  const ConsumerThatDoesntMatch = () => {
    const matches = useIsomorphicMedia(t => t.media.greaterThan(t.breakpoints.lg));
    return <div data-testid="consumer">{`${matches}`}</div>;
  };

  const html = renderToString(
    <ThemeProvider theme={theme}>
      <ConsumerThatDoesntMatch />
    </ThemeProvider>,
  );
  expect(html).toMatchSnapshot();
});

test('Server-side rendering works: rendering all medias with CSS workaround', () => {
  const html = renderToString(
    <ThemeProvider theme={createTheme()}>
      <>
        <IsomorphicMedia query={t => t.media.greaterThan(t.breakpoints.sm)}>
          This shows on and above sm
        </IsomorphicMedia>
        <IsomorphicMedia query={t => t.media.lessThan(t.breakpoints.sm)}>
          This shows below sm
        </IsomorphicMedia>
      </>
    </ThemeProvider>,
  );
  expect(html).toMatchSnapshot();
});
