import React from 'react';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { Flexbox } from '../..';

const Content = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #eee;
  height: 100%;
`;

export default {
  title: 'Atoms / Flexbox',
  parameters: {
    component: Flexbox,
  },
  decorators: [withKnobs],
};

export const defaultStory = () => (
  <Flexbox container>
    <Flexbox item>
      <Content>Col 1</Content>
    </Flexbox>
    <Flexbox item>
      <Content>Col 2</Content>
    </Flexbox>
    <Flexbox item>
      <Content>Col 3</Content>
    </Flexbox>
  </Flexbox>
);

defaultStory.story = {
  name: 'Default',
};

export const columnSizedFlexboxes = () => (
  <Flexbox container>
    <Flexbox item size={3}>
      <Content>Col 1</Content>
    </Flexbox>
    <Flexbox item size={6}>
      <Content>Col 2</Content>
    </Flexbox>
    <Flexbox item size={3}>
      <Content>Col 3</Content>
    </Flexbox>
  </Flexbox>
);

columnSizedFlexboxes.story = {
  name: 'Column sized flexboxes',
};

export const withCustomGutter = () => (
  <Flexbox container gutter={5}>
    <Flexbox item size={6}>
      <Content>Col 1</Content>
    </Flexbox>
    <Flexbox item size={6}>
      <Content>Col 2</Content>
    </Flexbox>
  </Flexbox>
);

withCustomGutter.story = {
  name: 'With custom gutter',
};

export const withDirectionColumn = () => (
  <Flexbox container direction="column">
    <Flexbox item order={2}>
      <Content>Col 1</Content>
    </Flexbox>
    <Flexbox item order={1}>
      <Content>Col 2</Content>
    </Flexbox>
    <Flexbox item order={3}>
      <Content>Col 3</Content>
    </Flexbox>
  </Flexbox>
);

withDirectionColumn.story = {
  name: 'With direction: column',
};

export const withConditionallyHiddenFlexItem = () => {
  const showFirstItem = false;
  return (
    <Flexbox container>
      {showFirstItem && (
        <Flexbox item order={2}>
          <Content>Col 1</Content>
        </Flexbox>
      )}
      <Flexbox item order={1}>
        <Content>Col 2</Content>
      </Flexbox>
    </Flexbox>
  );
};

withConditionallyHiddenFlexItem.story = {
  name: 'With conditionally hidden flex item',
};

export const withConditionallyVisibleFlexItem = () => {
  const showFirstItem = true;
  return (
    <Flexbox container>
      {showFirstItem && (
        <Flexbox item order={2}>
          <Content>Col 1</Content>
        </Flexbox>
      )}
      <Flexbox item order={1}>
        <Content>Col 2</Content>
      </Flexbox>
    </Flexbox>
  );
};

withConditionallyVisibleFlexItem.story = {
  name: 'With conditionally visible flex item',
};

export const withContainerAndItemProps = () => {
  return (
    <Flexbox container gutter={5}>
      <Flexbox container item direction="column" gutter={5}>
        <Flexbox item>
          <Content>First element here</Content>
        </Flexbox>
        <Flexbox item>
          <Content>Second element here</Content>
        </Flexbox>
      </Flexbox>
      <Flexbox item>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus neque in venenatis
          faucibus. Fusce vitae maximus diam. Ut placerat lacus id porttitor tristique. Mauris in
          neque tempus, venenatis metus vitae, pellentesque massa. Etiam blandit lacus diam,
          dignissim posuere massa semper maximus. In pretium commodo nisl sed ultrices. Duis gravida
          diam ac nisl sodales mollis. Quisque iaculis semper mi, eu interdum elit molestie quis.
          Vivamus rutrum cursus interdum. Suspendisse vehicula quam mi, a efficitur ante egestas
          eget.
        </Content>
      </Flexbox>
    </Flexbox>
  );
};

withContainerAndItemProps.story = {
  name: 'With container and item props',
};

export const withBreakpointProps = () => {
  return (
    <Flexbox
      container
      gutter={4}
      direction="column"
      sm={{ gutter: 6 }}
      md={{ gutter: 6, direction: 'row' }}
      lg={{ gutter: 10, direction: 'row' }}
    >
      <Flexbox item>
        <Content>First element here</Content>
      </Flexbox>
      <Flexbox item>
        <Content>Second element here</Content>
      </Flexbox>
      <Flexbox item>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus neque in venenatis
          faucibus. Fusce vitae maximus diam. Ut placerat lacus id porttitor tristique. Mauris in
          neque tempus, venenatis metus vitae, pellentesque massa. Etiam blandit lacus diam,
          dignissim posuere massa semper maximus. In pretium commodo nisl sed ultrices. Duis gravida
          diam ac nisl sodales mollis. Quisque iaculis semper mi, eu interdum elit molestie quis.
          Vivamus rutrum cursus interdum. Suspendisse vehicula quam mi, a efficitur ante egestas
          eget.
        </Content>
      </Flexbox>
    </Flexbox>
  );
};

withBreakpointProps.story = {
  name: 'With breakpoint props',
};

const GrowingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #eee;
`;

export const widthAndHeightInNumbers = () => (
  <Flexbox
    container
    width={number('Width', 100)}
    height={number('Height', 100)}
    alignItems="center"
    justifyContent="space-between"
    gutter={5}
  >
    <Flexbox item height="100%">
      <GrowingDiv>One</GrowingDiv>
    </Flexbox>
    <Flexbox item height="100%">
      <GrowingDiv>Two</GrowingDiv>
    </Flexbox>
    <Flexbox item height="100%">
      <GrowingDiv>Three</GrowingDiv>
    </Flexbox>
  </Flexbox>
);

widthAndHeightInNumbers.story = {
  name: 'With width and height as number',
};

export const widthAndHeightInPercentage = () => (
  <div style={{ height: '500px' }}>
    <Flexbox
      container
      width={text('Width', '50%')}
      height={text('Height', '50%')}
      alignItems="center"
      justifyContent="space-between"
      gutter={5}
    >
      <Flexbox item height="100%">
        <GrowingDiv>One</GrowingDiv>
      </Flexbox>
      <Flexbox item height="100%">
        <GrowingDiv>Two</GrowingDiv>
      </Flexbox>
      <Flexbox item height="100%">
        <GrowingDiv>Three</GrowingDiv>
      </Flexbox>
    </Flexbox>
  </div>
);

widthAndHeightInPercentage.story = {
  name: 'With width and height as percentage',
};

export const differentSizedItems = () => (
  <Flexbox
    container
    width={100}
    height={100}
    alignItems="center"
    justifyContent="space-between"
    gutter={5}
  >
    <Flexbox item width="100%" height="100%">
      <GrowingDiv>One</GrowingDiv>
    </Flexbox>
    <Flexbox item width="66%" height="66%">
      <GrowingDiv>Two</GrowingDiv>
    </Flexbox>
    <Flexbox item width="33%" height="33%">
      <GrowingDiv>Three</GrowingDiv>
    </Flexbox>
  </Flexbox>
);

differentSizedItems.story = {
  name: 'Different sized items',
};
