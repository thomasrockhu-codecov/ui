import styled from 'styled-components';
import Input from '../../Input';
import { DropdownBubble } from '../../../index';

export const StyledInputText = styled(Input.Text)`
  z-index: 1;
`;

export const StyledDropdownBubble = styled(DropdownBubble)`
  max-width: ${({ theme }) => theme.spacing.unit(78)}px;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  top: -10px;

  &:after,
  &:before {
    display: none;
  }
`;

export const StyledDropdownBubbleWrapper = styled.div`
  position: absolute;
`;
