import React from 'react';
import { GridTable } from '../GridTable';
import { generateTableData } from './storyData';
import { StyledBackground } from '../../FlexTable/stories/storiesShared';
import { Button, Development, Link, Typography } from '../../..';

export default {
  title: 'Molecules / GridTable / Default Table',
  parameters: {
    component: GridTable,
  },
};

export const Showcase = () => {
  const Story = () => {
    return (
      <StyledBackground>
        <Typography type="title3">GridTable - Showcase</Typography>
        <GridTable minCellWidth={100} initialColumnSizes={['50px', '1fr', '1fr', '1fr']}>
          <GridTable.THead>
            <GridTable.Tr>
              <GridTable.Th></GridTable.Th>
              <GridTable.Th>
                <Typography weight="bold">Instrument</Typography>
              </GridTable.Th>
              <GridTable.Th>
                <Typography weight="bold">Development</Typography>
              </GridTable.Th>
              <GridTable.Th>
                <Typography weight="bold">Comment</Typography>
              </GridTable.Th>
            </GridTable.Tr>
          </GridTable.THead>
          <GridTable.TBody>
            <GridTable.Tr>
              <GridTable.Td>
                <Button>Köp</Button>
              </GridTable.Td>
              <GridTable.Td>
                <Typography>
                  <Link to="/">Mayo inc.</Link>
                </Typography>
              </GridTable.Td>
              <GridTable.Td>
                <Typography>
                  <Development percentage value={200} />
                </Typography>
              </GridTable.Td>
              <GridTable.Td>
                <Typography>This is a comment</Typography>
              </GridTable.Td>
            </GridTable.Tr>
            <GridTable.Tr>
              <GridTable.Td>
                <Button>Köp</Button>
              </GridTable.Td>
              <GridTable.Td>
                <Typography>
                  <Link to="/">Pickles AB</Link>
                </Typography>
              </GridTable.Td>
              <GridTable.Td>
                <Typography>
                  <Development percentage value={-20} />
                </Typography>
              </GridTable.Td>
              <GridTable.Td>
                <Typography>This is a comment</Typography>
              </GridTable.Td>
            </GridTable.Tr>
            <GridTable.Tr>
              <GridTable.Td>
                <Button>Köp</Button>
              </GridTable.Td>
              <GridTable.Td>
                <Typography>
                  <Link to="/">Butter Corp.</Link>
                </Typography>
              </GridTable.Td>
              <GridTable.Td>
                <Typography>
                  <Development percentage value={15} />
                </Typography>
              </GridTable.Td>
              <GridTable.Td>
                <Typography>This is a comment</Typography>
              </GridTable.Td>
            </GridTable.Tr>
          </GridTable.TBody>
        </GridTable>
      </StyledBackground>
    );
  };

  return <Story />;
};

export const BigTable = () => {
  const { headers, rows } = generateTableData(100, 10);

  const Story = () => {
    return (
      <GridTable minCellWidth={100}>
        <GridTable.THead>
          <GridTable.Tr>
            {headers.map(({ title }) => (
              <GridTable.Th>{title}</GridTable.Th>
            ))}
          </GridTable.Tr>
        </GridTable.THead>
        <GridTable.TBody>
          {rows.map((row) => (
            <GridTable.ExpandableRow>
              {row.map((cell) => (
                <GridTable.Td>{cell.content}</GridTable.Td>
              ))}
            </GridTable.ExpandableRow>
          ))}
        </GridTable.TBody>
      </GridTable>
    );
  };

  return (
    <StyledBackground>
      <Typography type="title3">Big GridTable</Typography>
      <Story />
    </StyledBackground>
  );
};
