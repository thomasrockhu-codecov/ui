import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { renderToString } from 'react-dom/server';
import ReactDOM from 'react-dom';
import { Theme } from '../../theme/theme.types';
import { createTheme } from '../../index';
import { useIsomorphicMedia } from './index';
import { IsomorphicMedia } from './IsomorphicMedia';

describe('window defined', () => {
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
});

describe('window undefined', () => {
  // afterEach(cleanup);
  // beforeEach(() => {
  //   const theme = createTheme();
  //   // Mocking matchMedia API
  //   global = undefined;
  // });

  let windowSpy: any;
  beforeEach(() => {
    windowSpy = jest.spyOn(global as any, 'window', 'get');
    windowSpy.mockImplementation(() => undefined);
  });
  afterEach(() => {
    windowSpy.mockRestore();
  });

  test('Hydration', async () => {
    expect(typeof window).toBe('undefined');
    const Element = () => (
      <ThemeProvider theme={createTheme()}>
        <>
          <IsomorphicMedia query={t => t.media.greaterThan(t.breakpoints.sm)}>
            gt sm
          </IsomorphicMedia>
          <IsomorphicMedia query={t => t.media.lessThan(t.breakpoints.sm)}>lt sm</IsomorphicMedia>
        </>
      </ThemeProvider>
    );
    const html = renderToString(<Element />);
    windowSpy.mockRestore();
    expect(typeof window).not.toBe('undefined');
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
});
