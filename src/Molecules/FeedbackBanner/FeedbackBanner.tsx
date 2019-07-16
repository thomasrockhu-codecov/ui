import React from 'react';
import styled from 'styled-components';

import { FeedbackBannerComponent, FeedbackBannerProps } from './FeedbackBanner.types';
import { Icon, Typography, Flexbox } from '../..';
import { Theme } from '../../theme/theme.types';

const getBackgroundColor = ({
  backgroundColor,
  theme,
}: {
  backgroundColor?: FeedbackBannerProps['backgroundColor'];
  theme: Theme;
}) => {
  if (backgroundColor === 'white') {
    return theme.color.card;
  }
  return theme.color.background;
};

const getBorderColor = ({
  variant,
  theme,
}: {
  variant?: FeedbackBannerProps['variant'];
  theme: Theme;
}) => {
  switch (variant) {
    case 'error':
      return theme.color.negative;
    case 'warning':
      return theme.color.warning;
    case 'success':
      return theme.color.positive;
    case 'info':
    default:
      return theme.color.cta;
  }
};

const getIcon = (variant: FeedbackBannerProps['variant']) => {
  switch (variant) {
    case 'error':
      return <Icon.CrossCircle size={5} fill={t => t.color.negative} />;
    case 'warning':
      return <Icon.WarningTriangle size={5} fill={t => t.color.warning} />;
    case 'success':
      return <Icon.CheckMarkCircle size={5} fill={t => t.color.positive} />;
    case 'info':
    default:
      return <Icon.InfoCircle size={5} fill={t => t.color.cta} />;
  }
};

const StyledContainer = styled.div<FeedbackBannerProps>`
  width: 100%;
  background: ${getBackgroundColor};
  border-left: ${p => p.theme.spacing.unit(1)}px solid ${getBorderColor};
  box-sizing: border-box;
`;

const StyledIcon = styled.div`
  margin-left: ${p => p.theme.spacing.unit(3)}px;
`;

const StyledContent = styled.div`
  width: 100%;
  margin: ${p => p.theme.spacing.unit(1)}px ${p => p.theme.spacing.unit(3)}px;
  text-align: left;
  & a {
    color: ${p => p.theme.color.cta};
    font-weight: bold;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
`;

export const FeedbackBanner: FeedbackBannerComponent = props => {
  const { variant, backgroundColor, title, children, className } = props;
  return (
    <StyledContainer className={className} variant={variant} backgroundColor={backgroundColor}>
      <Flexbox container direction="row" alignItems="center">
        <StyledIcon>{getIcon(variant)}</StyledIcon>
        <StyledContent>
          <Flexbox container item direction="column">
            {title && (
              <Typography type="secondary" weight="bold">
                {title}
              </Typography>
            )}
            <Typography type="secondary">{children}</Typography>
          </Flexbox>
        </StyledContent>
      </Flexbox>
    </StyledContainer>
  );
};
