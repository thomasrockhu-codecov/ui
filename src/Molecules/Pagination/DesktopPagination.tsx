import React from 'react';
import styled from 'styled-components';
import { Typography, Icon, Flexbox, Button } from '../..';
import { Props as FlexBoxProps } from '../../Atoms/Flexbox/Flexbox.types';
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
    <StyledFlexbox container numberOfPages={numberOfPages}>
      <ChevronButton onClick={onClickPrevious} />
      <Flexbox container item flex="1" justifyContent="center" gutter={2}>
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
