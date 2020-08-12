/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Element } from './IsomorphicMedia.test';

export const HTML_FROM_SSR =
  '<div class="IsomorphicMedia__StyledDiv-qvvp3f-0 fjZVrq">gt sm</div><div class="IsomorphicMedia__StyledDiv-qvvp3f-0 difbEy">lt sm</div>';

test('Server-side rendering', async () => {
  const html = renderToString(<Element />);

  expect(html).toBe(HTML_FROM_SSR);
});
