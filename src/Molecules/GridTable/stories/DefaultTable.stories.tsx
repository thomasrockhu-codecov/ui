import React from 'react';
import GridTableComponent from '../GridTable';
import { generateTableData } from './storyData';
import { StyledBackground } from '../../FlexTable/stories/storiesShared';
import { Typography } from '../../..';

export default {
  title: 'Molecules / GridTable / Default Table',
  parameters: {
    component: GridTableComponent,
  },
};

// export const Showcase = () => {
//   const Story = () => {
//     return (
//       <StyledBackground>
//         <Typography type="title3">GridTable - Showcase</Typography>
//         <GridTableComponent
//           minCellWidth={100}
//           initialColumnSizes={['50px', '1fr', '1fr', '1fr']}
//         ></GridTableComponent>
//       </StyledBackground>
//     );
//   };

//   return <Story />;
// };

export const FooTable = () => {
  const { headers, rows } = generateTableData(100, 10);

  const Story = () => {
    return (
      <GridTableComponent minCellWidth={100}>
        <GridTableComponent.THead>
          <GridTableComponent.Tr>
            {headers.map(({ title }) => (
              <GridTableComponent.Th>{title}</GridTableComponent.Th>
            ))}
          </GridTableComponent.Tr>
        </GridTableComponent.THead>
        <GridTableComponent.TBody>
          {rows.map((row) => (
            <GridTableComponent.ExpandableRow>
              {row.map((column) => (
                <GridTableComponent.Td>{column.content}</GridTableComponent.Td>
              ))}
            </GridTableComponent.ExpandableRow>
          ))}
        </GridTableComponent.TBody>
      </GridTableComponent>
    );
  };

  return (
    <StyledBackground>
      <Typography type="title3">Big GridTable</Typography>
      <Story />
    </StyledBackground>
  );
};

// export const BigTable = () => {
//   const { headers: bigTableHeaders, rows: bigTableRows } = generateTableData(200, 10);

//   const Story = () => {
//     return <GridTableComponent headers={bigTableHeaders} rows={bigTableRows} minCellWidth={100} />;
//   };

//   return (
//     <StyledBackground>
//       <Typography type="title3">Big GridTable</Typography>
//       <Story />
//     </StyledBackground>
//   );
// };

// export const BigHTMLTable = () => {
//   const { headers: bigTableHeaders, rows: bigTableRows } = generateTableData(200, 10);

//   return (
//     <StyledBackground>
//       <Typography type="title3">Big HTML-Table</Typography>
//       <table style={{ width: '100%', textAlign: 'left' }}>
//         <thead>
//           <tr>
//             {bigTableHeaders.map((header) => (
//               <th>{header.title}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {bigTableRows.map((row) => (
//             <tr>
//               {Object.entries(row)
//                 .filter(([key]) => key !== 'expandItems')
//                 .map(([, rowValue]) => (
//                   <td>{rowValue}</td>
//                 ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </StyledBackground>
//   );
// };
