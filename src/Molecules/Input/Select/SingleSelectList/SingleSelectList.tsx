import * as React from 'react';
import styled, { css } from 'styled-components';
import { Flexbox, Typography, Icon, List as UIList, Box } from '../../../..';

const TRIANGLE_SIZE = 10;
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
    border-bottom-color: #ebebe8;
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
  position: relative;
  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 234px;
    left: 1px;
    height: 30px;
    width: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
    width: calc(100% - 2px);
  }
`;
const StyledList = styled(UIList)<any>`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: relative;
  top: 10px;
  border: 1px solid #ebebe8;
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
  height: 100%;
  margin: 0 1px;
  ${fadeCss}
`;
export const OptionList: React.FC<ListProps> = ({ children, position, onKeyDown }) => (
  <FullHeightFlexboxWithFade>
    <StyledList role="listbox" position={position} onKeyDown={onKeyDown}>
      <OverflowScroll>{children}</OverflowScroll>
    </StyledList>
  </FullHeightFlexboxWithFade>
);

type OptionProps = { selected?: boolean; disabled?: boolean; label: React.ReactNode; value: any };
const StyledOption = styled(Typography)`
  display: flex;
  align-items: center;
  margin: 0 1px;
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
    outline: 1px solid ${p.theme.color.cta};
  `
      : ''}
  background: ${p => {
    if (p.disabled) return p.theme.color.disabledBackground;
    return p.theme.color.selectOptionBackground;
  }};
  cursor: pointer;
  ${p =>
    p.disabled
      ? `
        color: ${p.theme.color.disabledText}
        pointer-events: none;
      `
      : ` &:hover {
          background: ${p.theme.color.background};
        }

        &:focus {
          background: ${p.theme.color.background};
        }

       
      `}
`;

const EllipsizingText = styled.span`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const Option = React.forwardRef<HTMLDivElement, OptionProps>(
  ({ label, disabled, selected, focused, onClick }, ref) => (
    <StyledOption
      ref={ref}
      selected={selected}
      disabled={disabled}
      focused={focused}
      onClick={onClick}
      type="secondary"
      color="inherit"
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
