import React from 'react';
import styled from 'styled-components';
import { FadedScroll, List, ListItem } from '../..';
import mdx from './FadedScroll.mdx';

export default {
  title: 'Atoms | FadedScroll',
  parameters: {
    component: FadedScroll,
    docs: {
      page: mdx,
    },
  },
};

const ParentWithHeight = styled.div`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    height: 220px;
  }
`;

const StyledListItem = styled(ListItem)`
  padding: ${p => p.theme.spacing.unit(2)}px;
`;

const content = (
  <List>
    <StyledListItem>Lorem ipsum dolor sit amet</StyledListItem>
    <StyledListItem>Sed consequat erat lacinia</StyledListItem>
    <StyledListItem>Class aptent taciti sociosqu</StyledListItem>
    <StyledListItem>Aliquam bibendum tortor dui</StyledListItem>
    <StyledListItem>Quisque ac ullamcorper eros</StyledListItem>
    <StyledListItem>Etiam urna elit, mollis vel arcu id</StyledListItem>
    <StyledListItem>Sed consequat erat lacinia</StyledListItem>
    <StyledListItem>Aliquam bibendum tortor dui</StyledListItem>
  </List>
);

export const defaultStory = () => <FadedScroll maxHeight={40}>{content}</FadedScroll>;

defaultStory.story = {
  name: 'Default, using maxHeight prop',
};

export const withHeightDeclaredByParent = () => (
  <ParentWithHeight>
    <FadedScroll>{content}</FadedScroll>
  </ParentWithHeight>
);

withHeightDeclaredByParent.story = {
  name: 'With height declared by parent',
};

export const withHeightOfFadeChanged = () => (
  <FadedScroll fadeHeight={5} maxHeight="220px">
    {content}
  </FadedScroll>
);

withHeightOfFadeChanged.story = {
  name: 'With height of fade changed',
};

export const withMobileFadeEnabled = () => (
  <div style={{ height: '220px' }}>
    <FadedScroll enableMobileFade>{content}</FadedScroll>
  </div>
);

withMobileFadeEnabled.story = {
  name: 'With mobile fade enabled',
};
