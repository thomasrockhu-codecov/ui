import * as React from 'react';
import styled from 'styled-components';

const getWidth = (p: any) => {
  if (p.width) return p.width;
  if (p.noFormField) {
    return 'auto';
  }
  return 'calc(100% + 2px)'; // adjusting for border
};

const getStylesForPosition = (listPosition: string) => {
  switch (listPosition) {
    case 'left':
      return `right: -1px;`;
    default:
      return `left: -1px;`;
  }
};

const StyledListWrapper = styled.div<any>`
  transform: translate3d(0, 0, 0);
  position: absolute;
  top: 100%;
  ${p => getStylesForPosition(p.listPosition)}
  z-index: 4;
  margin: -4px;
  padding: 4px;
  width: ${getWidth};
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
      listPosition,
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
        listPosition={listPosition}
      >
        <Component
          searchComponent={searchComponent}
          actionsComponent={actionsComponent}
          maxHeight={maxHeight}
          listPosition={listPosition}
          noFormField={noFormField}
        >
          {children}
        </Component>
      </StyledListWrapper>
    );
  },
);
