import { ThemeDecorator } from "./ThemeDecorator"
import { withA11y } from '@storybook/addon-a11y';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

setIntlConfig({
  locales: ['sv', 'nb', 'da', 'fi', 'en'],
  defaultLocale: 'en',
  getMessages: () => {},
  getFormats: () => {},
  // Solves problem with snapshots for time component
  timeZone: 'UTC',
});


export const decorators = [ThemeDecorator, withIntl, withA11y];