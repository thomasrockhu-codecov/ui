import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { ButtonProps, InnerProps, BaseButtonComponent } from './Button.types';
import { assert } from '../../../../common/utils';
import NormalizedElements from '../../../../common/NormalizedElements';
import TrackingContext from '../../../../common/tracking';
import ButtonContent from '../ButtonContent';
import { neutralStyles, primaryStyles, secondaryStyles } from './Button.styles';
import { useLink } from '../../../../common/Links';
import { LinkProps as RawLinkProps } from '../../../../common/Links/types';

const isPrimary = (variant: ButtonProps['variant']) => variant === 'primary';
const isSecondary = (variant: ButtonProps['variant']) => variant === 'secondary';
const isNeutral = (variant: ButtonProps['variant']) => variant === 'neutral';

const StyledButton = styled(NormalizedElements.Button)<InnerProps>`
  ${(p) => {
    if (isSecondary(p.$variant)) {
      return secondaryStyles;
    }

    if (isNeutral(p.$variant)) {
      return neutralStyles;
    }

    return primaryStyles;
  }}
  border: none;
  border-radius: 0;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
`;

const CleanLink: FC<RawLinkProps> = (props) => {
  const RawLink = useLink();
  return <RawLink {...props} />;
};

const StyledLink = styled(CleanLink)<InnerProps>`
  ${(p) => {
    if (isSecondary(p.$variant)) {
      return secondaryStyles;
    }

    if (isNeutral(p.$variant)) {
      return neutralStyles;
    }

    return primaryStyles;
  }}
  text-decoration: none;

  &:hover {
    text-decoration: ${(p) => (isNeutral(p.$variant) ? `underline` : `none`)};
  }
`;

export const Button: BaseButtonComponent = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    className,
    disabled,
    onClick,
    size = 'm',
    type = 'button',
    variant = 'primary',
    fullWidth,
    to,
    rel,
    target,
    children,
    id,
    color,
    as,
    loading,
    external,
    cms,
    fullServerRedirect,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    delayLoadingSpinnerAnimation = true,
    icon,
    iconPlacement = 'left',
    ...rest
  } = props;
  const externalIsNotPresent = typeof external === 'undefined';
  const toAndDisabledAreNotPresentTogether = !(to && disabled);
  const trackContext = useContext(TrackingContext);
  const trackClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (trackContext) trackContext.track('button', e, props);
    if (onClick) onClick(e);
  };
  const theme = useContext(ThemeContext);

  const colorFromTheme = color && color(theme);

  const sharedProps = {
    ...rest,
    className,
    onClick: trackClick,
    $size: size,
    $variant: variant,
    $fullWidth: fullWidth,
    $colorFn: color,
    id,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
  };

  if (colorFromTheme && (isPrimary(variant) || isSecondary(variant))) {
    assert(
      colorFromTheme === theme.color.cta ||
        colorFromTheme === theme.color.negative ||
        colorFromTheme === theme.color.sell,
      'Button: color is incorrect, use only `t => t.color.cta` or `t => t.color.negative` for primary and secondary variant.',
    );
  }

  if (cms) {
    assert(false, 'Button: the prop cms is deprecated, please use fullServerRedirect instead.', {
      level: 'warn',
    });
  }

  assert(
    toAndDisabledAreNotPresentTogether,
    "You're using `to` prop together with `disabled` prop. `Disabled` prop won't be propagated to the dom node, because <a> element can't be disabled",
    { level: 'warn' },
  );

  if (to && !disabled) {
    return (
      <StyledLink
        {...sharedProps}
        rel={rel}
        innerRef={ref as React.Ref<HTMLAnchorElement>}
        external={external}
        cms={cms}
        fullServerRedirect={fullServerRedirect}
        to={to}
        as={as}
        target={target}
      >
        <ButtonContent
          loading={loading}
          variant={variant}
          size={size}
          colorFn={color}
          delayLoadingSpinnerAnimation={delayLoadingSpinnerAnimation}
          icon={icon}
          iconPlacement={iconPlacement}
        >
          {children}
        </ButtonContent>
      </StyledLink>
    );
  }
  assert(
    externalIsNotPresent,
    'You have `external` prop on what appears to be Button component. This prop will be omitted. ',
    { level: 'warn' },
  );
  return (
    <StyledButton
      {...sharedProps}
      disabled={disabled}
      type={type}
      as={as}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      <ButtonContent
        loading={loading}
        variant={variant}
        size={size}
        colorFn={color}
        delayLoadingSpinnerAnimation={delayLoadingSpinnerAnimation}
        icon={icon}
        iconPlacement={iconPlacement}
      >
        {children}
      </ButtonContent>
    </StyledButton>
  );
});

Button.displayName = 'Button';
