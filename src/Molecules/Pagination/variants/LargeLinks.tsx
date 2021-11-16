import React from 'react';
import { Flexbox, Typography } from '../../../index';
import { BrowseLinkProps, PageItemProps, PaginationDefaultLinkProps } from '../Pagination.types';
import PageItems from '../PageItems';
import {
  ChevronIcon,
  StyledCurrentPageBox,
  StyledList,
  TruncatedPageNumbers,
  StyledLink,
} from './components/LargeComponents';

const PageItem: React.FC<PageItemProps> = ({
  isCurrentPage = false,
  onClick,
  children,
  label,
  href,
}) => (
  <Flexbox item as="li">
    {isCurrentPage ? (
      <StyledCurrentPageBox container>
        <Typography type="primary" color={(t) => t.color.buttonText} weight="bold">
          {children}
        </Typography>
      </StyledCurrentPageBox>
    ) : (
      <StyledLink $type="page-item" onClick={onClick} aria-label={`${label} ${children}`} to={href}>
        <Typography type="primary" color={(t) => t.color.text} weight="bold">
          {children}
        </Typography>
      </StyledLink>
    )}
  </Flexbox>
);

const ChevronLink: React.FC<BrowseLinkProps> = ({ direction, onClick, label, href }) => (
  <Flexbox item container alignItems="center">
    <StyledLink $type="chevron" onClick={onClick} aria-label={label} to={href}>
      <ChevronIcon direction={direction} />
    </StyledLink>
  </Flexbox>
);

const LargeLinks: React.FC<PaginationDefaultLinkProps> = ({
  currentPage,
  numberOfPages,
  onClickPageItem = () => {},
  onClickPrevious,
  onClickNext,
  previousPageLabel,
  nextPageLabel,
  currentPageLabel,
  pageItemLabel,
  getPageHref,
}) => {
  if (numberOfPages <= 1) {
    return null;
  }

  return (
    <Flexbox container>
      {currentPage !== 1 && (
        <ChevronLink
          direction="left"
          onClick={onClickPrevious}
          label={previousPageLabel}
          href={getPageHref(currentPage - 1)}
        />
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
          getPageHref={getPageHref}
        />
      </StyledList>
      {currentPage !== numberOfPages && (
        <ChevronLink
          direction="right"
          onClick={onClickNext}
          label={nextPageLabel}
          href={getPageHref(currentPage + 1)}
        />
      )}
    </Flexbox>
  );
};

export default React.memo(LargeLinks);
