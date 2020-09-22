import React from 'react';
import { Button, Flexbox, Icon } from '../..';
import { PaginationCompactProps, BrowseButtonProps } from './Pagination.types';

const ChevronButton = ({ direction = 'left', onClick }: BrowseButtonProps) => (
  <Flexbox item container alignItems="center">
    <Button id="currentPage" variant="neutral" onClick={onClick}>
      {direction === 'left' ? (
        <Icon.ThinChevron direction="left" size={4} />
      ) : (
        <Icon.ThinChevron direction="right" size={4} />
      )}
    </Button>
  </Flexbox>
);

const MobilePaginationCompact: React.FC<PaginationCompactProps> = ({
  onClickPrevious,
  onClickNext,
}) => {
  return (
    <Flexbox container gutter={4}>
      <ChevronButton onClick={onClickPrevious} />
      <ChevronButton direction="right" onClick={onClickNext} />
    </Flexbox>
  );
};

export default React.memo(MobilePaginationCompact);
