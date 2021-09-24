import React from 'react';
import styled, { css } from 'styled-components';
import { Box, DropdownBubble, FadedScroll, List as UIList, Separator } from '../../../../..';
import { useMedia } from '../../../../../Atoms/Media';

type ListProps = {
  listPosition?: string;
  searchComponent?: React.ReactNode;
  actionsComponent?: React.ReactNode;
  maxHeight?: string;
  noFormField?: boolean;
  placement?: 'bottom' | 'top';
};

const StyledList = styled(UIList)<any>`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const FadedScrollWithoutPaddingBottom = styled(FadedScroll)`
  height: 100%;
`;

/**
 * This thing fixes IE11 flex overflow.
 * Don't ask me
 * https://jsfiddle.net/gktpsyv5/
 */
const IE11Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledDropdownBubble = styled(DropdownBubble)`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  width: 100%;

  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  -ms-overflow-y: scroll;
  ${({ theme }) =>
    theme.media.greaterThan(theme.size.xs) &&
    css`
      min-width: ${theme.spacing.unit(41)}px;
    `}
`;

const getTrianglePosition = (position: string | undefined) => {
  switch (position) {
    case 'left':
      return 'right';
    case 'bottom':
      return 'center';
    default:
      return 'left';
  }
};

export const List: React.FC<ListProps> = ({
  children,
  searchComponent = null,
  actionsComponent = null,
  maxHeight,
  listPosition,
  noFormField,
  placement,
}) => {
  const areOptionsProvided = React.Children.count(children) > 0;
  // media query for IE10+
  const isIE10Plus = useMedia('all and (-ms-high-contrast: none), (-ms-high-contrast: active)');
  return (
    <IE11Wrapper>
      <StyledDropdownBubble
        position={noFormField ? getTrianglePosition(listPosition) : 'right'}
        placement={placement}
        maxHeight={maxHeight || '240px'}
      >
        {searchComponent}
        {isIE10Plus ? (
          <StyledList role="listbox">{children}</StyledList>
        ) : (
          <FadedScrollWithoutPaddingBottom enableMobileFade fadeHeight={8}>
            <StyledList role="listbox">{children}</StyledList>
          </FadedScrollWithoutPaddingBottom>
        )}
        {actionsComponent !== null && (
          <>
            {areOptionsProvided && <Separator />}
            <Box pt={areOptionsProvided ? 1 : 0}>{actionsComponent}</Box>
          </>
        )}
      </StyledDropdownBubble>
    </IE11Wrapper>
  );
};
