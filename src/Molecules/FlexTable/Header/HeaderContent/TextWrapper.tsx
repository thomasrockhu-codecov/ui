import React from 'react';
import { getFontSizeTypographyType } from '../../shared/textUtils';
import { TextWrapperComponent } from './HeaderContent.types';
import Typography from '../../../../Atoms/Typography';

export const TextWrapper: TextWrapperComponent = ({ fontSize = 'm', sorted, children }) => (
  <Typography
    type={getFontSizeTypographyType(fontSize)}
    color={t => (sorted ? t.color.text : t.color.label)}
    weight={sorted ? 'bold' : 'regular'}
  >
    {children}
  </Typography>
);
