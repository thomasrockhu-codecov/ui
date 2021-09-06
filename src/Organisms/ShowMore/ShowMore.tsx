import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

import { Box, ShowMoreButton } from '../..';

import { Props, ContainerProps } from './ShowMore.types';
import useOverflow from './useOverflow';

const StyledDiv = styled.div<ContainerProps>`
  position: relative;
  overflow: ${(p) => (p.showMoreButton ? 'hidden' : 'visible')};

  max-height: ${({ showMoreClicked, cutoffHeight, ellipsis }) =>
    showMoreClicked || ellipsis ? 'none' : `${cutoffHeight}px`};

  ${({ ellipsis, showMoreClicked, showMoreButton, theme, linesToClamp }) =>
    ellipsis
      ? `display: -webkit-box;
  -webkit-line-clamp: ${showMoreClicked ? 'auto' : linesToClamp};
  -webkit-box-orient: vertical;
  overflow: hidden;`
      : `
  &::before {
    display: ${showMoreButton ? 'block' : 'none'};
    content: '';
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    background: linear-gradient(rgba(255, 255, 255, 0), ${theme.color.card});
  }`}
`;

export const ShowMore: React.FC<Props> = ({
  children,
  cutoffHeight = 200,
  ellipsis = false,
  linesToClamp = 2,
  onShowMore = () => {},
  showMoreText,
}) => {
  const containerRef = useRef(null);
  const [showMoreClicked, setShowMoreClicked] = useState(false);

  const onShowMoreClick = useCallback(
    (e) => {
      onShowMore(e);
      setShowMoreClicked(true);
    },
    [onShowMore],
  );

  const isOverflowing = useOverflow(containerRef, children);
  const showMoreButton = isOverflowing && !showMoreClicked;

  return (
    <>
      <StyledDiv
        ellipsis={ellipsis}
        ref={containerRef}
        showMoreButton={showMoreButton}
        showMoreClicked={showMoreClicked}
        cutoffHeight={cutoffHeight}
        linesToClamp={linesToClamp}
      >
        {children}
      </StyledDiv>
      {showMoreButton && (
        <Box pb={ellipsis ? 0 : 4} pt={ellipsis ? 1 : 4}>
          <ShowMoreButton onClick={onShowMoreClick} align="left" showMoreText={showMoreText} />
        </Box>
      )}
    </>
  );
};
