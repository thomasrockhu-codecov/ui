import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Typography, Icon, Flexbox, Button } from '../..';
import { Props, PageNumberItemProps, ChevronButtonProps } from './Pagination.types';

const FIRST_PAGE = 1;

const DESKTOP_NUMBER_WIDTH = 14;
const MAX_PAGES_LESS_THAN_100_WIDTH = 112;
const MAX_DESKTOP_WIDTH = 150;

const StyledFlexbox = styled(Flexbox)<{ numberOfPages: number }>`
  width: 100px;

  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    width: ${(p) =>
      p.numberOfPages < 100
        ? Math.min(p.numberOfPages * DESKTOP_NUMBER_WIDTH, MAX_PAGES_LESS_THAN_100_WIDTH)
        : MAX_DESKTOP_WIDTH}px;
  }
`;

const PageNumberItem: React.FC<PageNumberItemProps> = ({ active = false, children, onClick }) => (
  <Flexbox item>
    <Button id="currentPage" variant="neutral" disabled={active} onClick={onClick}>
      <Typography type="secondary" color={(t) => (active ? t.color.cta : t.color.text)}>
        {children}
      </Typography>
    </Button>
  </Flexbox>
);

const TruncatedPageNumbers = () => (
  <Flexbox item container alignItems="center">
    <Typography type="secondary">...</Typography>
  </Flexbox>
);

const ChevronButton = ({ direction = 'left', onClick }: ChevronButtonProps) => (
  <Flexbox item container alignItems="center">
    <Button id="currentPage" variant="neutral" onClick={onClick}>
      {direction === 'left' ? <Icon.ChevronLeft size={2} /> : <Icon.ChevronRight size={2} />}
    </Button>
  </Flexbox>
);

const Pagination: React.FC<Props> = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const onClickPageNumber = useCallback(
    (e) => {
      onPageChange(Number(e.target.textContent));
    },
    [onPageChange],
  );

  const onClickChevronPrevious = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const onClickChevronNext = useCallback(() => {
    if (currentPage < numberOfPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, numberOfPages, onPageChange]);

  const isFirstPage = currentPage === FIRST_PAGE;
  const isSecondPage = currentPage === FIRST_PAGE + 1;
  const isSecondLastPage = currentPage === numberOfPages - 1;
  const isLastPage = currentPage === numberOfPages;
  const isWithinFirstThree = currentPage <= 3;
  const isWithinLastThree = currentPage > numberOfPages - 3;
  const totalIsOnlyOnePage = numberOfPages === FIRST_PAGE;
  const totalLessThanFour = numberOfPages < 4;
  const totalLessThanFive = numberOfPages < 5;

  return (
    <Flexbox container gutter={3}>
      <ChevronButton onClick={onClickChevronPrevious} />
      <StyledFlexbox container gutter={1} justifyContent="center" numberOfPages={numberOfPages}>
        <PageNumberItem onClick={onClickPageNumber} active={isFirstPage}>
          {FIRST_PAGE}
        </PageNumberItem>
        {!isWithinFirstThree && !totalLessThanFive && <TruncatedPageNumbers />}
        {/* Show third page from last if currently on last one */}
        {isLastPage && !isFirstPage && !isWithinFirstThree && (
          <PageNumberItem onClick={onClickPageNumber}>{numberOfPages - 2}</PageNumberItem>
        )}

        {/* Current, last and next page */}
        {!isFirstPage && !isSecondPage && (
          <PageNumberItem onClick={onClickPageNumber}>{currentPage - 1}</PageNumberItem>
        )}
        {!isFirstPage && !isLastPage && <PageNumberItem active>{currentPage}</PageNumberItem>}
        {!isLastPage && !isSecondLastPage && (
          <PageNumberItem onClick={onClickPageNumber}>{currentPage + 1}</PageNumberItem>
        )}

        {isFirstPage && !totalLessThanFour && (
          <PageNumberItem onClick={onClickPageNumber}>{FIRST_PAGE + 2}</PageNumberItem>
        )}
        {!isWithinLastThree && !totalLessThanFive && <TruncatedPageNumbers />}
        {!totalIsOnlyOnePage && (
          <PageNumberItem onClick={onClickPageNumber} active={isLastPage}>
            {numberOfPages}
          </PageNumberItem>
        )}
      </StyledFlexbox>
      <ChevronButton direction="right" onClick={onClickChevronNext} />
    </Flexbox>
  );
};

export default React.memo(Pagination);
