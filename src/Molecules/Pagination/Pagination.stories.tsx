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

const PaginationWrapper = ({ totalItems = 10, itemsPerPage = 1, compact = false }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={setCurrentPage}
      compact={compact}
    />
  );
};

export const defaultPagination = () => <PaginationWrapper />;

defaultPagination.story = {
  name: 'Regular',
};

export const paginationWithOnePage = () => <PaginationWrapper totalItems={1} itemsPerPage={1} />;

paginationWithOnePage.story = {
  name: '1 page',
};

export const paginationWithTwoPages = () => <PaginationWrapper totalItems={2} itemsPerPage={1} />;

paginationWithTwoPages.story = {
  name: '2 pages',
};

export const paginationWithTwelvePages = () => (
  <PaginationWrapper totalItems={12} itemsPerPage={1} />
);

paginationWithTwelvePages.story = {
  name: '12 pages',
};

export const paginationWithManyPages = () => (
  <PaginationWrapper totalItems={999} itemsPerPage={1} />
);

paginationWithManyPages.story = {
  name: '999 pages',
};

export const paginationCompactMobile = () => (
  <PaginationWrapper totalItems={10} itemsPerPage={1} compact />
);

paginationCompactMobile.story = {
  name: 'Compact on mobile',
};
