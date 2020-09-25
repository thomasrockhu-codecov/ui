import React, { useCallback, useState } from 'react';
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
  title = 'Pagination',
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

  return (
    <nav role="navigation" aria-label={title}>
      <Media query={(t) => t.media.lessThan(t.breakpoints.md)}>
        {compact ? (
          <MobilePaginationCompact onClickPrevious={onClickPrevious} onClickNext={onClickNext} />
        ) : (
          <MobilePaginationDefault
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            onClickPageItem={handlePageChange}
            onClickPrevious={onClickPrevious}
            onClickNext={onClickNext}
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
        />
      </Media>
    </nav>
  );
};

export default Pagination;
