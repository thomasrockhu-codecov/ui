import R from 'ramda';
import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { LinkComponent, LinkProps } from './Link.types';
import { Theme } from '../../theme/theme.types';
import { isUndefined } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';

const getSharedStyle = (props: ThemedStyledProps<LinkProps, Theme>) => {
  const { theme, disabled, display = 'inline' } = props;

  // Need to switch to display: inline-block
  // But it will break pages, so need to do it through mutations
  return `
    display: ${display};
    padding: 0;
    color: ${disabled ? theme.color.disabledText : theme.color.cta}

    &:hover {
      text-decoration: underline;
    }
  `;
};

const CleanLink = (props: LinkProps) => {
  return props.external ? (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a {...R.omit(['fullWidth', 'colorFn', 'color', 'display'], props) as any} />
  ) : (
    <RouterLink {...R.omit(['fullWidth', 'colorFn', 'color', 'display'], props) as any} />
  );
};

const StyledLink = styled(CleanLink)<LinkProps>`
  ${p => getSharedStyle(p)}
  text-decoration: none;
`;

const StyledButton = styled(NormalizedElements.Button)<LinkProps>`
  ${p => getSharedStyle(p)}

  /* resetting button styles */
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable input types in iOS */
  -webkit-appearance: none !important;
  /* resetting button styles end */

  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};

  font-weight: inherit; /* remove when and if typography is handled inside the component */
`;

export const Link: LinkComponent = React.forwardRef((props, ref) => {
  const { to, children, disabled, className, onClick, target, rel, external, as } = props;
  const destinationProp = external ? { href: to } : { to };

  if (isUndefined(to) || disabled) {
    return (
      <StyledButton ref={ref} className={className} onClick={onClick} disabled={disabled} as={as}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledLink
      ref={ref}
      className={className}
      onClick={onClick}
      {...destinationProp}
      target={target}
      rel={rel}
      external={external}
      as={as}
    >
      {children}
    </StyledLink>
  );
});
