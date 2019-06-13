import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HashRouter } from 'react-router-dom';
import { PageHeaderCard, Flexbox, Button, Box, TabsNav, Separator } from '../..';

storiesOf('Molecules | PageHeader', module)
  .add('Regular page header', () => <PageHeaderCard title="Your darkest loaves" />)
  .add('Page header with children', () => (
    <PageHeaderCard title="Your darkest loaves">
      <Box py={2} sm={{ py: 0 }}>
        <Flexbox container gutter={2} alignItems="center" justifyContent="space-between">
          <Flexbox item>The eternal techlead, The portugese friend</Flexbox>
          <Flexbox item>
            <Button>Click here to recruit carl</Button>
          </Flexbox>
        </Flexbox>
      </Box>
    </PageHeaderCard>
  ))
  .add('Page header with tabs', () => (
    <HashRouter>
      <PageHeaderCard title="Your darkest loaves">
        <Flexbox container direction="column" gutter={0} height={10}>
          <Flexbox item>
            <TabsNav>
              <TabsNav.Tab
                title="Link to /route1"
                to="/route1"
                onTitleClick={action('Clicked title1')}
              />
              <TabsNav.Tab
                title={<div>Link to /route2</div>}
                to="/route2"
                onTitleClick={action('Clicked title2')}
              />
            </TabsNav>
          </Flexbox>
          <Flexbox item>
            <Separator />
          </Flexbox>
        </Flexbox>
      </PageHeaderCard>
    </HashRouter>
  ));
