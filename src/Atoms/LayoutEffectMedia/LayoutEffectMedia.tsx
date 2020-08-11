import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import R from 'ramda';

import { Props } from './LayoutEffectMedia.types';
import { Theme } from '../../theme/theme.types';

const negateMedia = R.pipe(
  R.split(' '),
  R.insert(1, 'not all and'),
  R.join(' '),
);

const StyledDiv = styled.div<{ query: Props['query'] }>`
  ${p => negateMedia(typeof p.query === 'string' ? p.query : p.query(p.theme))} {
    display: none;
  }
`;

const useLayoutEffectMedia = (query: string | ((t: Theme) => string)) => {
  const theme = React.useContext(ThemeContext);
  const [matches, setMatches] = React.useState<boolean | null>(null);
  const mediaQuery = (typeof query === 'string' ? query : query(theme)).replace('@media ', '');

  // Effect won't run during SSR
  React.useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const media = window.matchMedia(mediaQuery);

    // Set matches first time
    setMatches(media.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Then update matches
    // if screen hits new breakpoint
    media.addListener(handler);

    // And of course unsubscribe onunmount
    return () => media.removeListener(handler);
  }, [mediaQuery]);

  return matches;
};

const LayoutEffectMedia: React.FunctionComponent<Props> = props => {
  const As = props.as || 'div';
  const matches = useLayoutEffectMedia(props.query);
  // If matches === null it means we are in SSR
  // Show css fallback then
  if (matches === null) return <StyledDiv {...props} />;
  return matches ? <As>{props.children}</As> : null;
};

export { LayoutEffectMedia, useLayoutEffectMedia };
