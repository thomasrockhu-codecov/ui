import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Flexbox, Button, Typography, Icon } from '../..';
import { Props, PageNumberItemProps } from './Pagination.types';

const FIRST_PAGE = 1;

const StyledFlexbox = styled(Flexbox)`
  width: 100px;
`;

const PageNumberItem: React.FC<PageNumberItemProps> = ({ active = false, children, onClick }) => (
  <Flexbox item>
    <Button id="currentPage" variant="neutral" disabled={active} onClick={e => onClick(e)}>
      <Typography type="secondary" color={t => (active ? t.color.cta : t.color.text)}>
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

const ChevronButton = ({ direction = 'left', onClick }) => (
  <Flexbox item container alignItems="center">
    <Button id="currentPage" variant="neutral" onClick={onClick}>
      {direction === 'left' ? <Icon.ChevronLeft size={2} /> : <Icon.ChevronRight size={2} />}
    </Button>
  </Flexbox>
);

const Pagination: React.FC<Props> = ({ totalResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = 10;

  const onNumberClick = e => {
    setCurrentPage(Number(e.target.textContent));
  };

  const onClickChevronPrevious = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const onClickChevronNext = useCallback(() => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, numberOfPages]);

  const isFirstPage = currentPage === FIRST_PAGE;
  const isSecondPage = currentPage === FIRST_PAGE + 1;
  const isSecondLastPage = currentPage === numberOfPages - 1;
  const isLastPage = currentPage === numberOfPages;
  const isWithinFirstThree = currentPage <= 3;
  const isWithinLastThree = currentPage > numberOfPages - 3;
  //   const totalIsOnlyOnePage = numberOfPages === FIRST_PAGE;
  const totalIsOnlyOnePage = false;
  const totalLessThanFour = numberOfPages < 4;
  const totalLessThanFive = numberOfPages < 5;

  return (
    <Flexbox container gutter={3}>
      <ChevronButton onClick={onClickChevronPrevious} />
      <StyledFlexbox container gutter={1} justifyContent="center">
        <PageNumberItem onClick={onNumberClick} active={isFirstPage}>
          {FIRST_PAGE}
        </PageNumberItem>
        {!isWithinFirstThree && !totalLessThanFive && <TruncatedPageNumbers />}
        {/* Show third page from last if currently on last one */}
        {isLastPage && !isFirstPage && (
          <PageNumberItem onClick={onNumberClick}>{numberOfPages - 2}</PageNumberItem>
        )}

        {/* Current, last and next page */}
        {!isFirstPage && !isSecondPage && (
          <PageNumberItem onClick={onNumberClick}>{currentPage - 1}</PageNumberItem>
        )}
        {!isFirstPage && !isLastPage && <PageNumberItem active>{currentPage}</PageNumberItem>}
        {!isLastPage && !isSecondLastPage && (
          <PageNumberItem onClick={onNumberClick}>{currentPage + 1}</PageNumberItem>
        )}

        {isFirstPage && !totalLessThanFour && (
          <PageNumberItem onClick={onNumberClick}>{FIRST_PAGE + 2}</PageNumberItem>
        )}
        {!isWithinLastThree && !totalLessThanFive && <TruncatedPageNumbers />}
        {!totalIsOnlyOnePage && (
          <PageNumberItem onClick={onNumberClick} active={isLastPage}>
            {numberOfPages}
          </PageNumberItem>
        )}
      </StyledFlexbox>
      <ChevronButton direction="right" onClick={onClickChevronNext} />
    </Flexbox>
  );
};

export default React.memo(Pagination);
