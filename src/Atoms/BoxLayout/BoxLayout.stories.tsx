import React from 'react';
import styled from 'styled-components';
import { Number, BoxLayout, Button, LinkBuy } from '../..';
import {
  generateCSS,
  LayoutProps,
  withLayout,
  withLayoutExplicit,
  withLayoutWithoutClassName,
} from '.';

export default {
  title: 'Atoms / BoxLayout',
  parameters: {
    component: BoxLayout,
  },
};

const StyledButton = styled(Button)<LayoutProps>`
  ${generateCSS}
`;

const NumberWithLayoutExplicit = withLayoutExplicit<
  React.ComponentProps<typeof Number>,
  typeof Number
>(Number);

// LinkBuy seems to get all typing correctly and infered, even it's own props
const LinkBuyWithLayoutWithoutClassName = withLayoutWithoutClassName(LinkBuy);
// Number doesn't accept className, as such no layout props works. Would be nice to get an error
const NumberWithLayoutWithoutClassName = withLayoutWithoutClassName(Number);

const LinkBuyWithLayout = withLayout(LinkBuy);
const NumberWithLayout = withLayout(Number);

export const boxUsingWithQweHoc = () => {
  return (
    <>
      <StyledButton mt={8} p={8} disabled>
        Button
      </StyledButton>

      <NumberWithLayoutExplicit value={12} currencySize="primary" />

      <LinkBuyWithLayoutWithoutClassName m={20} to="somewhere">
        Buy
      </LinkBuyWithLayoutWithoutClassName>
      <NumberWithLayoutWithoutClassName value={2} m={10} currencySize="primary" />

      <LinkBuyWithLayout m={10} to="somewhere">
        Buy
      </LinkBuyWithLayout>
      <NumberWithLayout value={2} m={20} currencySize="primary" />
    </>
  );
};

// boxUsingWithLayoutHoc.story = {
//   name: 'Margin and different margin Y-axis',
// };
