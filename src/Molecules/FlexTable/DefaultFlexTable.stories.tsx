import React from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import FlexTable from './FlexTable';
import { Button, Typography, Flag, Icon, Flexbox } from '../..';
import { ICON_COLUMN_DEFAULT_FLEX_PROPS } from './shared/constants';
import docs from './FlexTable.mdx';

export default {
  title: 'Molecules | FlexTable / Default FlexTable',
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

export const DefaultTable = () => {
  const DefaultTableExample = () => (
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
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
      </FlexTable.Row>
    </StyledFlexTable>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Default Table</Typography>
      <DefaultTableExample />
    </StyledDiv>
  );
};

export const DefaultTableWithTitle = () => {
  const DefaultTableWithTitleExample = () => (
    <StyledFlexTable id="table-with-title" title="Table with title">
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
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
      </FlexTable.Row>
    </StyledFlexTable>
  );

  const DefaultTableWithTitleExampleTwo = () => (
    <StyledFlexTable id="some-other-table" title="Some other table">
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
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
      </FlexTable.Row>
    </StyledFlexTable>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Default Table With Title</Typography>
      <DefaultTableWithTitleExample />
      <DefaultTableWithTitleExampleTwo />
    </StyledDiv>
  );
};

export const DefaultTableWithCustomTitle = () => {
  const DefaultTableWithCustomTitleExample = () => {
    const CustomTitle: React.FC<{ country: string; name: string; shortName: string }> = ({
      country,
      name,
      shortName,
    }) => (
      <Flexbox container alignItems="baseline" gutter={1}>
        <Flexbox item>
          <Flag country={country} height={3} />
        </Flexbox>
        <Flexbox item>
          <Typography type="secondary" weight="bold">
            {name}
          </Typography>
        </Flexbox>
        <Flexbox item>
          <Typography type="secondary" color={(t) => t.color.label}>
            ({shortName})
          </Typography>
        </Flexbox>
      </Flexbox>
    );

    return (
      <StyledFlexTable
        id="custom-title"
        title={<CustomTitle country="SE" name="Ericsson Corporation" shortName="ERICSSON" />}
      >
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
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>
    );
  };

  return (
    <StyledDiv>
      <Typography type="title3">Default Table Custom With Title</Typography>
      <DefaultTableWithCustomTitleExample />
    </StyledDiv>
  );
};

export const DefaultTableWithFooter = () => {
  const DefaultTableWithFooterExample = () => (
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
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.FooterRow>
        <FlexTable.Footer columnId="column1">Footer 1</FlexTable.Footer>
        <FlexTable.Footer columnId="column2">Footer 2</FlexTable.Footer>
        <FlexTable.Footer columnId="column3">Footer 3</FlexTable.Footer>
      </FlexTable.FooterRow>
    </StyledFlexTable>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Default Table With Footer</Typography>
      <DefaultTableWithFooterExample />
    </StyledDiv>
  );
};

export const DefaultTableWithActionsColumn = () => {
  const DefaultTableWithActionsColumnExample = () => (
    <StyledFlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        <FlexTable.Header columnId="actionsColumn" {...ICON_COLUMN_DEFAULT_FLEX_PROPS} />
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        <FlexTable.Cell columnId="actionsColumn" {...ICON_COLUMN_DEFAULT_FLEX_PROPS}>
          <Button variant="neutral">
            <Icon.ThreeDots />
          </Button>
        </FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        <FlexTable.Cell columnId="actionsColumn" {...ICON_COLUMN_DEFAULT_FLEX_PROPS}>
          <Button variant="neutral">
            <Icon.ThreeDots />
          </Button>
        </FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
        <FlexTable.Cell columnId="actionsColumn" {...ICON_COLUMN_DEFAULT_FLEX_PROPS}>
          <Button variant="neutral">
            <Icon.ThreeDots />
          </Button>
        </FlexTable.Cell>
      </FlexTable.Row>
    </StyledFlexTable>
  );

  return (
    <StyledDiv>
      <Typography type="title3">Default Table With Actions Column</Typography>
      <DefaultTableWithActionsColumnExample />
    </StyledDiv>
  );
};
