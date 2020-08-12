import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { Theme } from '../../theme/theme.types';
import { createTheme } from '../../index';
import { useIsomorphicMedia } from './index';
import { IsomorphicMedia } from './IsomorphicMedia';
import { Element, HTML_FROM_SSR } from './IsomorphicMedia.fixtures';

afterEach(cleanup);
beforeEach(() => {
  const theme = createTheme();
  // Mocking matchMedia API
  window.matchMedia = media => ({
    media,
    addListener: () => null,
    dispatchEvent: () => null,
    onchange: () => null,
    removeListener: () => null,
    matches: media === theme.media.greaterThan(theme.breakpoints.sm).replace('@media ', ''),
    addEventListener: () => null,
    removeEventListener: () => null,
  });
});

test('useMedia hook: returns true if matches', () => {
  const theme = createTheme();

  const ConsumerThatMatches = () => {
    const matches = useIsomorphicMedia(t => t.media.greaterThan(t.breakpoints.sm));
    return <div data-testid="consumer">{`${matches}`}</div>;
  };

  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <ConsumerThatMatches />
    </ThemeProvider>,
  );
  const node = getByTestId('consumer');
  expect(node).toBeDefined();
  expect(node.textContent).toBe('true');
});

test('useMedia hook: returns false if doesnt match', async () => {
  const theme = createTheme();

  const ConsumerThatDoesntMatch = () => {
    const matches = useIsomorphicMedia(t => t.media.greaterThan(t.breakpoints.lg));
    return <div data-testid="consumer">{`${matches}`}</div>;
  };

  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <ConsumerThatDoesntMatch />
    </ThemeProvider>,
  );
  const node = getByTestId('consumer');

  expect(node).toBeDefined();
  expect(node.textContent).toBe('false');
});

test('Client-side rendering works: not rendering non-matched media', async () => {
  const { getByTestId } = render(
    <ThemeProvider theme={createTheme()}>
      <>
        <IsomorphicMedia query={t => t.media.greaterThan(t.breakpoints.sm)}>
          <div data-testid="one">This shows on and above sm</div>
        </IsomorphicMedia>
        <IsomorphicMedia query={t => t.media.lessThan(t.breakpoints.sm)}>
          <div data-testid="two">This shows below sm</div>
        </IsomorphicMedia>
      </>
    </ThemeProvider>,
  );
  const oneTestNode = getByTestId('one');
  expect(oneTestNode).toBeDefined();
  expect(() => {
    getByTestId('two');
  }).toThrow();
});

test('Client-side: case when media query changes', () => {
  const firstQuery = (t: Theme) => t.media.greaterThan(t.breakpoints.sm);
  const { rerender, getByTestId } = render(
    <ThemeProvider theme={createTheme()}>
      <IsomorphicMedia query={firstQuery}>
        <div data-testid="target">some content</div>
      </IsomorphicMedia>
    </ThemeProvider>,
  );

  expect(getByTestId('target')).toBeDefined();

  const secondQuery = (t: Theme) => t.media.lessThan(t.breakpoints.sm);

  rerender(
    <ThemeProvider theme={createTheme()}>
      <IsomorphicMedia query={secondQuery}>
        <div data-testid="target">some content</div>
      </IsomorphicMedia>
    </ThemeProvider>,
  );

  expect(() => getByTestId('target')).toThrow();
});

test('Hydration', async () => {
  const main = document.createElement('main');

  // We can't toggle between node and jsdom environment in the same test. This is the result from "renderToString" method in IsomorphicMedia.ssr.test.tsx
  main.innerHTML = HTML_FROM_SSR;

  ReactDOM.hydrate(<Element />, main);

  // This is the HTML that we expect to be rendered from the client
  const htmlInClient = '<div>gt sm</div>';

  expect(main.innerHTML).toEqual(htmlInClient);
});
