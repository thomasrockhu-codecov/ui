import React, { useCallback, useEffect, useState } from 'react';
import { PaginationProps } from './Pagination.types';
import DesktopPagination from './DesktopPagination';
import Media from '../../Atoms/Media';
import MobilePaginationCompact from './MobilePaginationCompact';
import MobilePaginationDefault from './MobilePaginationDefault';

const Pagination: React.FC<PaginationProps> = ({
  currentPage: currentPageFromProps,
  itemsPerPage,
  totalItems,
  compact = false,
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
      <Media query={(t) => t.media.lessThan(t.breakpoints.md)}>
        {compact ? (
          <MobilePaginationCompact
            onClickPrevious={onClickPrevious}
            onClickNext={onClickNext}
            nextPageLabel={nextPageLabel}
            previousPageLabel={previousPageLabel}
          />
        ) : (
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
      </Media>
      <Media query={(t) => t.media.greaterThan(t.breakpoints.md)}>
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
      </Media>
    </nav>
  );
};

export default Pagination;
