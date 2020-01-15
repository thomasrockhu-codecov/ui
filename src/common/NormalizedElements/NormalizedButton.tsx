import React from 'react';
import styled from 'styled-components';
import R from 'ramda';

const CleanButton = React.forwardRef((props: any, ref: React.Ref<HTMLButtonElement>) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type="button"
    ref={ref}
    {...R.omit(['color', 'fullWidth', 'size', 'colorFn', 'display', 'variant'], props)}
  />
));

/** From Normalize.css v8.0.1 */
export const Button = styled(CleanButton)`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;

  &,
  &[type='button'],
  &[type='reset'],
  &[type='submit'] {
    -webkit-appearance: button; /* stylelint-disable-line */
  }

  &::-moz-focus-inner,
  &[type='button']::-moz-focus-inner,
  &[type='reset']::-moz-focus-inner,
  &[type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  &:-moz-focusring,
  &[type='button']:-moz-focusring,
  &[type='reset']:-moz-focusring,
  &[type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
`;
