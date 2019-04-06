import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import { Currency } from '../..';

const inputs = (): [number, string] => {
  const value = number('value', 234234);
  const currency = select(
    'currency',
    {
      SEK: 'SEK',
      NOK: 'NOK',
      DKK: 'DKK',
      USD: 'USD',
    },
    'SEK',
  );
  return [value, currency];
};

storiesOf('Atoms | Currency', module)
  .addDecorator(withKnobs)
  .add('Primary default', () => {
    const [value, currency] = inputs();
    return <Currency.Primary value={value} currency={currency} />;
  })
  .add('Secondary default', () => {
    const [value, currency] = inputs();
    return <Currency.Secondary value={value} currency={currency} />;
  })
  .add('Tertiary default', () => {
    const [value, currency] = inputs();
    return <Currency.Tertiary value={value} currency={currency} />;
  })
  .add('Title1 default', () => {
    const [value, currency] = inputs();
    return <Currency.Title1 value={value} currency={currency} />;
  })
  .add('Title3 default', () => {
    const [value, currency] = inputs();
    return <Currency.Title3 value={value} currency={currency} />;
  });
