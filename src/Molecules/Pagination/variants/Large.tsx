import React from 'react';
import { Flexbox, Typography } from '../../../index';
import { BrowseButtonProps, PageItemProps, PaginationDefaultProps } from '../Pagination.types';
import PageItems from '../PageItems';
import {
  ChevronIcon,
  StyledCurrentPageBox,
  StyledList,
  TruncatedPageNumbers,
  StyledButton,
} from './components/LargeComponents';

const PageItem: React.FC<PageItemProps> = ({ isCurrentPage = false, onClick, children, label }) => (
  <Flexbox item as="li">
    {isCurrentPage ? (
      <StyledCurrentPageBox container>
        <Typography type="primary" color={(t) => t.color.buttonText} weight="bold">
          {children}
        </Typography>
      </StyledCurrentPageBox>
    ) : (
      <StyledButton $type="page-item" onClick={onClick} aria-label={`${label} ${children}`}>
        <Typography type="primary" color={(t) => t.color.text} weight="bold">
          {children}
        </Typography>
      </StyledButton>
    )}
  </Flexbox>
);

const ChevronButton: React.FC<BrowseButtonProps> = ({ direction, onClick, label }) => (
  <Flexbox item container alignItems="center">
    <StyledButton $type="chevron" onClick={onClick} aria-label={label}>
      <ChevronIcon direction={direction} />
    </StyledButton>
  </Flexbox>
);

const Large: React.FC<PaginationDefaultProps> = ({
  currentPage,
  numberOfPages,
  onClickPageItem,
  onClickPrevious,
  onClickNext,
  previousPageLabel,
  nextPageLabel,
  currentPageLabel,
  pageItemLabel,
}) => {
  if (numberOfPages <= 1) {
    return null;
  }

  return (
    <Flexbox container>
      {currentPage !== 1 && (
        <ChevronButton direction="left" onClick={onClickPrevious} label={previousPageLabel} />
      )}
      <StyledList $numberOfPages={numberOfPages}>
        <PageItems
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={onClickPageItem}
          PageItem={PageItem}
          TruncatedPageNumbers={TruncatedPageNumbers}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
        />
      </StyledList>
      {currentPage !== numberOfPages && (
        <ChevronButton direction="right" onClick={onClickNext} label={nextPageLabel} />
      )}
    </Flexbox>
  );
};

export default React.memo(Large);
