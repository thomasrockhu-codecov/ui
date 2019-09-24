import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Props } from './FormField.types';
import { VisuallyHidden, FormLabel, Typography, Fieldset, Legend } from '../../..';

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
  forId,
  group,
  hideLabel,
  label,
  showRequired = false,
  width,
}) => {
  const labelText = `${label} ${showRequired ? '*' : ''}`;

  const Field = () => {
    if (group) {
      return (
        <Fieldset>
          <Legend styleType="label">{labelText}</Legend>
          {children}
        </Fieldset>
      );
    }

    if (forId) {
      return (
        <>
          <FormLabel hideLabel={hideLabel} forId={forId}>
            {labelText}
          </FormLabel>
          {children}
        </>
      );
    }

    return (
      <>
        <FormLabel hideLabel={hideLabel}>
          {labelText}
          {children}
        </FormLabel>
      </>
    );
  };

  return (
    <Wrapper width={width} className={className}>
      <Field />
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
