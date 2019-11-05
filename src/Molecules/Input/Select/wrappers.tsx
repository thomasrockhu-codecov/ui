import * as React from 'react';
import R from 'ramda';
import styled, { css } from 'styled-components';
import { Typography, Flexbox, Icon, FormField } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';
import { Option, Props } from './Select.types';
import { useSelectMachineFromContext } from './context';

const CleanNormalizedButton = React.forwardRef((props: any, ref: React.Ref<any>) => (
  <NormalizedElements.Button {...R.omit(['absolutePositioning'], props)} ref={ref} />
));

const StyledA11yButton = styled(CleanNormalizedButton)`
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

const getWidth = (p: any) => {
  if (p.width) return p.width;
  if (p.noFormField) {
    return 'auto';
  }
  return 'calc(100% + 2px)'; // adjusting for border
};
const StyledListWrapper = styled.div<any>`
  width: ${getWidth};
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
      width,
      'data-testid': dataTestId,
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
      >
        <Component searchComponent={searchComponent} position={noFormField ? 'left' : 'right'}>
          {children}
        </Component>
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
  (
    {
      placeholder,
      open,
      component: Component,
      noFormField,
      disabled,
      id,
      label,
      'data-testid': dataTestId,
    },
    ref,
  ) => {
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
            data-testid={dataTestId}
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
    id: string;
  }
>((props, ref) => {
  const [current] = useSelectMachineFromContext();
  const selected =
    current.context.selectedItems.includes(props.option) ||
    current.context.selectedItems.some(x => x.value === props.option.value);
  const disabled = props.option.disabled;

  const Component = props.component;
  return (
    <StyledListItemWrapper
      ref={ref}
      onClick={props.onClick}
      role="option"
      aria-selected={selected}
      aria-disabled={disabled}
      id={`${props.id}-option-${props.index}`}
      tabIndex={0}
    >
      <Component index={props.index} isKeyboardNavigation={props.isKeyboardNavigation} />
    </StyledListItemWrapper>
  );
});

const Chevron = styled(Icon.ChevronDown)<{ open: boolean }>`
  transform: translateY(-50%) ${p => (p.open ? 'rotate(180deg)' : 'rotate(0)')};
  transform-origin: center center;
  transition: transform 0.16s ease-out;
  position: absolute;
  height: ${p => p.theme.spacing.unit(2)}px;
  top: 50%;
  right: ${p => p.theme.spacing.unit(1)}px;
  pointer-events: none;
`;

const StyledRelativeDiv = styled.div<any>`
  position: relative;
  display: inline-block;
  width: ${p => (p.fullWidth ? '100%' : 'initial')};
`;

const height = css<Pick<Props, 'size'>>`
  height: ${p => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
`;

const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
  ${p =>
    p.disabled
      ? ''
      : `
      &:hover {
        border-color: ${p.theme.color.inputBorderHover};
      }
`}
`;

const focusBorderStyles = css`
  &:focus-within {
    border-color: ${p => p.theme.color.borderActive};
  }
  &.focus-within {
    border-color: ${p => p.theme.color.borderActive};
  }
`;

const hasError = (error?: Props['error']) => error && error !== '';

const borderStyles = css<Pick<Props, 'error' | 'success'>>`
  outline: none;
  border: 1px solid
    ${p => {
      if (hasError(p.error)) return p.theme.color.inputBorderError;
      if (p.success) return p.theme.color.inputBorderSuccess;
      return p.theme.color.inputBorder;
    }};
  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
`;

const SelectWrapper = styled.div`
  ${height}
  ${borderStyles}
  position:relative;
`;
export const FormFieldOrFragment = React.forwardRef<HTMLDivElement, any>(
  ({ children, noFormField, open, onFocus, onBlur, fullWidth, id, size, ...props }, ref) => (
    <StyledRelativeDiv {...(noFormField ? { ref } : {})} fullWidth={fullWidth} width={props.width}>
      <Flexbox
        {...(noFormField ? { onBlur, onFocus } : {})}
        container
        alignItems="center"
        {...(fullWidth ? { width: '100%' } : {})}
      >
        {noFormField ? (
          children
        ) : (
          <FormField fieldId={id} {...props} {...(fullWidth ? { width: '100%' } : {})} ref={ref}>
            <SelectWrapper onBlur={onBlur} onFocus={onFocus} size={size} {...props} tabIndex={0}>
              {children}
              <Chevron open={open} />
            </SelectWrapper>
          </FormField>
        )}
      </Flexbox>
    </StyledRelativeDiv>
  ),
);
FormFieldOrFragment.displayName = 'FormFieldOrFragment';
