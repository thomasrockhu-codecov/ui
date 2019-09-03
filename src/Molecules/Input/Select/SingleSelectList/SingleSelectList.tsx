import * as React from 'react';
import styled, { css } from 'styled-components';
import { Flexbox, Typography, Icon, List as UIList, Box } from '../../../..';

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
  margin-left: -10px;
  width: 0;
  height: 0;
  content: '';
  speak: none;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
`;

const Triangle = styled.div.attrs({ 'aria-hidden': true })`
  &:before {
    ${leftAndRightCss}
    ${commonTriangleCss}
    top: -10px;
    border-bottom: 10px solid;
    border-bottom-color: #ebebe8;
  }
  &:after {
    ${leftAndRightCss}
    ${commonTriangleCss}
    top: -8px;
    border-bottom: 10px solid;
    border-bottom-color: #ffffff;
  }
`;

const StyledList = styled(UIList as any)`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: relative;
  top: 10px;
  border: 1px solid #ebebe8;
  background-color: #ffffff;
  padding-top: 8px;
  padding-bottom: 8px;
  box-shadow: 0 2px 4px 0 rgba(40, 40, 35, 0.15);
`;

export const List: React.FC<ListProps> = ({ children, position }) => (
  <StyledList role="listbox">
    <Triangle position={position} />
    {children}
  </StyledList>
);

const FullHeightFlexbox = styled(Flexbox)`
  height: 100%;
`;

type ListItemProps = { selected?: boolean; disabled?: boolean; label: React.ReactNode; value: any };
const StyledListItem = styled.div<Pick<ListItemProps, 'selected' | 'disabled'>>`
  padding-right: ${p => p.theme.spacing.unit(2)}px;
  padding-left: ${p => p.theme.spacing.unit(2)}px;
  color: ${p => (p.selected ? p.theme.color.cta : p.theme.color.inputBorderHover)};
  height: ${p => p.theme.spacing.unit(6)}px;
  outline: none;

  white-space: nowrap;
  background: ${p =>
    p.disabled ? p.theme.color.disabledBackground : p.theme.color.card /** TODO: fixme */};
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

export const ListItem: React.FC<ListItemProps> = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ label, disabled, selected }, ref) => (
    <StyledListItem ref={ref} selected={selected} disabled={disabled} tabIndex={disabled ? -1 : 0}>
      <Typography type="tertiary" color="inherit">
        <FullHeightFlexbox justifyContent="space-between" container>
          <Flexbox item container alignItems="center">
            {label}
          </Flexbox>
          {selected && (
            <Flexbox item container alignItems="center">
              <Box pl={2}>
                <Icon.CheckMark color={t => t.color.cta} />
              </Box>
            </Flexbox>
          )}
        </FullHeightFlexbox>
      </Typography>
    </StyledListItem>
  ),
);
