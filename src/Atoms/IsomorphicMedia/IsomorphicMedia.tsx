import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import R from 'ramda';
import useSSR from 'use-ssr';

import { Props } from './IsomorphicMedia.types';
import { Theme } from '../../theme/theme.types';

const negateMedia = R.pipe(R.split(' '), R.insert(1, 'not all and'), R.join(' '));

const StyledDiv = styled.div<{ query: Props['query'] }>`
  ${(p) => negateMedia(typeof p.query === 'string' ? p.query : p.query(p.theme))} {
    display: none;
  }
`;

const useIsomorphicMedia = (query: string | ((t: Theme) => string)) => {
  const theme = React.useContext(ThemeContext);
  const [matches, setMatches] = React.useState<boolean | null>(null);
  const mediaQuery = (typeof query === 'string' ? query : query(theme)).replace('@media ', '');

  const { isServer } = useSSR();
  const useIsomorphicLayoutEffect = !isServer ? React.useLayoutEffect : React.useEffect;

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

const IsomorphicMedia: React.FunctionComponent<Props> = (props) => {
  const { isServer } = useSSR();
  const As = props.as || 'div';
  const matches = useIsomorphicMedia(props.query);
  const componentProps = R.omit(['query', 'as'], props);
  // matches === null implies SSR or first client render, also need isServer to verify SSR.
  // Show css fallback in SSR
  if (isServer && matches === null) return <StyledDiv {...props} />;
  return matches ? <As {...componentProps}>{props.children}</As> : null;
};

export { IsomorphicMedia, useIsomorphicMedia };
