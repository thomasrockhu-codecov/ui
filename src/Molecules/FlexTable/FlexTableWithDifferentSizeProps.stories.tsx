import React from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import FlexTable from './FlexTable';
import { Typography } from '../..';
import docs from './FlexTable.mdx';

export default {
  title: 'Molecules | FlexTable / FlexTable with different size props',
  decorators: [withKnobs],
  parameters: {
    component: FlexTable,
    ...docs.parameters,
  },
};

const StyledDiv = styled.div`
  background-color: ${p => p.theme.color.background};
  &:not(:last-of-type) {
    margin-bottom: ${p => p.theme.spacing.unit(10)}px;
  }
`;

const StyledFlexTable = styled(FlexTable)`
  &:not(:last-of-type) {
    margin-bottom: ${p => p.theme.spacing.unit(10)}px;
  }
`;

export const TablesWithDifferentDensities = () => {
  const TablesWithDifferentDensitiesExample = () => (
    <StyledDiv>
      <Typography type="primary">Default (Medium)</Typography>
      <StyledFlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>

      <Typography type="primary">Small</Typography>
      <StyledFlexTable density="s">
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>

      <Typography type="primary">Medium</Typography>
      <StyledFlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>

      <Typography type="primary">Large</Typography>
      <StyledFlexTable density="l">
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>
    </StyledDiv>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Tables With Different Densities</Typography>
      <TablesWithDifferentDensitiesExample />
    </StyledDiv>
  );
};

export const TablesWithDifferentFontSizes = () => {
  const TablesWithDifferentFontSizesExample = () => (
    <StyledDiv>
      <Typography type="primary">Default (Medium)</Typography>
      <StyledFlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>

      <Typography type="primary">Small</Typography>
      <StyledFlexTable fontSize="s">
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>

      <Typography type="primary">Medium</Typography>
      <StyledFlexTable fontSize="m">
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>
    </StyledDiv>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Tables With Different Font Sizes</Typography>
      <TablesWithDifferentFontSizesExample />
    </StyledDiv>
  );
};

export const TablesWithDifferentSizesInMobile = () => {
  const TablesWithDifferentSizesInMobileExample = () => (
    <StyledDiv>
      <Typography type="primary">Small density and font on desktop, large on mobile</Typography>
      <StyledFlexTable density="l" fontSize="m" md={{ density: 's', fontSize: 's' }}>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.FooterRow>
          <FlexTable.Footer columnId="column1">Footer 1</FlexTable.Footer>
          <FlexTable.Footer columnId="column2">Footer 2</FlexTable.Footer>
          <FlexTable.Footer columnId="column3">Footer 3</FlexTable.Footer>
        </FlexTable.FooterRow>
      </StyledFlexTable>
    </StyledDiv>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Tables With Different Sizes on mobile</Typography>
      <TablesWithDifferentSizesInMobileExample />
    </StyledDiv>
  );
};

export const TablesWithDifferentColumnDistanceOnMobile = () => {
  const TablesWithDifferentColumnDistanceOnMobileExample = () => (
    <StyledDiv>
      <StyledFlexTable columnDistance={2} sm={{ columnDistance: 10 }}>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2" justifyContent="flex-end">
            Header 2
          </FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>
    </StyledDiv>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Tables With Different Column Distance on mobile</Typography>
      <TablesWithDifferentColumnDistanceOnMobileExample />
    </StyledDiv>
  );
};
