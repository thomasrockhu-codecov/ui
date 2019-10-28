import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Typography, Flexbox } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';
import { Option } from './Select.types';
import { useSelectMachineFromContext } from './context';

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
  position: absolute;
  top: 100%;
  z-index: 4;
  margin: -4px;
  padding: 4px;
  overflow: hidden;
  padding-bottom: 16px;
`;

export const ListWrapper = React.forwardRef<HTMLDivElement, any>(
  (
    { component: Component, children, noFormField, onKeyDown, onFocus, onBlur, onHoverNewItem },
    ref,
  ) => {
    const [prevElem, setPrevElem] = React.useState(null);
    // const handleHover = e => {
    //   const elem = [...document.elementsFromPoint(e.clientX, e.clientY)].find(
    //     x => x.tagName === 'LI',
    //   );
    //   if (prevElem !== elem && elem) {
    //     onHoverNewItem(elem);
    //     setPrevElem(elem);
    //   }

    //   // if (props.onMouseEnter) {
    //   //   props.onMouseEnter(props.index);
    //   // }
    // };
    return (
      <StyledListWrapper
        ref={ref}
        noFormField={noFormField}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        // onMouseOver={handleHover}
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
    const [state, send] = useSelectMachineFromContext();
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
    onMouseEnter: (index: number) => void;
    onClick: (params: { selected: boolean; option: Option }, e: React.MouseEvent) => void;
  }
>((props, ref) => {
  const [current] = useSelectMachineFromContext();
  const selected = current.context.selectedItems.includes(props.option);
  const disabled = props.option.disabled;

  const Component = props.component;
  const handleHover = () => {
    if (props.onMouseEnter) {
      props.onMouseEnter(props.index);
    }
  };

  return (
    <StyledListItemWrapper
      ref={ref}
      role="option"
      onClick={props.onClick}
      onMouseEnter={handleHover}
      aria-selected={selected}
      aria-disabled={disabled}
      tabIndex={0}
    >
      <Component index={props.index} />
    </StyledListItemWrapper>
  );
});
