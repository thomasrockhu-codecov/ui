import React from 'react';
import styled, { css } from 'styled-components';
import {
  Box,
  DropdownBubble,
  FadedScroll,
  Flexbox,
  Icon,
  List as UIList,
  Separator,
  Typography,
} from '../../../../..';

type ListProps = {
  searchComponent?: React.ReactNode;
  actionsComponent?: React.ReactNode;
  maxHeight?: string;
  noFormField?: boolean;
  listPosition?: string;
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
  noFormField,
  listPosition,
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
  ${(p) =>
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
  padding-right: ${(p) => p.theme.spacing.unit(3)}px;
  padding-left: ${(p) => p.theme.spacing.unit(3)}px;
  padding-top: ${(p) => p.theme.spacing.unit(1)}px;
  padding-bottom: ${(p) => p.theme.spacing.unit(1)}px;
  color: ${(p) => (p.selected ? p.theme.color.cta : p.theme.color.text)};
  height: ${(p) => p.theme.spacing.unit(6)}px;
  outline: none;
  white-space: nowrap;
  ${(p) =>
    p.focused
      ? `
    transform: translateZ(0);
  `
      : ''}
  background: ${(p) => {
    if (p.focused && p.isKeyboardNavigation) return p.theme.color.background;
    return p.theme.color.selectOptionBackground;
  }};
  ${hoverIfNotKeyboardNav}
  cursor: pointer;
  ${(p) =>
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
          <Icon.CheckMark size={4} color={(t) => t.color.cta} />
        </Box>
      </Flexbox>
    )}
  </StyledOption>
);

const StyledOptgroup = styled(Typography)<{ index: number }>`
  display: flex;
  align-items: center;
  padding-right: ${(p) => p.theme.spacing.unit(3)}px;
  padding-left: ${(p) => p.theme.spacing.unit(3)}px;
  padding-top: ${(p) => p.theme.spacing.unit(p.index === 0 ? 1 : 3)}px;
  padding-bottom: ${(p) => p.theme.spacing.unit(1)}px;
  color: ${(p) => p.theme.color.label};
  pointer-events: none;
  user-select: none;
`;

export const Optgroup: React.FC<{ index: number; label: string }> = ({ index, label }) => {
  return (
    <StyledOptgroup index={index} type="tertiary">
      {label}
    </StyledOptgroup>
  );
};
