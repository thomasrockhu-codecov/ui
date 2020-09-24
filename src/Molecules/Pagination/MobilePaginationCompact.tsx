import React from 'react';
import styled from 'styled-components';
import { Flexbox, Icon } from '../..';
import { Button } from '../../common/NormalizedElements/NormalizedButton';
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

const MobilePaginationButton: React.FC<{
  children: React.ReactChild;
  onClick: () => void;
}> = ({ children, onClick }) => (
  <StyledButton href="#" onClick={onClick}>
    {children}
  </StyledButton>
);

const ChevronButton = ({ direction = 'left', onClick }: BrowseButtonProps) => (
  <Flexbox item container alignItems="center">
    <MobilePaginationButton onClick={onClick}>
      {direction === 'left' ? (
        <Icon.ThinChevron direction="left" size={4} />
      ) : (
        <Icon.ThinChevron direction="right" size={4} />
      )}
    </MobilePaginationButton>
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
