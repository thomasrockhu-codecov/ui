import React from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, Icon, Box } from '../..';
import { PageItemProps, PaginationDefaultProps, BrowseButtonProps } from './Pagination.types';
import PageItems from './PageItems';

const MAX_NUMBER_ITEMS = 7;
const PAGE_ITEM_WIDTH = 40;
const TRUNCATED_ITEM_WIDTH = 20;

const StyledLink = styled.a`
  justify-content: inherit;
  text-decoration: none;
  color: inherit;
`;

const StyledBox = styled(Box)`
  display: flex;
  height: 40px;
  width: 40px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const StyledPageItemBox = styled(StyledBox)<{ variant?: string }>`
  ${({ variant, theme }) =>
    variant === 'selected' && `background-color: ${theme.color.cta}; cursor: default`}
  ${({ variant, theme }) =>
    variant === 'chevron' &&
    `box-sizing: border-box; border: 1px solid ${theme.color.inputBorder};`}
`;

const StyledTruncatedBox = styled(StyledBox)`
  width: 20px;
`;

const MobilePaginationButton: React.FC<Omit<PageItemProps, 'active'> & { variant: string }> = ({
  children,
  onClick,
  variant,
}) => (
  <StyledLink
    href="#"
    role="button"
    onClick={(e) => {
      e.preventDefault();
      if (variant !== 'selected' && onClick) {
        onClick();
      }
    }}
    onKeyDown={(e) => {
      // Link should trigger on spacebar clicked like actual button.
      if (e.keyCode === 32 && variant !== 'selected' && onClick) {
        onClick();
      }
    }}
  >
    <StyledPageItemBox variant={variant}>{children}</StyledPageItemBox>
  </StyledLink>
);

const StyledFlexbox = styled(Flexbox)<{ numberOfPages: number }>`
  width: ${(p) => {
    let width;
    if (p.numberOfPages <= 5) {
      width = p.numberOfPages * PAGE_ITEM_WIDTH;
    } else if (p.numberOfPages === 6) {
      width = p.numberOfPages * PAGE_ITEM_WIDTH - TRUNCATED_ITEM_WIDTH;
    } else if (p.numberOfPages >= 7) {
      width = MAX_NUMBER_ITEMS * PAGE_ITEM_WIDTH - 2 * TRUNCATED_ITEM_WIDTH;
    }
    return width;
  }}px;
`;

const PageItem: React.FC<PageItemProps> = ({ active = false, onClick, children }) => (
  <Flexbox item>
    <MobilePaginationButton variant={active ? 'selected' : ''} onClick={onClick}>
      <Typography type="primary" color={(t) => (active ? t.color.buttonText : t.color.text)}>
        {children}
      </Typography>
    </MobilePaginationButton>
  </Flexbox>
);

const TruncatedPageNumbers = () => (
  <StyledTruncatedBox>
    <Typography type="secondary">...</Typography>
  </StyledTruncatedBox>
);

const ChevronButton = ({ direction = 'left', onClick }: BrowseButtonProps) => (
  <Flexbox item container alignItems="center">
    <MobilePaginationButton variant="chevron" onClick={onClick}>
      {direction === 'left' ? (
        <Icon.ChevronLeft inline size={3} />
      ) : (
        <Icon.ChevronRight inline size={3} />
      )}
    </MobilePaginationButton>
  </Flexbox>
);

const MobilePagination: React.FC<PaginationDefaultProps> = ({
  currentPage,
  numberOfPages,
  onClickPageItem,
  onClickPrevious,
  onClickNext,
}) => {
  return (
    <Flexbox container>
      <ChevronButton onClick={onClickPrevious} />
      <StyledFlexbox container justifyContent="center" numberOfPages={numberOfPages}>
        <PageItems
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={onClickPageItem}
          PageItem={PageItem}
          TruncatedPageNumbers={TruncatedPageNumbers}
        />
      </StyledFlexbox>
      <ChevronButton direction="right" onClick={onClickNext} />
    </Flexbox>
  );
};

export default React.memo(MobilePagination);
