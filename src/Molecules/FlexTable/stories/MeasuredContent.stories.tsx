import React from 'react';
import FlexTable from '../FlexTable';
import { Typography } from '../../..';
import docs from '../FlexTable.mdx';
import { StyledBackground } from './storiesShared';

export default {
  title: 'Molecules / FlexTable / With measured content',
  parameters: {
    component: FlexTable,
    docs: {
      page: docs,
    },
  },
};

export const MeasuredContent = () => (
  <StyledBackground>
    <Typography type="title3">Table With Measured Content</Typography>
    <div style={{ width: '800px' }}>
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header fitContent columnId="column1" justifyContent="flex-end">
            Im just a very very very very very long string here to make your life miserable
          </FlexTable.Header>
          <FlexTable.Header columnId="column2" justifyContent="flex-end">
            <div>Im a div</div>
          </FlexTable.Header>
          <FlexTable.Header columnId="column3" justifyContent="center">
            <>Im a child string to a fragment</>
          </FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1" justifyContent="flex-end">
            Im just a pretty long string here to make your life miserable
          </FlexTable.Cell>
          <FlexTable.Cell columnId="column2" justifyContent="flex-end">
            <div>Im a divitydivitydivity div</div>
          </FlexTable.Cell>
          <FlexTable.Cell columnId="column3" justifyContent="center">
            <>
              <div>Im a child div to a fragment</div>
            </>
          </FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1" justifyContent="flex-end">
            Cell 2-2
          </FlexTable.Cell>
          <FlexTable.Cell columnId="column2" justifyContent="flex-end">
            Cell 2-3
          </FlexTable.Cell>
          <FlexTable.Cell columnId="column3" justifyContent="center">
            Cell 2-4
          </FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1" justifyContent="flex-end">
            Cell 3-2
          </FlexTable.Cell>
          <FlexTable.Cell columnId="column2" justifyContent="flex-end">
            Cell 3-3
          </FlexTable.Cell>
          <FlexTable.Cell columnId="column3" justifyContent="center">
            Cell 3-4
          </FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    </div>
  </StyledBackground>
);
