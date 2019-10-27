import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Typography, Flexbox, VisuallyHidden } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';
import { Option } from './Select.types';
import { useSelectReducer } from './context';

const StyledA11yButton = styled(NormalizedElements.Button)`
  background: ${p => (p.disabled ? p.theme.color.disabledBackground : 'transparent')};
  width: 100%;
  height: 100%;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};

  display: flex;
  border: 0;

  ${p =>
    !p.absolutePositioning
      ? ''
      : `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  outline: 0;

  padding: 0;
  text-align: initial;
  `}
`;

const StyledListWrapper = styled.div<any>`
  width: ${p => (p.noFormField ? 'auto' : '100%')};
  height: 100%;
  position: absolute;
  top: 100%;
  z-index: 4;
`;

export const ListWrapper = React.forwardRef<HTMLDivElement, any>(
  ({ component: Component, children, noFormField, onKeyDown, onFocus, onBlur }, ref) => {
    return (
      <StyledListWrapper
        ref={ref}
        noFormField={noFormField}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <Component position={noFormField ? 'left' : 'right'}>{children}</Component>
      </StyledListWrapper>
    );
  },
);

const StyledListItemWrapper = styled.li`
  width: 100%;
  outline: none;
`;

type ListItemComponent = React.ComponentType<{ index: number; ref: React.Ref<HTMLElement> }>;
const FullWidthFlexbox = styled(Flexbox)`
  width: 100%;
`;

export const SelectedValueWrapper = React.forwardRef<any, any>(
  ({ placeholder, open, component: Component, noFormField, disabled, id, label }, ref) => {
    const [state, send] = useSelectReducer();
    const value = state.context.selectedItems;
    const screenReaderTextSelection =
      value.length === 1 ? R.pathOr('', [0, 'label'], value) : `${value.length} items`;
    const screenReaderText =
      value.length > 0 ? `${label}: ${screenReaderTextSelection}` : `${label}: ${placeholder}`;

    const handleClick = e => {
      e.preventDefault();
      send({ type: 'TOGGLE' });
    };

    return (
      <Flexbox container direction="column" justifyContent="center">
        <Typography type="secondary">
          <StyledA11yButton
            id={id}
            type="button"
            /** need to exclude this button from document.forms */
            form=""
            absolutePositioning={!noFormField}
            ref={ref}
            aria-haspopup="listbox"
            aria-expanded={open ? 'true' : 'false'}
            onClick={handleClick}
            disabled={disabled}
            tabIndex={0}
            aria-label={screenReaderText}
            aria-describedby={`label-for-${id}`}
          >
            <FullWidthFlexbox container item aria-hidden="true">
              <Component />
            </FullWidthFlexbox>
          </StyledA11yButton>
        </Typography>
      </Flexbox>
    );
  },
);

export const ListItemWrapper = React.forwardRef<
  HTMLElement | null,
  {
    component: ListItemComponent;
    option: Option;
    index: number;
    onKeyDown: React.KeyboardEventHandler;
    onClick: (params: { selected: boolean; option: Option }, e: React.MouseEvent) => void;
  }
>((props, outerRef) => {
  const [current] = useSelectReducer();
  const selected = current.context.selectedItems.includes(props.option);
  const handleClick = React.useCallback(
    e => props.onClick({ selected, option: props.option }, e),
    [props.onClick, props.option, selected], // eslint-disable-line react-hooks/exhaustive-deps
  );

  // Passing ref through to the Component
  // React.useImperativeHandle(outerRef, () => innerRef.current);

  const Component = props.component;
  return (
    <StyledListItemWrapper
      ref={outerRef}
      role="option"
      onClick={handleClick}
      aria-selected={selected}
      tabIndex={0}
    >
      <Component index={props.index} />
    </StyledListItemWrapper>
  );
});
