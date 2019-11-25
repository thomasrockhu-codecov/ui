import React, { useContext } from 'react';
import R from 'ramda';
import styled, { ThemeContext } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { ButtonComponent, ButtonProps } from './Button.types';
import { assert } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';
import TrackingContext from '../../common/tracking';
import ButtonContent from './ButtonContent';
import { neutralStyles, primaryStyles, secondaryStyles } from './Button.styles';

const isPrimary = (variant: ButtonProps['variant']) => variant === 'primary';
const isSecondary = (variant: ButtonProps['variant']) => variant === 'secondary';
const isNeutral = (variant: ButtonProps['variant']) => variant === 'neutral';

const StyledButton = styled(NormalizedElements.Button)<ButtonProps>`
  ${p => {
    if (isSecondary(p.variant)) {
      return secondaryStyles;
    }

    if (isNeutral(p.variant)) {
      return neutralStyles;
    }

    return primaryStyles;
  }}
  border: none;
  border-radius: 0;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
`;

const CleanRouterLink = (props: ButtonProps) => (
  <RouterLink {...R.omit(['fullWidth', 'colorFn', 'color', 'variant'], props) as any} />
);

const StyledLink = styled(CleanRouterLink)<ButtonProps>`
  ${p => {
    if (isSecondary(p.variant)) {
      return secondaryStyles;
    }

    if (isNeutral(p.variant)) {
      return neutralStyles;
    }

    return primaryStyles;
  }}
  text-decoration: none;
`;

export const Button: ButtonComponent = props => {
  const {
    className,
    disabled,
    onClick,
    size = 'm',
    type = 'button',
    variant = 'primary',
    fullWidth,
    to,
    children,
    rel,
    id,
    color,
    as,
    loading,
    external,
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

  if (colorFromTheme && (isPrimary(variant) || isSecondary(variant))) {
    assert(
      colorFromTheme === theme.color.cta || colorFromTheme === theme.color.negative,
      'Button: color is incorrect, use only `t => t.color.cta` or `t => t.color.negative` for primary and secondary variant.',
    );
  }

  assert(
    size === 'm' || size === 'l',
    "Button: size 's' is deprecated, please use either 'm' or 'l'.",
    {
      level: 'warn',
    },
  );

  assert(
    toAndDisabledAreNotPresentTogether,
    "You're using `to` prop together with `disabled` prop. `Disabled` prop won't be propagated to the dom node, because <a> element can't be disabled",
    { level: 'warn' },
  );

  if (to && !disabled) {
    return (
      <StyledLink
        className={className}
        rel={rel}
        onClick={trackClick}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        colorFn={color}
        id={id}
        {...(external
          ? // TODO: unify these parts with link
            { as: 'a' as 'a', href: to, target: '_blank', rel: 'noopener noreferrer nofollow' }
          : {
              to,
              as,
            })}
      >
        <ButtonContent loading={loading} variant={variant} size={size} colorFn={color}>
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
      id={id}
      className={className}
      disabled={disabled}
      onClick={trackClick}
      size={size}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      colorFn={color}
      as={as}
    >
      <ButtonContent loading={loading} variant={variant} size={size} colorFn={color}>
        {children}
      </ButtonContent>
    </StyledButton>
  );
};
