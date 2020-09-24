import React from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, Icon, Button } from '../..';
import { ButtonProps } from '../Button/Button.types';
import { Props as FlexBoxProps } from '../../Atoms/Flexbox/Flexbox.types';
import { PageItemProps, PaginationDefaultProps, BrowseButtonProps } from './Pagination.types';
import PageItems from './PageItems';

const StyledButton = styled(Button)`
  display: flex;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(10)}px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
`;

const StyledPageItemBox = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ variant, ...rest }: Omit<ButtonProps, 'variant'> & { variant?: string }) => (
    <StyledButton {...rest} />
  ),
)`
  ${({ variant, theme }) =>
    variant === 'selected' && `background-color: ${theme.color.cta}; cursor: default`}
  ${({ variant, theme }) =>
    variant === 'chevron' &&
    `box-sizing: border-box; border: 1px solid ${theme.color.inputBorder};`}
`;

const StyledTruncatedBox = styled(StyledButton)`
  width: ${(p) => p.theme.spacing.unit(5)}px;
`;

const MobilePaginationButton: React.FC<Omit<PageItemProps, 'active'> & { variant: string }> = ({
  children,
  onClick,
  variant,
}) => (
  <StyledPageItemBox
    disabled={!['selected', 'chevron'].includes(variant)}
    onClick={() => {
      if (variant !== 'selected' && onClick) {
        onClick();
      }
    }}
    variant={variant}
  >
    {children}
  </StyledPageItemBox>
);

const StyledFlexbox = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ numberOfPages, ...rest }: { numberOfPages: number } & FlexBoxProps) => <Flexbox {...rest} />,
)`
  width: ${(p) => {
    const PAGE_ITEM_WIDTH = p.theme.spacing.unit(10);
    const TRUNCATED_ITEM_WIDTH = p.theme.spacing.unit(5);
    const MAX_NUMBER_ITEMS = 7;

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
