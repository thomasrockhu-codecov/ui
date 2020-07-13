import React from 'react';
import Pagination from './Pagination';

export default {
  title: 'Molecules | Pagination',
  parameters: {
    component: Pagination,
  },
};

export const DefaultPagination = () => <Pagination totalResults={10} />;
