import React from 'react';
import MD from 'react-markdown';
import docs from './Pagination.md';

import { Typography } from '../..';
import Pagination from './Pagination';

export default {
  title: 'Molecules | Pagination',
  parameters: {
    component: Pagination,
  },
};

export const documentation = () => (
  <Typography type="primary">
    <MD source={docs} />
  </Typography>
);

const PaginationWrapper = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalItems={999}
      itemsPerPage={1}
      onPageChange={setCurrentPage}
    />
  );
};

export const pagination = () => <PaginationWrapper />;

pagination.story = {
  name: 'Pagination',
};
