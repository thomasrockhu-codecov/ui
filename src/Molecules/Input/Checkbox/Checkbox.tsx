import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FormLabel, VisuallyHidden, Icon } from '../../..';
import { FormFieldSimple } from '../FormFieldSimple';
import { Props } from './Checkbox.types';

const Checkbox: React.FC<Props> = props => {
  const { name, value, label, defaultChecked } = props;

  return (
    <FormLabel {...props}>
      <input type="checkbox" name={name} value={value} defaultChecked={defaultChecked} />
      {label}
    </FormLabel>
  );
};

export default Checkbox;
