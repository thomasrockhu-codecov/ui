import React from 'react';
import styled from 'styled-components';
import { Typography, Icon, Flexbox, Button } from '../..';
import { Props as FlexBoxProps } from '../../Atoms/Flexbox/Flexbox.types';
import { List } from '../../Atoms/List/List';
import PageItems from './PageItems';
import { PaginationDefaultProps, PageItemProps, BrowseButtonProps } from './Pagination.types';

const StyledFlexbox = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ numberOfPages, ...rest }: { numberOfPages: number } & FlexBoxProps) => <Flexbox {...rest} />,
)`
  width: ${(p) => {
    const NUMBER_WIDTH = p.theme.spacing.unit(4.5);
    const CHEVRON_PADDING = 2 * p.theme.spacing.unit(2);
    const BETWEEN_8_AND_13_PAGES_WIDTH = p.theme.spacing.unit(38);
    const BETWEEN_14_AND_101_PAGES_WIDTH = p.theme.spacing.unit(42);
    const MORE_THAN_101_PAGES_WIDTH = p.theme.spacing.unit(50);

    if (p.numberOfPages < 8) return p.numberOfPages * NUMBER_WIDTH + CHEVRON_PADDING;

    if (p.numberOfPages >= 8 && p.numberOfPages <= 13) return BETWEEN_8_AND_13_PAGES_WIDTH;

    if (p.numberOfPages >= 14 && p.numberOfPages <= 101) return BETWEEN_14_AND_101_PAGES_WIDTH;

    return MORE_THAN_101_PAGES_WIDTH;
  }}px;
`;

const PageNumberItem: React.FC<PageItemProps> = ({ isCurrentPage = false, children, onClick }) => (
  <Flexbox item as="li">
    <Button
      variant="neutral"
      onClick={!isCurrentPage ? onClick : undefined}
      aria-label={`${isCurrentPage ? 'Current Page:' : 'Go to'} page ${children}`}
      aria-disabled={isCurrentPage}
    >
      <Typography type="secondary" color={(t) => (isCurrentPage ? t.color.cta : t.color.text)}>
        {children}
      </Typography>
    </Button>
  </Flexbox>
);

const TruncatedPageNumbers = () => (
  <Flexbox item container alignItems="center" as="li">
    <Typography type="secondary">...</Typography>
  </Flexbox>
);

const ChevronButton = ({ direction = 'left', onClick }: BrowseButtonProps) => (
  <Button
    variant="neutral"
    onClick={onClick}
    aria-label={direction === 'left' ? 'Go to previous page' : 'Go to next page'}
  >
    {direction === 'left' ? <Icon.ChevronLeft size={2} /> : <Icon.ChevronRight size={2} />}
  </Button>
);

const DesktopPagination: React.FC<PaginationDefaultProps> = ({
  currentPage,
  numberOfPages,
  onClickPageItem,
  onClickPrevious,
  onClickNext,
}) => {
  return (
    <StyledFlexbox container numberOfPages={numberOfPages}>
      <ChevronButton onClick={onClickPrevious} />
      <Flexbox container item flex="1" justifyContent="center" gutter={2} as={List}>
        <PageItems
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={onClickPageItem}
          PageItem={PageNumberItem}
          TruncatedPageNumbers={TruncatedPageNumbers}
        />
      </Flexbox>
      <ChevronButton direction="right" onClick={onClickNext} />
    </StyledFlexbox>
  );
};

export default React.memo(DesktopPagination);
