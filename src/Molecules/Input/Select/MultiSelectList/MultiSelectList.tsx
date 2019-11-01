import * as React from 'react';
import styled, { css } from 'styled-components';
import { Flexbox, Typography, List as UIList } from '../../../..';
// Need to import it directly
// Otherwise causes circular deps problems
import { Checkbox } from '../../Checkbox';

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
  top: -${TRIANGLE_SIZE - 1}px;
    border-bottom: ${TRIANGLE_SIZE}px solid;
    border-bottom-color: #ffffff;
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
  box-shadow: 0 2px 4px 0 ${p => p.theme.color.shadowCard};
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
const FullHeightFlexboxWithFade = styled.div`
  ${fadeCss}
`;

export const OptionList: React.FC<ListProps> = ({ children, position, searchComponent }) => (
  <FullHeightFlexboxWithFade>
    <StyledList role="listbox" position={position} aria-multiselectable="true" tabIndex={0}>
      {searchComponent}
      <OverflowScroll>{children}</OverflowScroll>
    </StyledList>
  </FullHeightFlexboxWithFade>
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
};

const hoverIfNotKeyboardNav = css`
  ${p =>
    p.disabled || p.isKeyboardNavigation
      ? ''
      : `
&:hover { 
  background: ${p.theme.color.background};
  ${Checkbox.components.CheckmarkBox} {
    outline: 1px solid ${p.theme.color.cta};
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
margin-bottom: ${p.theme.spacing.unit(2)}px;
`}
  padding-right: ${p => p.theme.spacing.unit(2)}px;
  padding-left: ${p => p.theme.spacing.unit(2)}px;

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
