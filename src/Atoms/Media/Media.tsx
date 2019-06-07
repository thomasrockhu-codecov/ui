import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import R from 'ramda';

import { Props } from './Media.types';
import { Theme } from '../../theme/theme.types';

const negateMedia = R.pipe(
  R.split(' '),
  R.insert(1, 'not all and'),
  R.join(' '),
);
// prettier-ignore
const StyledDiv = styled.div<{query: Props['query']}>`
    ${p => negateMedia(typeof p.query === 'string' ? p.query : p.query(p.theme))} {
        display: none;
    }
`
const noop = () => {};
const useMedia = (query: string | ((t: Theme) => string)) => {
  const theme = React.useContext(ThemeContext);
  const mediaQuery = (typeof query === 'string' ? query : query(theme)).replace('@media ', '');

  const mediaHit =
    typeof window === 'undefined' || !window || !window.matchMedia
      ? { matches: null, addListener: noop, removeListener: noop }
      : window.matchMedia(mediaQuery);

  const [matches, setMatches] = React.useState(mediaHit.matches);

  React.useEffect(() => {
    const listener = (x: MediaQueryListEvent) => setMatches(x.matches);
    mediaHit.addListener(listener);
    return () => mediaHit.removeListener(listener);
  }, [mediaHit]);

  return matches;
};

const Media: React.FunctionComponent<Props> = props => {
  const matches = useMedia(props.query);
  // If matches === null it means we are in SSR
  // Show css fallback then
  if (matches === null) return <StyledDiv {...props} />;
  return matches ? <StyledDiv {...props} /> : null;
};

export { Media, useMedia };
