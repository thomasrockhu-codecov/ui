import React, { useContext } from 'react';
import styled from 'styled-components';
import ButtonContent from '../Button/ButtonContent';
import NormalizedElements from '../../common/NormalizedElements';
import TrackingContext from '../../common/tracking';
import { PillButtonProps, InnerProps } from './PillButton.types';
import { primaryStyles, secondaryStyles } from './PillButton.styles';

const isSecondary = (variant: PillButtonProps['variant']) => variant === 'secondary';

const StyledPillButton = styled(NormalizedElements.Button)<InnerProps>`
  ${(p) => {
    if (isSecondary(p.$variant)) {
      return secondaryStyles;
    }

    return primaryStyles;
  }}
`;

export const PillButton: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PillButtonProps> & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, PillButtonProps>((props, ref) => {
  const {
    className,
    disabled,
    onClick,
    variant = 'primary',
    fullWidth,
    children,
    icon,
    iconPlacement = 'left',
    id,
    loading,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    delayLoadingSpinnerAnimation = true,
    ...rest
  } = props;
  const trackContext = useContext(TrackingContext);
  const trackClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (trackContext) trackContext.track('pillbutton', e, props);
    if (onClick) onClick(e);
  };

  const sharedProps = {
    ...rest,
    className,
    onClick: trackClick,
    $variant: variant,
    $fullWidth: fullWidth,
    $loading: loading,
    id,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
  };

  return (
    <StyledPillButton
      {...sharedProps}
      disabled={disabled}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      <ButtonContent
        delayLoadingSpinnerAnimation={delayLoadingSpinnerAnimation}
        icon={icon}
        iconPlacement={iconPlacement}
        loading={loading}
        size="s"
        variant={variant}
      >
        {children}
      </ButtonContent>
    </StyledPillButton>
  );
});
PillButton.displayName = 'PillButton';
