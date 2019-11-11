import * as React from 'react';
import styled, { css } from 'styled-components';
import {
  Flexbox,
  Typography,
  List as UIList,
  FadedScroll,
  DropdownBubble,
  Box,
  Separator,
} from '../../../../..';
// Need to import it directly
// Otherwise causes circular deps problems
import { Checkbox } from '../../../Checkbox';

type ListProps = {
  listPosition?: string;
  searchComponent?: React.ReactNode;
  actionsComponent?: React.ReactNode;
  maxHeight?: string;
  noFormField?: boolean;
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

export const OptionList: React.FC<ListProps> = ({
  children,
  searchComponent = null,
  actionsComponent = null,
  maxHeight,
  listPosition,
  noFormField,
}) => {
  const areOptionsProvided = React.Children.count(children) > 0;
  return (
    <IE11Wrapper>
      <StyledDropdownBubble
        position={noFormField ? getTrianglePosition(listPosition) : 'right'}
        maxHeight={maxHeight || '240px'}
      >
        {searchComponent}
        <FadedScrollWithoutPaddingBottom enableMobileFade fadeHeight={8}>
          <StyledList role="listbox">{children}</StyledList>
        </FadedScrollWithoutPaddingBottom>
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

const FullHeightFlexbox = styled(Flexbox)`
  height: 100%;
`;

type OptionProps = {
  selected?: boolean;
  disabled?: boolean;
  label: React.ReactNode;
  value: any;
  focused?: boolean;
  selectAll?: boolean;
  isKeyboardNavigation?: boolean;
};

const hoverIfNotKeyboardNav = css<{ disabled?: boolean; isKeyboardNavigation?: boolean }>`
  ${p =>
    p.disabled || p.isKeyboardNavigation
      ? ''
      : `
&:hover { 
  background: ${p.theme.color.background};
  input + ${Checkbox.components.CheckmarkBox} {
    &::before {
      border: 1px solid ${p.theme.color.cta};
    }
  }
}
`}
`;

const StyledOption = styled.div<Partial<OptionProps>>`
${p =>
  !p.selectAll
    ? ''
    : `
border-bottom: 1px solid ${p.theme.color.divider};
box-sizing: border-box;
`}
  padding-right: ${p => p.theme.spacing.unit(3)}px;
  padding-left: ${p => p.theme.spacing.unit(3)}px;

  height: ${p => p.theme.spacing.unit(7)}px;

  white-space: nowrap;
  background: ${p => {
    if (p.focused && p.isKeyboardNavigation) return p.theme.color.background;
    return p.theme.color.selectOptionBackground;
  }};
  cursor: pointer;
  ${hoverIfNotKeyboardNav}
  ${p =>
    p.disabled
      ? `
        color: ${p.theme.color.disabledText}
        pointer-events: none;
      `
      : ``}
`;

const Checkbox16px = styled(Checkbox)`
  ${Checkbox.components.CheckmarkBox} {
    width: 16px;
    height: 16px;
  }
`;

const FlexboxWidth = styled(Flexbox)`
  /* FIXME: minus checkbox width and minus padding */
  flex: 1 1 100%;
  min-width: 0;
`;

const EllipsizingText = styled(Typography)`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Option = React.forwardRef<HTMLDivElement, OptionProps>(
  ({ label, disabled, selected, focused, selectAll, isKeyboardNavigation }, ref) => (
    <StyledOption
      ref={ref}
      selected={selected}
      disabled={disabled}
      selectAll={selectAll}
      focused={isKeyboardNavigation ? focused : false}
      isKeyboardNavigation={isKeyboardNavigation}
    >
      <FullHeightFlexbox container alignItems="center" gutter={2}>
        <Flexbox item container alignItems="center" flex="0 0 auto">
          {/** TODO: revisit a11y here */}
          <Checkbox16px
            width="16px"
            name="example"
            label=""
            checked={selected}
            readOnly
            visuallyFocused={!disabled && isKeyboardNavigation ? focused : false}
          />
        </Flexbox>
        <FlexboxWidth item container justifyContent="space-between" alignItems="center">
          <EllipsizingText
            type="secondary"
            color={disabled ? t => t.color.disabledText : t => t.color.text}
          >
            {label}
          </EllipsizingText>
        </FlexboxWidth>
      </FullHeightFlexbox>
    </StyledOption>
  ),
);
