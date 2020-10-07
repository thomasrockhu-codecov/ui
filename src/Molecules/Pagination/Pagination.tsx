import React, { useCallback, useEffect, useState } from 'react';
import { PaginationProps } from './Pagination.types';
import DesktopPagination from './components/DesktopPagination';
import MobilePaginationCompact from './components/MobilePaginationCompact';
import MobilePaginationDefault from './components/MobilePaginationDefault';

const Pagination: React.FC<PaginationProps> = ({
  currentPage: currentPageFromProps,
  variant,
  itemsPerPage,
  totalItems,
  onPageChange,
  label = 'Pagination',
  nextPageLabel = 'Go to next page',
  previousPageLabel = 'Go to previous page',
  currentPageLabel = 'Current Page, page:',
  pageItemLabel = 'Go to Page',
}) => {
  const [currentPageFromState, setCurrentPageFromState] = useState(1);

  // use current page value from props if provided (controlled), otherwise use current page from state (uncontrolled)
  const currentPage = currentPageFromProps ?? currentPageFromState;

  const numberOfPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const handlePageChange = useCallback(
    (newPage) => {
      setCurrentPageFromState(newPage);
      onPageChange(newPage);
    },
    [setCurrentPageFromState, onPageChange],
  );

  const onClickPrevious = useCallback(() => {
    if (currentPageFromState > 1) {
      handlePageChange(currentPageFromState - 1);
    }
  }, [currentPageFromState, handlePageChange]);

  const onClickNext = useCallback(() => {
    if (currentPageFromState < numberOfPages) {
      handlePageChange(currentPageFromState + 1);
    }
  }, [currentPageFromState, numberOfPages, handlePageChange]);

  useEffect(() => {
    handlePageChange(1);
  }, [totalItems, itemsPerPage, handlePageChange]);

  return (
    <nav role="navigation" aria-label={label}>
      {variant === 'compact' && (
        <MobilePaginationCompact
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
        />
      )}

      {variant === 'large' && (
        <MobilePaginationDefault
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={handlePageChange}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
        />
      )}

      {variant === 'regular' && (
        <DesktopPagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={handlePageChange}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
        />
      )}
    </nav>
  );
};

export default Pagination;
