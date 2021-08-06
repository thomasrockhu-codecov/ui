import React, { ReactNode } from 'react';
import { StoryFn } from '@storybook/addons';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../src';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';

const themes = {};

const getTheme = (darkMode) => {
  const key = `dark:${darkMode}`;
  if (!themes[key]) {
    themes[key] = createTheme({ darkColors: darkMode });
  }
  return themes[key];
};

const theme = createTheme({ a11yColors: true, darkColors: true });

export const ThemeDecorator = (storyFn: StoryFn<ReactNode>) => (
  <ThemeProvider theme={getTheme(useDarkMode())}>{storyFn()}</ThemeProvider>
);

export const DocsWrapper = ({ children, ...rest }: any) => (
  <DocsContainer {...rest}>
    <ThemeProvider theme={getTheme(useDarkMode())}>{children}</ThemeProvider>
  </DocsContainer>
);
