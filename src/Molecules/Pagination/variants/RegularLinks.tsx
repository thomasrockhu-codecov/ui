import React from 'react';
import { Flexbox, Link, OldIcon, Typography } from '../../../index';
import List from '../../../Atoms/List';
import PageItems from '../PageItems';
import { BrowseLinkProps, PageItemProps, PaginationDefaultLinkProps } from '../Pagination.types';
import { StyledFlexbox, TruncatedPageNumbers } from './Regular';

const PageNumberLinkItem: React.FC<PageItemProps> = ({
  isCurrentPage = false,
  children,
  onClick,
  label,
  href,
}) => (
  <Flexbox item as="li">
    {!isCurrentPage ? (
      <Link onClick={onClick} aria-label={`${label} ${children}`} to={href}>
        <Typography type="secondary" color={(t) => t.color.text} weight="bold">
          {children}
        </Typography>
      </Link>
    ) : (
      <Typography type="secondary" color={(t) => t.color.cta} weight="bold">
        {children}
      </Typography>
    )}
  </Flexbox>
);

const ChevronLink: React.FC<BrowseLinkProps> = ({ direction = 'left', onClick, label, href }) => (
  <Link onClick={onClick} aria-label={label} to={href}>
    {direction === 'left' ? <OldIcon.ChevronLeft size={2} /> : <OldIcon.ChevronRight size={2} />}
  </Link>
);

const RegularLinks: React.FC<PaginationDefaultLinkProps> = ({
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
    <StyledFlexbox container $numberOfPages={numberOfPages} alignItems="center">
      {currentPage !== 1 && (
        <ChevronLink
          direction="left"
          onClick={onClickPrevious}
          label={previousPageLabel}
          href={getPageHref(currentPage - 1)}
        />
      )}
      <Flexbox container item flex="1" justifyContent="center" gutter={2} as={List}>
        <PageItems
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={onClickPageItem}
          PageItem={PageNumberLinkItem}
          TruncatedPageNumbers={TruncatedPageNumbers}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
          getPageHref={getPageHref}
        />
      </Flexbox>
      {currentPage !== numberOfPages && (
        <ChevronLink
          direction="right"
          onClick={onClickNext}
          label={nextPageLabel}
          href={getPageHref(currentPage + 1)}
        />
      )}
    </StyledFlexbox>
  );
};

export default React.memo(RegularLinks);
