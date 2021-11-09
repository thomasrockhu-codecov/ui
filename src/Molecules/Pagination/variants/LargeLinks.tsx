import React from 'react';
import styled from 'styled-components';
import { Flexbox, Link, OldIcon, Typography } from '../../../index';
import { BrowseLinkProps, PageItemProps, PaginationDefaultLinkProps } from '../Pagination.types';
import PageItems from '../PageItems';
import { StyledList, TruncatedPageNumbers } from './Large';

const StyledLink = styled(Link)<{
  $type: 'chevron' | 'page-item';
}>`
  display: flex;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(10)}px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  ${({ $type, theme }) =>
    $type === 'chevron' && `box-sizing: border-box; border: 1px solid ${theme.color.inputBorder};`}

  &:hover {
    background-color: ${(t) => t.theme.color.cta};

    span {
      color: ${(t) => t.theme.color.buttonText};
    }

    svg {
      fill: ${(t) => t.theme.color.buttonText};
    }
  }
`;

const StyledCurrentPage = styled(Flexbox)`
  background-color: ${(t) => t.theme.color.cta};
  justify-content: center;
  align-items: center;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(10)}px;
`;

const PageItem: React.FC<PageItemProps> = ({
  isCurrentPage = false,
  onClick,
  children,
  label,
  href,
}) => (
  <Flexbox item as="li">
    {!isCurrentPage ? (
      <StyledLink $type="page-item" onClick={onClick} aria-label={`${label} ${children}`} to={href}>
        <Typography
          type="primary"
          color={(t) => (isCurrentPage ? t.color.buttonText : t.color.text)}
          weight="bold"
        >
          {children}
        </Typography>
      </StyledLink>
    ) : (
      <StyledCurrentPage container>
        <Typography type="primary" color={(t) => t.color.buttonText} weight="bold">
          {children}
        </Typography>
      </StyledCurrentPage>
    )}
  </Flexbox>
);

const ChevronLink: React.FC<BrowseLinkProps> = ({ direction, onClick, label, href }) => (
  <Flexbox item container alignItems="center">
    <StyledLink $type="chevron" onClick={onClick} aria-label={label} to={href}>
      {direction === 'left' ? (
        <OldIcon.ChevronLeft inline size={3} />
      ) : (
        <OldIcon.ChevronRight inline size={3} />
      )}
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
