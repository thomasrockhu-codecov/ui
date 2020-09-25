import React from 'react';
import { action } from '@storybook/addon-actions';
import docs from './Pagination.mdx';
import Pagination from './Pagination';

export default {
  title: 'Molecules | Pagination',
  parameters: {
    ...docs.parameters,
  },
};

const UncontrolledPaginationWrapper = ({ totalItems = 10, itemsPerPage = 1, compact = false }) => (
  <Pagination
    totalItems={totalItems}
    itemsPerPage={itemsPerPage}
    onPageChange={action('Page change')}
    compact={compact}
  />
);

export const defaultPagination = () => <UncontrolledPaginationWrapper />;

defaultPagination.story = {
  name: 'Regular',
};

export const paginationWithOnePage = () => (
  <UncontrolledPaginationWrapper totalItems={1} itemsPerPage={1} />
);

paginationWithOnePage.story = {
  name: '1 page',
};

export const paginationWithTwoPages = () => (
  <UncontrolledPaginationWrapper totalItems={2} itemsPerPage={1} />
);

paginationWithTwoPages.story = {
  name: '2 pages',
};

export const paginationWithTwelvePages = () => (
  <UncontrolledPaginationWrapper totalItems={12} itemsPerPage={1} />
);

paginationWithTwelvePages.story = {
  name: '12 pages',
};

export const paginationWithManyPages = () => (
  <UncontrolledPaginationWrapper totalItems={999} itemsPerPage={1} />
);

paginationWithManyPages.story = {
  name: '999 pages',
};

export const paginationCompactMobile = () => (
  <UncontrolledPaginationWrapper totalItems={10} itemsPerPage={1} compact />
);

paginationCompactMobile.story = {
  name: 'Compact on mobile',
};

const ControlledPaginationWrapper = ({ totalItems = 10, itemsPerPage = 1, compact = false }) => {
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

export const controlledPagination = () => (
  <ControlledPaginationWrapper totalItems={10} itemsPerPage={1} />
);

controlledPagination.story = {
  name: 'Controlled pagination',
};
