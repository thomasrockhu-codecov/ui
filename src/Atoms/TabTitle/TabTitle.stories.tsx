import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { TabTitle, Flexbox } from '../..';

const Container = styled.div`
  height: ${p => p.theme.spacing.unit(8)}px;
  display: flex;
`;

storiesOf('Atoms | TabTitle', module)
  .add('Default', () => (
    <Container>
      <TabTitle>This is tab title</TabTitle>
    </Container>
  ))
  .add('Active', () => (
    <Container>
      <TabTitle active>This is tab title</TabTitle>
    </Container>
  ))
  .add('Integration: with Flexbox', () => (
    <Flexbox container direction="row" height={8}>
      <Flexbox item container>
        <TabTitle>TabTitle1</TabTitle>
      </Flexbox>
      <Flexbox item container>
        <TabTitle active>TabTitle2</TabTitle>
      </Flexbox>
      <Flexbox item container>
        <TabTitle>TabTitle3</TabTitle>
      </Flexbox>
    </Flexbox>
  ));
