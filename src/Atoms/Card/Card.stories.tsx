import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Props } from './Card.types';

import { Card } from '../..';
import { Display } from '../../common/Display';

const StyledContent = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content: React.FC<Props> = ({ children }) => <StyledContent>{children}</StyledContent>;

storiesOf('Atoms | Card', module)
  .add('Basic Card', () => (
    <Card>
      <Content>A Card as a div containing content</Content>
    </Card>
  ))
  .add('Card rendered with different html tags', () => (
    <Display
      items={[
        {
          title: 'Section',
          component: (
            <Card as="section">
              <Content>A Card as a section containing content</Content>
            </Card>
          ),
        },
        {
          title: 'Article',
          component: (
            <Card as="article">
              <Content>A Card as a article containing content</Content>
            </Card>
          ),
        },
      ]}
    />
  ));
