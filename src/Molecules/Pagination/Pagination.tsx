import React, { useCallback } from 'react';
import { Props } from './Pagination.types';
import DesktopPagination from './DesktopPagination';

const Pagination: React.FC<Props> = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const onClickPageNumber = useCallback(
    (e) => {
      onPageChange(Number(e.target.textContent));
    },
    [onPageChange],
  );

  const onClickPrevious = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const onClickNext = useCallback(() => {
    if (currentPage < numberOfPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, numberOfPages, onPageChange]);

  return (
    <>
      <DesktopPagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onClickPageNumber={onClickPageNumber}
        onClickPrevious={onClickPrevious}
        onClickNext={onClickNext}
      />
    </>
  );
};

export default Pagination;
