import * as React from 'react';
import styled, { css } from 'styled-components';
import {
  Flexbox,
  Typography,
  Icon,
  List as UIList,
  Box,
  FadedScroll,
  DropdownBubble,
  Separator,
} from '../../../../..';

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
      <FadedScrollWithoutPaddingBottom maxHeight="240px" enableMobileFade fadeHeight={8}>
        <StyledList role="listbox">{children}</StyledList>
      </FadedScrollWithoutPaddingBottom>
      {actionsComponent !== null && (
        <>
          <Separator />
          <Box pt={1}>{actionsComponent}</Box>
        </>
      )}
    </Box>
  </DropdownBubble>
);

type OptionProps = {
  focused?: boolean;
  selected?: boolean;
  disabled?: boolean;
  label: React.ReactNode;
  value: any;
  isKeyboardNavigation?: boolean;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
};

const hoverIfNotKeyboardNav = css<{ isKeyboardNavigation?: boolean }>`
  ${p =>
    p.isKeyboardNavigation
      ? ''
      : `
&:hover { 
  background: ${p.theme.color.background};
}
`}
`;
const StyledOption = styled(Typography)<Partial<OptionProps>>`
  display: flex;
  align-items: center;
  padding-right: ${p => p.theme.spacing.unit(3)}px;
  padding-left: ${p => p.theme.spacing.unit(3)}px;
  padding-top:${p => p.theme.spacing.unit(1)}px;
  padding-bottom:${p => p.theme.spacing.unit(1)}px;
  color: ${p => (p.selected ? p.theme.color.cta : p.theme.color.text)};
  height: ${p => p.theme.spacing.unit(6)}px;
  outline: none;

  white-space: nowrap;
  ${p =>
    p.focused
      ? `
    transform: translateZ(0);
  `
      : ''}
  background: ${p => {
    if (p.focused && p.isKeyboardNavigation) return p.theme.color.background;
    return p.theme.color.selectOptionBackground;
  }};
  ${hoverIfNotKeyboardNav}
  cursor: pointer;
  ${p =>
    p.disabled
      ? `
        color: ${p.theme.color.disabledText}
        pointer-events: none;
      `
      : ``}
`;

const EllipsizingText = styled.span`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Option: React.FC<OptionProps> = ({
  label,
  disabled,
  selected,
  focused,
  onClick,
  isKeyboardNavigation,
}) => (
  <StyledOption
    selected={selected}
    disabled={disabled}
    focused={focused}
    onClick={onClick}
    type="secondary"
    color="inherit"
    isKeyboardNavigation={isKeyboardNavigation}
  >
    <EllipsizingText>{label}</EllipsizingText>
    {selected && (
      <Flexbox item container alignItems="center">
        <Box pl={2}>
          <Icon.CheckMark size={4} color={t => t.color.cta} />
        </Box>
      </Flexbox>
    )}
  </StyledOption>
);
