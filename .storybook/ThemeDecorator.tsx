import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../src';
import { DocsContainer } from '@storybook/addon-docs/blocks';

const theme = createTheme();
export const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
export const DocsWrapper = ({ children, ...rest }: any) => (
  <DocsContainer {...rest}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </DocsContainer>
);
