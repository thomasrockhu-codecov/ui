import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../index';
import { IsomorphicMedia } from './IsomorphicMedia';

export const Element = () => (
  <ThemeProvider theme={createTheme()}>
    <>
      <IsomorphicMedia query={t => t.media.greaterThan(t.breakpoints.sm)}>gt sm</IsomorphicMedia>
      <IsomorphicMedia query={t => t.media.lessThan(t.breakpoints.sm)}>lt sm</IsomorphicMedia>
    </>
  </ThemeProvider>
);

export const HTML_FROM_SSR =
  '<div class="IsomorphicMedia__StyledDiv-qvvp3f-0 fjZVrq">gt sm</div><div class="IsomorphicMedia__StyledDiv-qvvp3f-0 difbEy">lt sm</div>';
