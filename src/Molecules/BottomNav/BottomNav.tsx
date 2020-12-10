import React from 'react';
import styled from 'styled-components';
import { Flexbox } from '../..';
import Button from '../Button';
import { Props } from './BottomNav.types';

const ForwardButton = styled(Button)`
  margin-left: ${(p) => p.theme.spacing.unit(8)}px;
  min-width: ${(p) => p.theme.spacing.unit(40)}px;
`;

const BottomNav: React.FC<Props> = ({
  isLastStep,
  onCancel,
  onForward,
  onPrev,
  onSubmit,
  isLoading,
  titleText,
  cancelText,
  previousText,
  nextText,
  submitText,
}) => {
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <nav aria-label={titleText}>
      <Flexbox container justifyContent="space-between" alignItems="center">
        <Flexbox item>
          <Button
            onClick={onCancel}
            disabled={isLoading}
            size="l"
            variant="neutral"
            color={(t) => t.color.cta}
          >
            {cancelText}
          </Button>
        </Flexbox>
        <Flexbox container item alignItems="center" justifyContent="space-between">
          <Flexbox item>
            <Button
              onClick={onPrev}
              disabled={isLoading}
              size="l"
              variant="neutral"
              color={(t) => t.color.cta}
            >
              {previousText}
            </Button>
          </Flexbox>
          <Flexbox item>
            {isLastStep ? (
              <ForwardButton
                loading={isLoading}
                type="submit"
                variant="primary"
                size="l"
                onClick={onSubmit}
              >
                {submitText}
              </ForwardButton>
            ) : (
              <ForwardButton loading={isLoading} variant="primary" size="l" onClick={onForward}>
                {nextText}
              </ForwardButton>
            )}
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </nav>
  );
};

export default BottomNav;
