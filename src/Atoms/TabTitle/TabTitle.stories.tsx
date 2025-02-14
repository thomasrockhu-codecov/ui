import React from 'react';
import styled from 'styled-components';
import { Flexbox, TabTitle } from '../..';

const Container = styled.div`
  display: inline-flex;
`;

export default {
  title: 'Atoms / TabTitle',
  parameters: {
    component: TabTitle,
  },
};

export const defaultStory = () => (
  <Container>
    <TabTitle>This is tab title</TabTitle>
  </Container>
);

defaultStory.story = {
  name: 'Default',
};

export const largeStory = () => (
  <Container>
    <TabTitle variant="large">This is large tab title</TabTitle>
  </Container>
);

largeStory.story = {
  name: 'Large',
};

export const activeStory = () => (
  <Container>
    <TabTitle active>This is tab title</TabTitle>
  </Container>
);

activeStory.story = {
  name: 'Active',
};

export const withHeightModified = () => (
  <Container>
    <TabTitle height={11} active>
      This is tab title
    </TabTitle>
  </Container>
);

withHeightModified.story = {
  name: 'With height modified',
};

export const integrationWithFlexbox = () => (
  <Flexbox container direction="row">
    <Flexbox item>
      <Container>
        <TabTitle>TabTitle1</TabTitle>
      </Container>
    </Flexbox>
    <Flexbox item>
      <Container>
        <TabTitle active>TabTitle2</TabTitle>
      </Container>
    </Flexbox>
    <Flexbox item>
      <Container>
        <TabTitle>TabTitle3</TabTitle>
      </Container>
    </Flexbox>
  </Flexbox>
);

integrationWithFlexbox.story = {
  name: 'Integration: with Flexbox',
};
