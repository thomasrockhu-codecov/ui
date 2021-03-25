import * as React from 'react';
import styled from 'styled-components';
import { usePopper } from 'react-popper';
import { Portal } from '../../../../..';
import { mergeRefs } from '../../../../../common/utils';

const getWidth = (p: any) => {
  if (p.width) return p.width;
  if (p.noFormField) {
    return 'auto';
  }
  return `${p.triggerElement.current?.offsetWidth}px`; // adjusting for border
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
  ${(p) => getStylesForPosition(p.listPosition)}
  z-index: ${(p) => p.theme.zIndex.overlayInModal};
  padding: 0 4px;
  width: ${getWidth};
`;
export const ListWrapperWithPortal = React.forwardRef<HTMLDivElement, any>(
  (
    {
      component: Component,
      triggerElement,
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
      placement,
    },
    ref,
  ) => {
    const [popperElement, setPopperElement] = React.useState(null);

    const { styles, attributes, state } = usePopper(triggerElement.current, popperElement, {
      placement: placement || 'bottom',
    });

    return (
      <Portal>
        <StyledListWrapper
          ref={mergeRefs([setPopperElement, ref])}
          data-testid={dataTestId}
          noFormField={noFormField}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onMouseMove={onMouseMove}
          onBlur={onBlur}
          triggerElement={triggerElement}
          width={width}
          listPosition={listPosition}
          style={styles.popper}
          {...attributes.popper}
        >
          <Component
            searchComponent={searchComponent}
            actionsComponent={actionsComponent}
            maxHeight={maxHeight}
            listPosition={listPosition}
            noFormField={noFormField}
            placement={state?.placement as any}
          >
            {children}
          </Component>
        </StyledListWrapper>
      </Portal>
    );
  },
);
