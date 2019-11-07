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
  /**
   * @default 'right'
   */
  position?: 'left' | 'center' | 'right';
  searchComponent?: React.ReactNode;
  actionsComponent?: React.ReactNode;
};

const StyledList = styled(UIList)<any>`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const FadedScrollWithoutPaddingBottom = styled(FadedScroll)`
  padding-bottom: 0;
`;

export const OptionList: React.FC<ListProps> = ({
  children,
  position,
  searchComponent = null,
  actionsComponent = null,
}) => (
  <DropdownBubble position={position}>
    <Box py={2}>
      {searchComponent}
      <FadedScrollWithoutPaddingBottom maxHeight="200px" enableMobileFade fadeHeight={8}>
        <StyledList role="listbox">{children}</StyledList>
      </FadedScrollWithoutPaddingBottom>
      {actionsComponent !== null && (
        <>
          <Separator />
          <Box pt={2}>{actionsComponent}</Box>
        </>
      )}
    </Box>
  </DropdownBubble>
);

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
  ${Checkbox.components.CheckmarkBox} {
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
        <Flexbox item container alignItems="center">
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
        <Flexbox item container justifyContent="space-between" alignItems="center">
          <Flexbox item container direction="column" grow={1}>
            <Flexbox item>
              <Typography
                type="secondary"
                color={disabled ? t => t.color.disabledText : t => t.color.text}
              >
                {label}
              </Typography>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </FullHeightFlexbox>
    </StyledOption>
  ),
);
