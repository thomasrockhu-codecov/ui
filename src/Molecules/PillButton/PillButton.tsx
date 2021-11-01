import React, { useContext } from 'react';
import styled from 'styled-components';

import TrackingContext from '../../common/tracking';
import { Button } from '../Button/Button';
import { PillButtonProps } from './PillButton.types';

const isSecondary = (variant: PillButtonProps['variant']) => variant === 'secondary';

const StyledPillButton = styled(Button)<PillButtonProps>`
  border-radius: ${(p) => p.theme.spacing.unit(3)}px;
  ${(p) => isSecondary(p.variant) && `background-color: ${p.theme.color.background}`};
  &::before {
    display: none;
  }
`;

export const PillButton: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PillButtonProps> &
    React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>
> = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, PillButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    iconPlacement = 'left',
    delayLoadingSpinnerAnimation = true,
    children,
    onClick,
    ...rest
  } = props;
  const trackContext = useContext(TrackingContext);
  const trackClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (trackContext) trackContext.track('pillbutton', e, props);
    if (onClick) onClick(e);
  };

  return (
    <StyledPillButton
      {...rest}
      ref={ref as React.Ref<HTMLButtonElement>}
      size="s"
      type="button"
      innerRef={ref as React.Ref<HTMLAnchorElement>}
      onClick={trackClick}
      iconPlacement={iconPlacement}
      variant={variant}
      delayLoadingSpinnerAnimation={delayLoadingSpinnerAnimation}
    >
      {children}
    </StyledPillButton>
  );
});
PillButton.displayName = 'PillButton';
