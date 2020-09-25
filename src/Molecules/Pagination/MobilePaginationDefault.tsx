import React from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, Icon, Button, Box } from '../..';
import { Props as FlexBoxProps } from '../../Atoms/Flexbox/Flexbox.types';
import { PageItemProps, PaginationDefaultProps, BrowseButtonProps } from './Pagination.types';
import PageItems from './PageItems';

const StyledButton = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ type, isCurrentPage, ...rest }) => <Button variant="neutral" {...rest} />,
)`
  display: flex;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(10)}px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;

  ${({ type, isCurrentPage, theme }) =>
    type === 'page-item' &&
    isCurrentPage &&
    `background-color: ${theme.color.cta}; cursor: default`}
  ${({ type, theme }) =>
    type === 'chevron' && `box-sizing: border-box; border: 1px solid ${theme.color.inputBorder};`}
`;

const StyledTruncatedBox = styled(Box)`
  display: flex;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(5)}px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

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

const PageItem: React.FC<PageItemProps> = ({ isCurrentPage = false, onClick, children }) => (
  <Flexbox item>
    <StyledButton type="page-item" onClick={onClick} isCurrentPage={isCurrentPage}>
      <Typography type="primary" color={(t) => (isCurrentPage ? t.color.buttonText : t.color.text)}>
        {children}
      </Typography>
    </StyledButton>
  </Flexbox>
);

const TruncatedPageNumbers = () => (
  <StyledTruncatedBox>
    <Typography type="secondary">...</Typography>
  </StyledTruncatedBox>
);

const ChevronButton = ({ direction = 'left', onClick }: BrowseButtonProps) => (
  <Flexbox item container alignItems="center">
    <StyledButton type="chevron" onClick={onClick}>
      {direction === 'left' ? (
        <Icon.ChevronLeft inline size={3} />
      ) : (
        <Icon.ChevronRight inline size={3} />
      )}
    </StyledButton>
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
