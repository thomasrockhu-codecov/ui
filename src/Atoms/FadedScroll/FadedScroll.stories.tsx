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

const ContainingParent = styled.div`
  height: 200px;
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

export const defaultStory = () => <FadedScroll maxHeightDesktop={40}>{content}</FadedScroll>;

defaultStory.story = {
  name: 'Default',
};

export const withHeightContainedByParent = () => (
  <ContainingParent>
    <FadedScroll>{content}</FadedScroll>
  </ContainingParent>
);

withHeightContainedByParent.story = {
  name: 'With height contained by parent',
};

export const withHeightOfFadeChanged = () => (
  <ContainingParent>
    <FadedScroll fadeHeight={5}>{content}</FadedScroll>
  </ContainingParent>
);

withHeightOfFadeChanged.story = {
  name: 'With height of fade changed',
};
