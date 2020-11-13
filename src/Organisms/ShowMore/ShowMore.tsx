import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

import { Box, ShowMoreButton } from '../..';

import { Props, ContainerProps } from './ShowMore.types';
import useOverflow from './useOverflow';

const StyledDiv = styled.div<ContainerProps>`
  position: relative;
  overflow: ${(p) => (p.showMoreButton ? 'hidden' : 'visible')};
  max-height: ${(p) => (p.showMoreClicked ? 'none' : `${p.cutoffHeight}px`)};
  &::before {
    display: ${(p) => (p.showMoreButton ? 'block' : 'none')};
    content: '';
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    background: ${(p) => `linear-gradient(rgba(255, 255, 255, 0), ${p.theme.color.card})`};
  }
`;

export const ShowMore: React.FC<Props> = ({
  children,
  cutoffHeight = 200,
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

  const isOverflowing = useOverflow(containerRef, [children]);
  const showMoreButton = isOverflowing && !showMoreClicked;

  return (
    <>
      <StyledDiv
        ref={containerRef}
        showMoreButton={showMoreButton}
        showMoreClicked={showMoreClicked}
        cutoffHeight={cutoffHeight}
      >
        {children}
      </StyledDiv>
      {showMoreButton && (
        <Box py={4}>
          <ShowMoreButton onClick={onShowMoreClick} align="left" showMoreText={showMoreText} />
        </Box>
      )}
    </>
  );
};
