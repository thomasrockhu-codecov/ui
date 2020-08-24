import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import R from 'ramda';

import { Props } from './IsomorphicMedia.types';
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

const isServerSide = typeof window === 'undefined';

const useIsomorphicLayoutEffect = !isServerSide ? React.useLayoutEffect : React.useEffect;

const useIsomorphicMedia = (query: string | ((t: Theme) => string)) => {
  const theme = React.useContext(ThemeContext);
  const [matches, setMatches] = React.useState<boolean | null>(null);
  const mediaQuery = (typeof query === 'string' ? query : query(theme)).replace('@media ', '');

  // Effect won't run during SSR
  useIsomorphicLayoutEffect(() => {
    if (typeof window.matchMedia !== 'function') {
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

const IsomorphicMedia: React.FunctionComponent<Props> = props => {
  const As = props.as || 'div';
  const matches = useIsomorphicMedia(props.query);
  // matches === null implies SSR or first client render, also need isServerSide to verify SSR.
  // Show css fallback in SSR
  if (isServerSide && matches === null) return <StyledDiv {...props} />;
  return matches ? <As>{props.children}</As> : null;
};

export { IsomorphicMedia, useIsomorphicMedia };
