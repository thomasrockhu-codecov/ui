import React from 'react';
import styled from 'styled-components';
import { Typography, Icon, Flexbox, Button } from '../..';
import PageItems from './PageItems';
import { PaginationDefaultProps, PageItemProps, BrowseButtonProps } from './Pagination.types';

const DESKTOP_NUMBER_WIDTH = 14;
const MAX_PAGES_LESS_THAN_100_WIDTH = 112;
const MAX_DESKTOP_WIDTH = 150;

const StyledFlexbox = styled(Flexbox)<{ numberOfPages: number }>`
  width: ${(p) =>
    p.numberOfPages < 100
      ? Math.min(p.numberOfPages * DESKTOP_NUMBER_WIDTH, MAX_PAGES_LESS_THAN_100_WIDTH)
      : MAX_DESKTOP_WIDTH}px;
`;

const PageNumberItem: React.FC<PageItemProps> = ({ active = false, children, onClick }) => (
  <Flexbox item>
    <Button id="currentPage" variant="neutral" disabled={active} onClick={onClick}>
      <Typography type="secondary" color={(t) => (active ? t.color.cta : t.color.text)}>
        {children}
      </Typography>
    </Button>
  </Flexbox>
);

const TruncatedPageNumbers = () => (
  <Flexbox item container alignItems="center">
    <Typography type="secondary">...</Typography>
  </Flexbox>
);

const ChevronButton = ({ direction = 'left', onClick }: BrowseButtonProps) => (
  <Flexbox item container alignItems="center">
    <Button id="currentPage" variant="neutral" onClick={onClick}>
      {direction === 'left' ? <Icon.ChevronLeft size={2} /> : <Icon.ChevronRight size={2} />}
    </Button>
  </Flexbox>
);

const DesktopPagination: React.FC<PaginationDefaultProps> = ({
  currentPage,
  numberOfPages,
  onClickPageItem,
  onClickPrevious,
  onClickNext,
}) => {
  return (
    <Flexbox container gutter={3}>
      <ChevronButton onClick={onClickPrevious} />
      <StyledFlexbox container gutter={1} justifyContent="center" numberOfPages={numberOfPages}>
        <PageItems
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={onClickPageItem}
          PageItem={PageNumberItem}
          TruncatedPageNumbers={TruncatedPageNumbers}
        />
      </StyledFlexbox>
      <ChevronButton direction="right" onClick={onClickNext} />
    </Flexbox>
  );
};

export default React.memo(DesktopPagination);
