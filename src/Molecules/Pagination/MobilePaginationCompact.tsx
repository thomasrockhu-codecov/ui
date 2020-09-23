import React from 'react';
import styled from 'styled-components';
import { Flexbox, Icon } from '../..';
import { PaginationCompactProps, BrowseButtonProps, PageItemProps } from './Pagination.types';

const StyledBox = styled.a`
  display: flex;
  height: 40px;
  width: 40px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const MobilePaginationButton: React.FC<Omit<PageItemProps, 'active'>> = ({ children, onClick }) => (
  <StyledBox
    href="#"
    role="button"
    onClick={(e) => {
      e.preventDefault();
      if (onClick) {
        onClick(e);
      }
    }}
    onKeyDown={(e) => {
      // Link should trigger on spacebar clicked like actual button.
      if (onClick) {
        onClick(e);
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
