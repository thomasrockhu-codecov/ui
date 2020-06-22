import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { ThemeDecorator, DocsWrapper } from './ThemeDecorator';
// Load the locale data for all your defined locales

addParameters({
  docs: {
    container: DocsWrapper,
    page: DocsPage,
  },
});

// automatically import all files ending in *.stories.tsx
const req = require.context('../docs', true, /.stories.mdx$/);
const req2 = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  return req
    .keys()
    .map(req)
    .concat(req2.keys().map(req2));
}

addDecorator(withA11y);

addDecorator(ThemeDecorator);

setIntlConfig({
  locales: ['sv', 'nb', 'da', 'fi', 'en'],
  defaultLocale: 'en',
  getMessages: () => {},
  getFormats: () => {},
  // Solves problem with snapshots for time component
  timeZone: 'UTC',
});

addDecorator(withIntl);
import { create } from '@storybook/theming';
import { createTheme } from '../src/theme';

const theme = createTheme({});
// Option defaults.
addParameters({
  options: {
    theme: create({
      base: 'light',

      colorPrimary: theme.color.cta,
      colorSecondary: theme.color.cta,

      // UI
      appBg: 'white',
      appContentBg: theme.color.background,
      appBorderColor: theme.color.bubbleBorder,
      appBorderRadius: 0,

      // Typography
      fontBase: '"Open Sans", sans-serif',
      fontCode: 'monospace',

      // Text colors
      textColor: 'black',
      textInverseColor: 'rgba(255,255,255,0.9)',

      // Toolbar default and active colors
      barTextColor: theme.color.background,
      barSelectedColor: theme.color.textLight,
      barBg: theme.color.backgroundBlack,

      // Form colors
      inputBg: 'white',
      inputBorder: 'silver',
      inputTextColor: 'black',
      inputBorderRadius: 4,

      brandTitle: 'Nordnet UI',
      brandUrl: 'https://nordnet.se',
    }),
  },
});

configure(loadStories, module);
