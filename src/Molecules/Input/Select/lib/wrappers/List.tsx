import * as React from 'react';
import styled from 'styled-components';

const getWidth = (p: any) => {
  if (p.width) return p.width;
  if (p.noFormField) {
    return 'auto';
  }
  return 'calc(100% + 2px)'; // adjusting for border
};

const StyledListWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: ${getWidth};
  max-height: ${p =>
    typeof p.maxHeight !== 'undefined' ? p.maxHeight : `${p.theme.spacing.unit(60)}px`};
  position: absolute;
  top: 100%;
  left: -1px; /* adjusting for border */
  z-index: 4;
  margin: -4px;
  padding: 4px;
  overflow: hidden;
  padding-bottom: 16px;
`;

export const ListWrapper = React.forwardRef<HTMLDivElement, any>(
  (
    {
      component: Component,
      children,
      noFormField,
      onKeyDown,
      onFocus,
      onBlur,
      onMouseMove,
      searchComponent,
      actionsComponent,
      width,
      'data-testid': dataTestId,
      maxHeight,
    },
    ref,
  ) => {
    return (
      <StyledListWrapper
        ref={ref}
        data-testid={dataTestId}
        noFormField={noFormField}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onMouseMove={onMouseMove}
        onBlur={onBlur}
        width={width}
        maxHeight={maxHeight}
      >
        <Component
          searchComponent={searchComponent}
          actionsComponent={actionsComponent}
          position={noFormField ? 'left' : 'right'}
        >
          {children}
        </Component>
      </StyledListWrapper>
    );
  },
);
