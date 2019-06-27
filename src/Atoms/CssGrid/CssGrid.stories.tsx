import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import MD from 'react-markdown';
import docs from './CssGrid.md';

import { CssGrid as Grid, Typography } from '../..';

const StyledContent = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #eee;
  height: 100%;
`;

const StyledMarkdownContainer = styled.div`
  img {
    display: block;
    max-width: 600px;
  }
`;

const Content = ({ children }: any) => <StyledContent>{children}</StyledContent>;

const ComponentThatDoesSomethingOnMount = () => {
  React.useEffect(() => console.log('By the way, I`ve mounted!'), []);
  return (
    <div>
      This item is mounted and stays mounted no matter what. However, it&lsquo;d be hidden with css
    </div>
  );
};

const ComponentThatLogsRender: React.FC<any> = ({ children }) => {
  console.log('Im rendered!');
  return children;
};

storiesOf('Atoms | CssGrid', module)
  .add('Documentation', () => (
    <StyledMarkdownContainer>
      <Typography>
        <MD source={docs} />
      </Typography>
    </StyledMarkdownContainer>
  ))
  .add('Simple CssGrid', () => (
    <Grid.Container
      // prettier-ignore
      areas={[
        ['header', 'header',  'header'],
        ['menu',   'content', 'ads'],
        ['footer', 'footer',  'footer'],
      ]}
    >
      <Grid.Item area="header">
        <Content>Header</Content>
      </Grid.Item>
      <Grid.Item area="content">
        <Content>Content</Content>
      </Grid.Item>
      <Grid.Item area="menu">
        <Content>Menu</Content>
      </Grid.Item>
      <Grid.Item area="ads">
        <Content>Ads</Content>
      </Grid.Item>
      <Grid.Item area="footer">
        <Content>Footer</Content>
      </Grid.Item>
    </Grid.Container>
  ))
  .add('CssGrid with custom gutter', () => (
    <Grid.Container
      gutter={0}
      // prettier-ignore
      areas={[
        ['left', 'top',     'sidebar'],
        ['left', 'content', 'sidebar'],
        ['left', 'content', 'sidebar'],
      ]}
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      <Grid.Item area="top">
        <Content>Top</Content>
      </Grid.Item>
      <Grid.Item area="content">
        <Content>Content</Content>
      </Grid.Item>
      <Grid.Item area="sidebar">
        <Content>Sidebar</Content>
      </Grid.Item>
    </Grid.Container>
  ))
  .add('CssGrid with object as gutter and custom sized columns', () => (
    <Grid.Container
      gutter={{ row: 6, col: 4 }}
      templateColumns={['1fr', '2fr', '1fr']}
      // prettier-ignore
      areas={[
        ['left', 'top',     'messages'],
        ['left', 'top',     'order'],
        ['left', 'top',     'sidebar'],
        ['left', 'top',     'sidebar'],
        ['left', 'content', 'sidebar'],
      ]}
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      <Grid.Item area="top">
        <Content>Top</Content>
      </Grid.Item>
      <Grid.Item area="content">
        <Content>Content</Content>
      </Grid.Item>
      <Grid.Item area="messages">
        <Content>Messages</Content>
      </Grid.Item>
      <Grid.Item area="order">
        <Content>Order</Content>
      </Grid.Item>
      <Grid.Item area="sidebar">
        <Content>Sidebar</Content>
      </Grid.Item>
    </Grid.Container>
  ))
  .add('CssGrid with custom templateColumns', () => (
    <Grid.Container
      templateColumns={[3, 6, 3]}
      // prettier-ignore
      areas={[
        ['left', 'top',     'sidebar'],
        ['left', 'content', 'sidebar'],
        ['left', 'content', 'sidebar'],
      ]}
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      <Grid.Item area="top">
        <Content>Top</Content>
      </Grid.Item>
      <Grid.Item area="content">
        <Content>Content</Content>
      </Grid.Item>
      <Grid.Item area="sidebar">
        <Content>Sidebar</Content>
      </Grid.Item>
    </Grid.Container>
  ))
  .add('CssGrid with different layouts for different screen sizes', () => (
    <Grid.Container
      templateColumns={[6, 6]}
      // prettier-ignore
      areas={[
      ['top',     'top'],
      ['left',    'sidebar'],
      ['content', 'sidebar'],
    ]}
      sm={{
        templateColumns: [3, 6, 3],
        templateRows: ['auto', '1fr', '1fr'],
        // prettier-ignore
        areas: [
        ['left', 'top',     'sidebar'],
        ['left', 'content', 'sidebar'],
        ['left', 'content', 'sidebar'],
      ]
      }}
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      <Grid.Item area="top">
        <Content>Top</Content>
      </Grid.Item>
      <Grid.Item area="content">
        <Content>Content</Content>
      </Grid.Item>
      <Grid.Item area="sidebar">
        <Content>Sidebar</Content>
      </Grid.Item>
    </Grid.Container>
  ))
  .add('Experimental! minmax() does not work in IE11', () => (
    <Grid.Container
      templateColumns={['1fr', 'minmax(30ch, 2fr)', '1fr']}
      // prettier-ignore
      areas={[
        ['left', 'top',     'sidebar'],
        ['left', 'content', 'sidebar'],
      ]}
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      <Grid.Item area="top">
        <Content>Top</Content>
      </Grid.Item>
      <Grid.Item area="content">
        <Content>Content</Content>
      </Grid.Item>
      <Grid.Item area="sidebar">
        <Content>Sidebar</Content>
      </Grid.Item>
    </Grid.Container>
  ))
  .add('Shown on md+, hidden on small screens', () => (
    <Grid.Container
      templateColumns={['1fr', '1fr', '1fr']}
      // prettier-ignore
      templateRows={[
        'auto',
        'auto'
      ]}
      // prettier-ignore
      areas={[
        ['left', 'content', 'content'],
        ['left', 'content', 'content'],
      ]}
      md={{
        templateColumns: ['1fr'],
        areas: [['left'], ['top'], ['content']],
      }}
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      <Grid.Item area="top">
        <Content>
          <ComponentThatDoesSomethingOnMount />
        </Content>
      </Grid.Item>
      <Grid.Item area="content">
        <Content>
          <ComponentThatLogsRender>Content</ComponentThatLogsRender>
        </Content>
      </Grid.Item>
      <Grid.Item area="non-existing">
        <Content>something that doesn&lsquo;t exist</Content>
      </Grid.Item>
    </Grid.Container>
  ))
  .add('Shown on small screen sizes, hidden on md+', () => (
    <Grid.Container
      templateColumns={['1fr', '1fr', '1fr']}
      // prettier-ignore
      areas={[
        ['left', 'top', 'top'],
        ['left', 'content', 'content'],
      ]}
      md={{
        templateColumns: ['1fr'],
        // prettier-ignore
        areas: [
          ['left'], 
          ['content']
        ]
      }}
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      <Grid.Item area="top">
        <Content>
          <ComponentThatDoesSomethingOnMount />
        </Content>
      </Grid.Item>
      <Grid.Item area="content">
        <Content>
          <ComponentThatLogsRender>Content</ComponentThatLogsRender>
        </Content>
      </Grid.Item>
      <Grid.Item area="non-existing">
        <Content>something that doesn&lsquo;t exist</Content>
      </Grid.Item>
    </Grid.Container>
  ))
  .add('Conditionally hidden: good way [hidden]', () => {
    const isHidden = true;
    return (
      <Grid.Container
        templateColumns={['1fr', '1fr', '1fr']}
        areas={
          // prettier-ignore
          isHidden ? 
          [
            ['left', 'top', 'top'],
            ['left', 'content', 'content']
          ] : 
          [['left', 'content', 'content']]
        }
      >
        <Grid.Item area="left">
          <Content>Left</Content>
        </Grid.Item>
        <Grid.Item area="top">
          <Content>
            <ComponentThatDoesSomethingOnMount />
          </Content>
        </Grid.Item>
        <Grid.Item area="content">
          <Content>
            <ComponentThatLogsRender>Content</ComponentThatLogsRender>
          </Content>
        </Grid.Item>
      </Grid.Container>
    );
  })
  .add('Conditionally hidden: good way [shown]', () => {
    const isHidden = false;
    return (
      <Grid.Container
        templateColumns={['1fr', '1fr', '1fr']}
        areas={
          // prettier-ignore
          isHidden ? 
          [
            ['left', 'top', 'top'],
            ['left', 'content', 'content']
          ] : 
          [['left', 'content', 'content']]
        }
      >
        <Grid.Item area="left">
          <Content>Left</Content>
        </Grid.Item>
        <Grid.Item area="top">
          <Content>
            <ComponentThatDoesSomethingOnMount />
          </Content>
        </Grid.Item>
        <Grid.Item area="content">
          <Content>
            <ComponentThatLogsRender>Content</ComponentThatLogsRender>
          </Content>
        </Grid.Item>
      </Grid.Container>
    );
  })
  .add('Conditionally hidden: WRONG way [hidden]', () => {
    const isHidden = true;
    return (
      <Grid.Container
        templateColumns={['1fr', '1fr', '1fr']}
        areas={
          // prettier-ignore
          [
            ['left', 'top', 'top'],
            ['left', 'content', 'content']
          ]
        }
      >
        <Grid.Item area="left">
          <Content>Left</Content>
        </Grid.Item>
        {!isHidden && (
          <Grid.Item area="top">
            <Content>
              <ComponentThatDoesSomethingOnMount />
            </Content>
          </Grid.Item>
        )}
        <Grid.Item area="content">
          <Content>
            <ComponentThatLogsRender>Content</ComponentThatLogsRender>
          </Content>
        </Grid.Item>
      </Grid.Container>
    );
  })
  .add('Conditionally hidden: WRONG way [shown]', () => {
    const isHidden = false;
    return (
      <Grid.Container
        templateColumns={['1fr', '1fr', '1fr']}
        areas={
          // prettier-ignore
          [
            ['left', 'top', 'top'],
            ['left', 'content', 'content']
          ]
        }
      >
        <Grid.Item area="left">
          <Content>Left</Content>
        </Grid.Item>
        {!isHidden && (
          <Grid.Item area="top">
            <Content>
              <ComponentThatDoesSomethingOnMount />
            </Content>
          </Grid.Item>
        )}
        <Grid.Item area="content">
          <Content>
            <ComponentThatLogsRender>Content</ComponentThatLogsRender>
          </Content>
        </Grid.Item>
      </Grid.Container>
    );
  });
