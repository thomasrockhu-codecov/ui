import React from 'react';
import styled from 'styled-components';

import { FeedbackBannerComponent, FeedbackBannerProps } from './FeedbackBanner.types';
import { Icon, Typography } from '../..';
import { Theme } from '../../theme/theme.types';

const getColor = ({
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
  min-height: 64px;
  background: ${p => p.theme.color.card};
  border-left: 4px solid ${getColor};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.div`
  margin-left: 16px;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 12px;
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
  const { variant, title, children, className } = props;
  return (
    <StyledContainer className={className} variant={variant}>
      <StyledIcon>{getIcon(variant)}</StyledIcon>
      <StyledContent>
        {title && (
          <Typography type="secondary" weight="bold">
            {title}
          </Typography>
        )}
        <Typography type="secondary">{children}</Typography>
      </StyledContent>
    </StyledContainer>
  );
};
