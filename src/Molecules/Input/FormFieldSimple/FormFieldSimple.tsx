import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Props } from './FormFieldSimple.types';

import { VisuallyHidden, FormLabel, Typography } from '../../..';

const hasError = (error?: Props['error']) => error && error !== '';

const Wrapper = styled.div<{ width?: string | number }>`
  ${p => (p.width ? `width: ${p.width};` : 'width: 200px;')}
  display: inline-block;
`;

const BottomWrapper = styled(motion.div)``;

export const FormFieldSimple: React.FC<Props> = ({
  children,
  className,
  error,
  extraInfo,
  fieldId,
  hideLabel,
  label,
  required,
  showRequired = false,
  width,
}) => (
  <Wrapper width={width} className={className}>
    <FormLabel hideLabel={hideLabel} forId={fieldId}>
      {label}
      {required && showRequired ? ' *' : ''}
    </FormLabel>
    {children}
    <AnimatePresence>
      {hasError(error) ? (
        <BottomWrapper
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          aria-live="polite"
        >
          <Typography type="tertiary" color={t => t.color.negative}>
            <VisuallyHidden>Error: </VisuallyHidden>
            {error}
          </Typography>
        </BottomWrapper>
      ) : (
        extraInfo && (
          <BottomWrapper
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            aria-live="polite"
          >
            <Typography type="tertiary" color={t => t.color.label}>
              {extraInfo}
            </Typography>
          </BottomWrapper>
        )
      )}
    </AnimatePresence>
  </Wrapper>
);
