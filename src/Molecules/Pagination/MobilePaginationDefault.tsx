import React from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, Icon, Box } from '../..';
import { PageItemProps, PaginationDefaultProps, BrowseButtonProps } from './Pagination.types';
import PageItems from './PageItems';

const MAX_NUMBER_MOBILE_ITEMS = 7;
const MOBILE_ITEMS_TOTAL_WIDTH = 40;

const StyledLink = styled.a`
  justify-content: inherit;
  text-decoration: none;
  color: inherit;
`;

const StyledBox = styled(Box)<{ variant?: string }>`
  display: flex;
  height: 40px;
  width: 40px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  ${({ variant, theme }) =>
    variant === 'selected' && `background-color: ${theme.color.cta}; cursor: default`}
  ${({ variant, theme }) =>
    variant === 'chevron' &&
    `box-sizing: border-box; border: 1px solid ${theme.color.inputBorder};`}
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
        onClick(e);
      }
    }}
    onKeyDown={(e) => {
      // Link should trigger on spacebar clicked like actual button.
      if (e.keyCode === 32 && variant !== 'selected' && onClick) {
        onClick(e);
      }
    }}
  >
    <StyledBox variant={variant}>{children}</StyledBox>
  </StyledLink>
);

const StyledFlexbox = styled(Flexbox)<{ numberOfPages: number }>`
  width: ${(p) => Math.min(p.numberOfPages, MAX_NUMBER_MOBILE_ITEMS) * MOBILE_ITEMS_TOTAL_WIDTH}px;
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
  <StyledBox>
    <Typography type="secondary">...</Typography>
  </StyledBox>
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
