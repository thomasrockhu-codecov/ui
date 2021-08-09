import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import styled from 'styled-components';
import { FadedScroll, List, ListItem, Typography } from '../..';
import docs from './FadedScroll.mdx';

export default {
  title: 'Atoms / FadedScroll',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const FadedScrollWithHeightDesktopOnly = styled(FadedScroll)`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    height: 220px;
  }
`;

const FadedScrollWithHeight = styled(FadedScroll)`
  height: 220px;
`;

const StyledListItem = styled(ListItem)`
  padding: ${(p) => p.theme.spacing.unit(2)}px;
`;

const content = (
  <List>
    <StyledListItem>
      <Typography>Lorem ipsum dolor sit amet</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Class aptent taciti sociosqu</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Quisque ac ullamcorper eros</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Etiam urna elit, mollis vel arcu id</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Lorem ipsum dolor sit amet</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Class aptent taciti sociosqu</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Quisque ac ullamcorper eros</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Etiam urna elit, mollis vel arcu id</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Lorem ipsum dolor sit amet</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Class aptent taciti sociosqu</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Quisque ac ullamcorper eros</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Etiam urna elit, mollis vel arcu id</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Lorem ipsum dolor sit amet</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Class aptent taciti sociosqu</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Quisque ac ullamcorper eros</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Etiam urna elit, mollis vel arcu id</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
  </List>
);

export const DefaultStory = () => (
  <FadedScroll backgroundColor={useDarkMode() ? '#282823' : '#FFFFFF'} maxHeight={40}>
    {content}
  </FadedScroll>
);

DefaultStory.story = {
  name: 'Default, using maxHeight prop',
};

export const WithAutoHeightOfScrollableArea = () => (
  <FadedScrollWithHeightDesktopOnly backgroundColor={useDarkMode() ? '#282823' : '#FFFFFF'}>
    {content}
  </FadedScrollWithHeightDesktopOnly>
);

WithAutoHeightOfScrollableArea.story = {
  name: 'With height of scrollable area being whatever is available',
};

export const WithHeightOfFadeChanged = () => (
  <FadedScroll
    backgroundColor={useDarkMode() ? '#282823' : '#FFFFFF'}
    fadeHeight={5}
    maxHeight={45}
  >
    {content}
  </FadedScroll>
);

WithHeightOfFadeChanged.story = {
  name: 'With height of fade changed',
};

export const WithMobileFadeEnabled = () => (
  <FadedScrollWithHeight backgroundColor={useDarkMode() ? '#282823' : '#FFFFFF'} enableMobileFade>
    {content}
  </FadedScrollWithHeight>
);

WithMobileFadeEnabled.story = {
  name: 'With mobile fade enabled',
};

export const WithTopFadeDisabled = () => (
  <FadedScroll
    backgroundColor={useDarkMode() ? '#282823' : '#FFFFFF'}
    maxHeight={45}
    disableTopFade
  >
    {content}
  </FadedScroll>
);

WithTopFadeDisabled.story = {
  name: 'With top fade disabled',
};
