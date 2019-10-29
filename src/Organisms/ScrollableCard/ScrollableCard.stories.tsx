import React from 'react';
import styled from 'styled-components';
import { Box, ScrollableCard, List, ListItem } from '../..';
import mdx from './ScrollableCard.mdx';

export default {
  title: 'Organisms | ScrollableCard',
  parameters: {
    component: ScrollableCard,
    docs: {
      page: mdx,
    },
  },
};

const Contained = styled.div`
  height: 250px;
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

export const defaultStory = () => (
  <ScrollableCard title="Title">
    <Box px={4}>{content}</Box>
  </ScrollableCard>
);

defaultStory.story = {
  name: 'Default',
};

export const withHeightContained = () => (
  <Contained>
    <ScrollableCard title="Height contained">
      <Box px={4}>{content}</Box>
    </ScrollableCard>
  </Contained>
);

withHeightContained.story = {
  name: 'Height contained',
};
