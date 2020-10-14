import { INITIAL_VIEWPORTS} from "@storybook/addon-viewport";
import { ThemeDecorator } from "./ThemeDecorator"
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

const customViewports = {
  desktopLg: {
    name: 'Desktop Lg',
    styles: {
      width: '1360px',
      height: '100%',
    },
  },
  desktopXl: {
    name: 'Desktop Xl',
    styles: {
      width: '1620px',
      height: '100%',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: { ...INITIAL_VIEWPORTS, ...customViewports } }
}

setIntlConfig({
  locales: ['sv', 'nb', 'da', 'fi', 'en'],
  defaultLocale: 'en',
  getMessages: () => {},
  getFormats: () => {},
  // Solves problem with snapshots for time component
  timeZone: 'UTC',
});

export const decorators = [ThemeDecorator, withIntl];