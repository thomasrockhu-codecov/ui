import React from 'react';
import styled from 'styled-components';
import { Box, Flexbox, Link, OldIcon } from '../../../index';
import { BrowseLinkProps, PaginationCompactLinkProps } from '../Pagination.types';

const StyledLink = styled(Link)<{ $direction: 'left' | 'right' }>`
  display: flex;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(8)}px;
  border: none;
  padding: 0;
  background-color: transparent;
  flex-direction: row;
  justify-content: ${(p) => (p.$direction === 'left' ? 'flex-start' : 'flex-end')};
  align-items: center;
`;

const ChevronLink: React.FC<BrowseLinkProps> = ({ direction, onClick, label, href }) => (
  <Flexbox item container alignItems="center" alignContent="center">
    <StyledLink onClick={onClick} aria-label={label} $direction={direction} to={href}>
      <OldIcon.ThinChevron direction={direction} size={4} />
    </StyledLink>
  </Flexbox>
);

const CompactLinks: React.FC<PaginationCompactLinkProps> = ({
  currentPage,
  numberOfPages,
  onClickPrevious,
  onClickNext,
  previousPageLabel,
  nextPageLabel,
  getPageHref,
}) => {
  return (
    <Flexbox container gutter={1} alignItems="center">
      {currentPage !== 1 && (
        <ChevronLink
          direction="left"
          onClick={onClickPrevious}
          label={previousPageLabel}
          href={getPageHref(currentPage - 1)}
        />
      )}
      {currentPage !== numberOfPages && (
        <Box ml={currentPage <= 1 ? 9 : 0}>
          <ChevronLink
            direction="right"
            onClick={onClickNext}
            label={nextPageLabel}
            href={getPageHref(currentPage + 1)}
          />
        </Box>
      )}
    </Flexbox>
  );
};

export default React.memo(CompactLinks);
