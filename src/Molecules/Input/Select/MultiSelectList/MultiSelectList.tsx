import * as React from 'react';
import styled, { css } from 'styled-components';
import { Flexbox, Typography, List as UIList } from '../../../..';
// Need to import it directly
// Otherwise causes circular deps problems
import { Checkbox } from '../../Checkbox';

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
  box-shadow: 0 2px 4px 0 ${p => p.theme.color.shadowCard};
  ${triangleCss}
`;

export const OptionList: React.FC<ListProps> = ({ children, position }) => (
  <StyledList role="listbox" position={position}>
    {children}
  </StyledList>
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
  color: ${p => (p.selected ? p.theme.color.cta : p.theme.color.inputBorderHover)};
  height: ${p => p.theme.spacing.unit(7)}px;

  white-space: nowrap;
  background: ${p => {
    if (p.disabled) return p.theme.color.disabledBackground;
    if (p.focused) return p.theme.color.background;
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

       

       
      `}
`;

const Checkbox16px = styled(Checkbox)`
  ${Checkbox.components.CheckmarkBox} {
    width: 16px;
    height: 16px;
  }
`;

export const Option = React.forwardRef<HTMLDivElement, OptionProps>(
  ({ label, disabled, selected, focused, selectAll }, ref) => (
    <StyledOption
      ref={ref}
      selected={selected}
      disabled={disabled}
      selectAll={selectAll}
      focused={focused}
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
            visuallyFocused={focused}
          />
        </Flexbox>
        <Flexbox item container justifyContent="space-between" alignItems="center">
          <Flexbox item container direction="column" grow={1}>
            <Flexbox item>
              <Typography type="secondary" color={t => t.color.text}>
                {label}
              </Typography>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </FullHeightFlexbox>
    </StyledOption>
  ),
);
