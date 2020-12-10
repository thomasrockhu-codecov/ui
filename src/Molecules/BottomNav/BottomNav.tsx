import React from 'react';
import styled from 'styled-components';
import { Flexbox } from '../..';
import Button from '../Button';
import { Props } from './BottomNav.types';

const ForwardButton = styled(Button)`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
    min-width: ${(p) => p.theme.spacing.unit(40)}px;
  }
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
      <Flexbox
        container
        gutter={4}
        sm={{ gutter: 8 }}
        justifyContent="space-between"
        alignItems="center"
      >
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
        <Flexbox
          gutter={4}
          sm={{ gutter: 8 }}
          container
          item
          alignItems="center"
          justifyContent="space-between"
        >
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
