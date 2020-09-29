import React from 'react';
import styled from 'styled-components';
import { Flexbox, Icon, Button } from '../..';
import { PaginationCompactProps, BrowseButtonProps } from './Pagination.types';

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

const ChevronButton = ({ direction = 'left', onClick, label }: BrowseButtonProps) => (
  <Flexbox item container alignItems="center">
    <StyledButton onClick={onClick} variant="neutral" aria-label={label}>
      {direction === 'left' ? (
        <Icon.ThinChevron direction="left" size={4} />
      ) : (
        <Icon.ThinChevron direction="right" size={4} />
      )}
    </StyledButton>
  </Flexbox>
);

const MobilePaginationCompact: React.FC<PaginationCompactProps> = ({
  onClickPrevious,
  onClickNext,
  previousPageLabel,
  nextPageLabel,
}) => {
  return (
    <Flexbox container>
      <ChevronButton onClick={onClickPrevious} label={previousPageLabel} />
      <ChevronButton direction="right" onClick={onClickNext} label={nextPageLabel} />
    </Flexbox>
  );
};

export default React.memo(MobilePaginationCompact);
