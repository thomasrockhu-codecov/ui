import React from 'react';
import styled from 'styled-components';
import { FormLabel, Icon, Flexbox } from '../../..';
import { Props } from './Checkbox.types';

const CHECKBOX_SIZE = 5;

const StyledFormLabel = styled(FormLabel)`
  position: relative;
`;

const Checkmark = styled(Flexbox)`
  width: ${p => p.theme.spacing.unit(CHECKBOX_SIZE)}px;
  height: ${p => p.theme.spacing.unit(CHECKBOX_SIZE)}px;
  border: 1px solid ${p => p.theme.color.inputBorder};
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked + ${Checkmark} {
    border-color: ${p => p.theme.color.cta};
    background: ${p => p.theme.color.cta};
  }

  &[disabled] + ${Checkmark} {
    border-color: ${p => p.theme.color.disabledBackground};
  }

  &:checked[disabled] + ${Checkmark} {
    border-color: ${p => p.theme.color.disabledBackground};
    background: ${p => p.theme.color.disabledBackground};
  }
`;

const LabelText = styled.span`
  padding-left: ${p => p.theme.spacing.unit(2)}px;
`;

const Checkbox: React.FC<Props> = props => {
  const { name, value, label, defaultChecked, disabled } = props;

  return (
    <StyledFormLabel {...props}>
      <Flexbox container>
        <Input
          type="checkbox"
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        <Checkmark container alignItems="center" justifyContent="center">
          <Icon.Plus size={3} color={t => t.color.backgroundInput} />
        </Checkmark>
        <LabelText>{label}</LabelText>
      </Flexbox>
    </StyledFormLabel>
  );
};

export default Checkbox;
