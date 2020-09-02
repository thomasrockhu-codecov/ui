import React from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import FlexTable from './FlexTable';
import { Typography, Flag } from '../..';
import docs from './FlexTable.mdx';

export default {
  title: 'Molecules | FlexTable / FlexTable with different columns',
  decorators: [withKnobs],
  parameters: {
    component: FlexTable,
    ...docs.parameters,
  },
};

const StyledDiv = styled.div`
  background-color: ${(p) => p.theme.color.background};
  &:not(:last-of-type) {
    margin-bottom: ${(p) => p.theme.spacing.unit(10)}px;
  }
`;

const StyledFlexTable = styled(FlexTable)`
  &:not(:last-of-type) {
    margin-bottom: ${(p) => p.theme.spacing.unit(10)}px;
  }
`;

export const DifferentAlignmentsTable = () => {
  const DifferentAlignmentsTableExample = () => (
    <StyledFlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Left</FlexTable.Header>
        <FlexTable.Header columnId="column2" justifyContent="flex-end">
          Right
        </FlexTable.Header>
        <FlexTable.Header columnId="column3" justifyContent="flex-end">
          Right
        </FlexTable.Header>
        <FlexTable.Header columnId="column4" justifyContent="center">
          Center
        </FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 1-4</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 2-4</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 3-4</FlexTable.Cell>
      </FlexTable.Row>
    </StyledFlexTable>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Table With Different Alignments</Typography>
      <DifferentAlignmentsTableExample />
    </StyledDiv>
  );
};

export const ColumnWidthTableWithCustomFlagCell = () => {
  const FlagCell: React.FC<{ columnId: string }> = React.memo(({ children, columnId }) => (
    <FlexTable.Cell columnId={columnId}>
      <FlexTable.CellInlineContainer>
        <FlexTable.Cell.TextWrapper>{children}</FlexTable.Cell.TextWrapper>
        <Flag country="SE" />
      </FlexTable.CellInlineContainer>
    </FlexTable.Cell>
  ));

  const ColumnWidthTableWithCustomFlagCellExample = () => (
    <StyledFlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header flex="1" columnId="column1">
          Flex 1
        </FlexTable.Header>
        <FlexTable.Header flex="0 15%" columnId="column2">
          Fifteen percent
        </FlexTable.Header>
        <FlexTable.Header flex="0 100px" columnId="column3">
          Loooooooooooooong header set width
        </FlexTable.Header>
        <FlexTable.Header columnId="column4">Default</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">
          Very long cell content that should be truncated or ellipsized depepending on your language
          preferences
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 1-4</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
        <FlagCell columnId="column3">Long cell with flag</FlagCell>
        <FlexTable.Cell columnId="column4">Cell 2-4</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 3-4</FlexTable.Cell>
      </FlexTable.Row>
    </StyledFlexTable>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Table With Different Widths and Custom Flag Cell</Typography>
      <ColumnWidthTableWithCustomFlagCellExample />
    </StyledDiv>
  );
};

export const ColumnWidthSortableTable = () => {
  const FlagCell: React.FC<{ columnId: string }> = React.memo(({ children, columnId }) => (
    <FlexTable.Cell columnId={columnId}>
      <FlexTable.CellInlineContainer>
        <FlexTable.Cell.TextWrapper>{children}</FlexTable.Cell.TextWrapper>
        <Flag country="SE" />
      </FlexTable.CellInlineContainer>
    </FlexTable.Cell>
  ));

  const ColumnWidthSortableTableExample = () => (
    <StyledFlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header sortable flex="1" columnId="column1">
          Flex 1
        </FlexTable.Header>
        <FlexTable.Header sortable flex="0 15%" columnId="column2">
          Fifteen percent
        </FlexTable.Header>
        <FlexTable.Header sortable flex="0 100px" columnId="column3">
          Loooooooooooooong header set width
        </FlexTable.Header>
        <FlexTable.Header sortable columnId="column4">
          Default
        </FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">
          Very long cell content that should be truncated or ellipsized depepending on your language
          preferences
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 1-4</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
        <FlagCell columnId="column3">Long cell with flag</FlagCell>
        <FlexTable.Cell columnId="column4">Cell 2-4</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 3-4</FlexTable.Cell>
      </FlexTable.Row>
    </StyledFlexTable>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Sortable Table With Column Width Set</Typography>
      <ColumnWidthSortableTableExample />
    </StyledDiv>
  );
};

export const MediaColumns = () => {
  const MediaColumnsExample = () => (
    <StyledFlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2" hidden md={{ hidden: false }}>
          Hidden column on mobile
        </FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Hidden on mobile</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Hidden on mobile</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Hidden on mobile</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
      </FlexTable.Row>
    </StyledFlexTable>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Table With Columns Hidden Based On Screen Size</Typography>
      <MediaColumnsExample />
    </StyledDiv>
  );
};
