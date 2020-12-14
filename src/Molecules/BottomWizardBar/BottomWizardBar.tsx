import React from 'react';
import styled from 'styled-components';
import { Flexbox, useMedia, Box } from '../..';
import Button from '../Button';
import { Props } from './BottomWizardBar.types';

const ForwardButton = styled(Button)`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
    min-width: ${(p) => p.theme.spacing.unit(40)}px;
  }
`;

const StyledNav = styled.nav`
  background-color: ${(p) => p.theme.color.card};
`;

const BottomWizardBar: React.FC<Props> = ({
  isLastStep = false,
  onCancel,
  onNext,
  onPrevious,
  onSubmit,
  isEmbedded = false,
  isLoading = false,
  titleText,
  cancelText,
  previousText,
  nextText,
  submitText,
  hidePreviousButton = false,
  cancelButtonLink = '',
  previousButtonLink = '',
  submitButtonLink = '',
  nextButtonLink = '',
}) => {
  const isMobile = useMedia((t) => t.media.lessThan(t.breakpoints.sm));

  return (
    <StyledNav aria-label={titleText}>
      <Box py={isEmbedded ? 3 : 2} px={isEmbedded ? 4 : 3} sm={{ py: 2, px: 0 }}>
        <Flexbox
          container
          gutter={4}
          sm={{ gutter: 8 }}
          justifyContent="space-between"
          alignItems="center"
        >
          {!isEmbedded && (
            <Flexbox item>
              <Button
                onClick={onCancel}
                disabled={isLoading}
                size="l"
                variant="neutral"
                color={(t) => t.color.cta}
                type="reset"
                {...(cancelButtonLink && { to: cancelButtonLink })}
              >
                {cancelText}
              </Button>
            </Flexbox>
          )}
          <Flexbox
            gutter={4}
            sm={{ gutter: 8 }}
            container
            item
            {...(isEmbedded && { flex: '1' })}
            alignItems="center"
            justifyContent="space-between"
          >
            {(!isMobile || isEmbedded) && !hidePreviousButton && (
              <Flexbox item {...(isEmbedded && { flex: '1' })}>
                <Button
                  onClick={onPrevious}
                  disabled={isLoading}
                  size="l"
                  variant="neutral"
                  fullWidth={isEmbedded}
                  color={(t) => t.color.cta}
                  {...(previousButtonLink && { to: previousButtonLink })}
                >
                  {previousText}
                </Button>
              </Flexbox>
            )}
            <Flexbox item {...(isEmbedded && { flex: '1' })}>
              {isLastStep ? (
                <ForwardButton
                  loading={isLoading}
                  type="submit"
                  variant="primary"
                  size="l"
                  fullWidth={isEmbedded}
                  onClick={(e) => {
                    if (onSubmit && !isLoading) onSubmit(e);
                  }}
                  {...(submitButtonLink && { to: submitButtonLink })}
                >
                  {submitText}
                </ForwardButton>
              ) : (
                <ForwardButton
                  loading={isLoading}
                  variant="primary"
                  size="l"
                  onClick={(e) => {
                    if (onNext && !isLoading) onNext(e);
                  }}
                  fullWidth={isEmbedded}
                  {...(nextButtonLink && { to: nextButtonLink })}
                >
                  {nextText}
                </ForwardButton>
              )}
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Box>
    </StyledNav>
  );
};

export default BottomWizardBar;
