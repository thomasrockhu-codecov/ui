import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { renderToString } from 'react-dom/server';
import ReactDOM from 'react-dom';
import { Media, useMedia, createTheme } from '../..';

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
    matches: media === theme.media.greaterThan(theme.size.sm).replace('@media ', ''),
    addEventListener: () => null,
    removeEventListener: () => null,
  });
});

test('useMedia hook: returns true if matches', () => {
  const theme = createTheme();

  const ConsumerThatMatches = () => {
    const matches = useMedia(t => t.media.greaterThan(t.size.sm));
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

test('useMedia hook: returns null if SSR', () => {
  const theme = createTheme();
  const ConsumerThatDoesntMatch = () => {
    const matches = useMedia(t => t.media.greaterThan(t.size.lg));
    return <div data-testid="consumer">{`${matches}`}</div>;
  };

  const html = renderToString(
    <ThemeProvider theme={theme}>
      <ConsumerThatDoesntMatch />
    </ThemeProvider>,
  );
  expect(html).toMatchSnapshot();
});

test('useMedia hook: returns false if doesnt match', async () => {
  const theme = createTheme();

  const ConsumerThatDoesntMatch = () => {
    const matches = useMedia(t => t.media.greaterThan(t.size.lg));
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

test('Server-side rendering works: rendering all medias with CSS workaround', () => {
  const html = renderToString(
    <ThemeProvider theme={createTheme()}>
      <>
        <Media query={t => t.media.greaterThan(t.size.sm)}>This shows on and above sm</Media>
        <Media query={t => t.media.lessThan(t.size.sm)}>This shows below sm</Media>
      </>
    </ThemeProvider>,
  );
  expect(html).toMatchSnapshot();
});

test('Client-side rendering works: not rendering non-matched media', async () => {
  const { getByTestId } = render(
    <ThemeProvider theme={createTheme()}>
      <>
        <Media query={t => t.media.greaterThan(t.size.sm)}>
          <div data-testid="one">This shows on and above sm</div>
        </Media>
        <Media query={t => t.media.lessThan(t.size.sm)}>
          <div data-testid="two">This shows below sm</div>
        </Media>
      </>
    </ThemeProvider>,
  );
  const oneTestNode = getByTestId('one');
  let twoTestNode;
  try {
    twoTestNode = getByTestId('two');
  } catch (e) {
    // do nothing
  }

  expect(oneTestNode).toBeDefined();
  expect(twoTestNode).not.toBeDefined();
});

test('Hydration', async () => {
  const Element = () => (
    <ThemeProvider theme={createTheme()}>
      <>
        <Media query={t => t.media.greaterThan(t.size.sm)}>gt sm</Media>
        <Media query={t => t.media.lessThan(t.size.sm)}>lt sm</Media>
      </>
    </ThemeProvider>
  );
  const html = renderToString(<Element />);
  const main = document.createElement('main');

  main.innerHTML = html;
  const htmlSSR = main.innerHTML;

  ReactDOM.hydrate(<Element />, main);

  const htmlBeforeEffect = main.innerHTML;

  await new Promise(res => setTimeout(res, 0)); // wait for effect to be invoked

  const htmlAfterEffect = main.innerHTML;

  expect(htmlSSR).toBe(htmlBeforeEffect);
  expect(htmlBeforeEffect).not.toBe(htmlAfterEffect);
});
