import React from 'react';
import { action } from '@storybook/addon-actions';
import docs from './Pagination.mdx';
import Pagination from './Pagination';

export default {
  title: 'Molecules | Pagination / Compact',
  parameters: {
    ...docs.parameters,
  },
};

const CompactPagination = ({ totalItems = 10, itemsPerPage = 1 }) => (
  <Pagination
    totalItems={totalItems}
    itemsPerPage={itemsPerPage}
    onPageChange={action('Page change')}
    variant="compact"
  />
);

export const regular = () => <CompactPagination />;

// const ControlledPaginationWrapper = ({ totalItems = 10, itemsPerPage = 1 }) => {
//   const [currentPage, setCurrentPage] = React.useState(1);
//
//   return (
//     <RegularPagination
//       currentPage={currentPage}
//       totalItems={totalItems}
//       itemsPerPage={itemsPerPage}
//       onPageChange={setCurrentPage}
//     />
//   );
// };

// export const controlledPagination = () => (
//   <ControlledPaginationWrapper totalItems={10} itemsPerPage={1} />
// );
//
// controlledPagination.story = {
//   name: 'Controlled pagination',
// };
