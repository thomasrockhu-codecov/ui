import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Props } from './FormField.types';
import { VisuallyHidden, FormLabel, Typography, Fieldset, Legend } from '../../..';
import { assert } from '../../../common/utils';

const hasError = (error?: Props['error']) => error && error !== '';

const Wrapper = styled.div<{ width?: string | number }>`
  ${p => (p.width ? `width: ${p.width};` : 'width: 200px;')}
  display: inline-block;
`;

const BottomWrapper = styled(motion.div)``;

export const FormField: React.FC<Props> = ({
  children,
  className,
  error,
  extraInfo,
  fieldId,
  forId,
  group,
  hideLabel,
  label,
  required = false,
  width,
}) => {
  const labelText = `${label} ${required ? '*' : ''}`;

  let field = (
    <FormLabel hideLabel={hideLabel}>
      {labelText}
      {children}
    </FormLabel>
  );

  if (group) {
    field = (
      <Fieldset>
        <Legend styleType="label">{labelText}</Legend>
        {children}
      </Fieldset>
    );
  }

  if (fieldId || forId) {
    field = (
      <>
        <FormLabel hideLabel={hideLabel} forId={fieldId || forId}>
          {labelText}
        </FormLabel>
        {children}
      </>
    );
  }

  if (forId) {
    assert(false, `FormField: the prop forId is deprecated, please use fieldId instead.`, {
      level: 'warn',
    });
  }

  return (
    <Wrapper width={width} className={className}>
      {field}
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
};
