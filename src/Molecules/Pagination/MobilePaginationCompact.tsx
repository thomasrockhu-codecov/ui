import React from 'react';
import styled from 'styled-components';
import { Flexbox, Icon, Button, VisuallyHidden } from '../..';
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

const ChevronButton = ({ direction = 'left', onClick }: BrowseButtonProps) => (
  <Flexbox item container alignItems="center">
    <StyledButton onClick={onClick} variant="neutral">
      {direction === 'left' ? (
        <>
          <Icon.ThinChevron direction="left" size={4} />
          <VisuallyHidden>Go to previous page</VisuallyHidden>
        </>
      ) : (
        <>
          <Icon.ThinChevron direction="right" size={4} />
          <VisuallyHidden>Go to next page</VisuallyHidden>
        </>
      )}
    </StyledButton>
  </Flexbox>
);

const MobilePaginationCompact: React.FC<PaginationCompactProps> = ({
  onClickPrevious,
  onClickNext,
}) => {
  return (
    <Flexbox container>
      <ChevronButton onClick={onClickPrevious} />
      <ChevronButton direction="right" onClick={onClickNext} />
    </Flexbox>
  );
};

export default React.memo(MobilePaginationCompact);
