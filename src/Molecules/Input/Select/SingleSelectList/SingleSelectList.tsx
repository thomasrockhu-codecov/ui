import * as React from 'react';
import styled, { css } from 'styled-components';
import { Flexbox, Typography, Icon, List as UIList, Box } from '../../../..';

const TRIANGLE_SIZE = 6;
type ListProps = {
  /**
   * @default 'right'
   */
  position?: 'left' | 'center' | 'right';
};
const leftAndRightCss = css<Pick<ListProps, 'position'>>`
  ${p => {
    switch (p.position) {
      case 'left':
        return 'left: 20px;';
      case 'center':
        return 'left: 50%;';
      case 'right':
      default:
        return 'right: 20px;';
    }
  }}
`;

const commonTriangleCss = css<any>`
  position: absolute;
  margin-left: -${TRIANGLE_SIZE}px;
  width: 0;
  height: 0;
  content: '';
  speak: none;
  border-left: ${TRIANGLE_SIZE}px solid transparent;
  border-right: ${TRIANGLE_SIZE}px solid transparent;
`;

const triangleCss = css`
  &:before {
    ${leftAndRightCss}
    ${commonTriangleCss}
  top: -${TRIANGLE_SIZE}px;
    border-bottom: ${TRIANGLE_SIZE}px solid;
    border-bottom-color: #bcbcb6;
  }
  &:after {
    ${leftAndRightCss}
    ${commonTriangleCss}
  top: -${TRIANGLE_SIZE - 2}px;
    border-bottom: ${TRIANGLE_SIZE}px solid;
    border-bottom-color: #ffffff;
  }
`;

const fadeCss = css`
  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    bottom: calc(100% - 240px - 30px);
    left: 6px;
    height: 20px;
    width: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
    width: calc(100% - 12px);
  }
`;
const StyledList = styled(UIList)<any>`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: relative;
  top: 10px;
  border: 1px solid #bcbcb6;
  background-color: #ffffff;
  padding-top: ${p => p.theme.spacing.unit(2)}px;
  padding-bottom: ${p => p.theme.spacing.unit(2)}px;
  box-shadow: 0 2px 4px 0 rgba(40, 40, 35, 0.15);
  max-height: 240px;
  ${triangleCss}
`;

const OverflowScroll = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  /* helps with outline */
  padding: 1px;
  margin: -1px;
`;

const FullHeightFlexboxWithFade = styled.div`
  margin: 0 1px;
  ${fadeCss}
`;

export const OptionList: React.FC<ListProps> = ({ children, position, searchComponent }) => (
  <FullHeightFlexboxWithFade>
    <StyledList role="listbox" position={position}>
      {searchComponent}
      <OverflowScroll>{children}</OverflowScroll>
    </StyledList>
  </FullHeightFlexboxWithFade>
);

type OptionProps = {
  focused?: boolean;
  selected?: boolean;
  disabled?: boolean;
  label: React.ReactNode;
  value: any;
  ref: React.Ref<HTMLLIElement>;
};

const hoverIfNotKeyboardNav = css`
  ${p =>
    p.isKeyboardNavigation
      ? ''
      : `
&:hover { 
  background: ${p.theme.color.background};
}
`}
`;
const StyledOption = styled(Typography)<OptionProps>`
  display: flex;
  align-items: center;
  padding-right: ${p => p.theme.spacing.unit(3)}px;
  padding-left: ${p => p.theme.spacing.unit(3)}px;
  padding-top:${p => p.theme.spacing.unit(1)}px;
  padding-bottom:${p => p.theme.spacing.unit(1)}px;
  color: ${p => (p.selected ? p.theme.color.cta : p.theme.color.inputBorderHover)};
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
    // if (p.disabled) return p.theme.color.disabledBackground;
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

export const Option = React.forwardRef<HTMLDivElement, OptionProps>(
  ({ label, disabled, selected, focused, onClick, isKeyboardNavigation }, ref) => (
    <StyledOption
      ref={ref}
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
  ),
);
