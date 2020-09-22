import React, { useCallback } from 'react';
import { PaginationProps } from './Pagination.types';
import DesktopPagination from './DesktopPagination';
import Media from '../../Atoms/Media';
import MobilePaginationCompact from './MobilePaginationCompact';
import MobilePaginationDefault from './MobilePaginationDefault';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  compact,
  onPageChange,
}) => {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const onClickPageItem = useCallback(
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
      <Media query={(t) => t.media.lessThan(t.breakpoints.md)}>
        {compact ? (
          <MobilePaginationCompact onClickPrevious={onClickPrevious} onClickNext={onClickNext} />
        ) : (
          <MobilePaginationDefault
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            onClickPageItem={onClickPageItem}
            onClickPrevious={onClickPrevious}
            onClickNext={onClickNext}
          />
        )}
      </Media>
      <Media query={(t) => t.media.greaterThan(t.breakpoints.md)}>
        <DesktopPagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={onClickPageItem}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
        />
      </Media>
    </>
  );
};

export default Pagination;
