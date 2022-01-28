import React from 'react';
import styled from 'styled-components';
import { Box, DropdownBubble, FadedScroll, List as UIList, Separator } from '../../../../..';

type ListProps = {
  listPosition?: string;
  searchComponent?: React.ReactNode;
  actionsComponent?: React.ReactNode;
  maxHeight?: string;
  noFormField?: boolean;
  placement?: 'bottom' | 'top';
  columns?: number;
};

// special to handle width problem: https://stackoverflow.com/questions/23408539/how-can-i-make-a-displayflex-container-expand-horizontally-with-its-wrapped-con/41209546#41209546
// more info here: https://stackoverflow.com/questions/33891709/when-flexbox-items-wrap-in-column-mode-container-does-not-grow-its-width
const StyledColumnsList = styled(UIList)<any>`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  ${(p) => (p.maxHeight ? `max-height: ${p.maxHeight};` : '')}
  writing-mode: vertical-lr;
  & li {
    width: auto;
    writing-mode: horizontal-tb;
  }
`;

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
  min-width: ${({ theme }) =>
    theme.media.lessThan(theme.breakpoints.sm) ? 'auto' : `${theme.spacing.unit(41)}px`};
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
  columns,
}) => {
  const areOptionsProvided = React.Children.count(children) > 0;
  return (
    <IE11Wrapper>
      <StyledDropdownBubble
        position={noFormField ? getTrianglePosition(listPosition) : 'left'}
        placement={placement}
        maxHeight={maxHeight || '240px'}
      >
        {searchComponent}
        {columns ? (
          <StyledColumnsList maxHeight={maxHeight} columns={columns} role="listbox">
            {children}
          </StyledColumnsList>
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
