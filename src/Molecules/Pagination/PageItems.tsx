import React, { useCallback } from 'react';
import { PageItemsProps } from './Pagination.types';

const FIRST_PAGE = 1;
const PageItems: React.FC<PageItemsProps> = ({
  currentPage,
  numberOfPages,
  onClickPageItem,
  PageItem,
  TruncatedPageNumbers,
}) => {
  const isFirstPage = currentPage === FIRST_PAGE;
  const isSecondPage = currentPage === FIRST_PAGE + 1;
  const isSecondLastPage = currentPage === numberOfPages - 1;
  const isLastPage = currentPage === numberOfPages;
  const isWithinFirstThree = currentPage <= 3;
  const isWithinLastThree = currentPage > numberOfPages - 3;
  const totalIsOnlyOnePage = numberOfPages === FIRST_PAGE;
  const totalLessThanFour = numberOfPages < 4;
  const totalLessThanFive = numberOfPages < 5;

  const handlePageItemClick = useCallback((page) => () => onClickPageItem(page), [onClickPageItem]);

  return (
    <>
      <PageItem onClick={handlePageItemClick(FIRST_PAGE)} active={isFirstPage}>
        {FIRST_PAGE}
      </PageItem>
      {!isWithinFirstThree && !totalLessThanFive && <TruncatedPageNumbers />}
      {/* Show third page from last if currently on last one */}
      {isLastPage && !isFirstPage && !isWithinFirstThree && (
        <PageItem onClick={handlePageItemClick(currentPage - 2)}>{currentPage - 2}</PageItem>
      )}

      {/* Current, last and next page */}
      {!isFirstPage && !isSecondPage && (
        <PageItem onClick={handlePageItemClick(currentPage - 1)}>{currentPage - 1}</PageItem>
      )}
      {!isFirstPage && !isLastPage && <PageItem active>{currentPage}</PageItem>}
      {!isLastPage && !isSecondLastPage && (
        <PageItem onClick={handlePageItemClick(currentPage + 1)}>{currentPage + 1}</PageItem>
      )}

      {isFirstPage && !totalLessThanFour && (
        <PageItem onClick={handlePageItemClick(FIRST_PAGE + 2)}>{FIRST_PAGE + 2}</PageItem>
      )}
      {!isWithinLastThree && !totalLessThanFive && <TruncatedPageNumbers />}
      {!totalIsOnlyOnePage && (
        <PageItem onClick={handlePageItemClick(numberOfPages)} active={isLastPage}>
          {numberOfPages}
        </PageItem>
      )}
    </>
  );
};

export default PageItems;
