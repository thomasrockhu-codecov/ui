import React from 'react';
import styled from 'styled-components';
import { Flexbox, Icon } from '../..';
import { PaginationCompactProps, BrowseButtonProps } from './Pagination.types';

const StyledBox = styled.a`
  display: flex;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(10)}px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const MobilePaginationButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
}> = ({ children, onClick }) => (
  <StyledBox
    href="#"
    role="button"
    onClick={onClick}
    onKeyDown={(e) => {
      // Link should trigger on spacebar clicked like actual button.
      if (e.keyCode === 32) {
        onClick();
      }
    }}
  >
    {children}
  </StyledBox>
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
