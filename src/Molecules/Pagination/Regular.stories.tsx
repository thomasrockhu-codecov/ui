import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import PaginationRouteHelper from './PaginationRouteHelper';
import docs from './Pagination.mdx';
import Pagination from './Pagination';

export default {
  title: 'Molecules / Pagination / Regular',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const RegularPagination = ({ totalItems = 10, itemsPerPage = 1 }) => (
  <Pagination
    variant="regular"
    totalItems={totalItems}
    itemsPerPage={itemsPerPage}
    onPageChange={action('Page change')}
  />
);

export const regular = () => <RegularPagination />;

export const paginationWithOnePage = () => <RegularPagination totalItems={1} itemsPerPage={1} />;

paginationWithOnePage.story = {
  name: '1 page',
};

export const paginationWithTwoPages = () => <RegularPagination totalItems={2} itemsPerPage={1} />;

paginationWithTwoPages.story = {
  name: '2 pages',
};

export const paginationWithTwelvePages = () => (
  <RegularPagination totalItems={12} itemsPerPage={1} />
);

paginationWithTwelvePages.story = {
  name: '12 pages',
};

export const paginationWithManyPages = () => (
  <RegularPagination totalItems={999} itemsPerPage={1} />
);

paginationWithManyPages.story = {
  name: '999 pages',
};

const ControlledRegularPagination = ({ totalItems = 10, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(5);

  const onPageChange = (newPage: number) => {
    action('Page change')(newPage);
    setCurrentPage(newPage);
  };

  return (
    <Pagination
      variant="regular"
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={onPageChange}
    />
  );
};

export const controlledPagination = () => <ControlledRegularPagination />;

const LinksPagination = ({ totalItems = 10, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(5);

  const getPageHref = (pageNumber: number) => `/${pageNumber}`;

  return (
    <PaginationRouteHelper currentPage={currentPage} setCurrentPage={setCurrentPage}>
      <Pagination
        variant="regular"
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        getPageHref={getPageHref}
      />
    </PaginationRouteHelper>
  );
};

export const linksPagination = () => <LinksPagination />;
