import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import MD from 'react-markdown';
import theme from '.';
import colorDocs from './Colors.md';
import { Display } from '../common/Display';

const Color = styled.div`
  width: ${p => p.theme.spacing.unit(14)}px;
  height: ${p => p.theme.spacing.unit(14)}px;
  background-color: ${p => p.color};
  border: 1px solid #eee;
`;
storiesOf('Theme', module)
  .add('Documentation', () => <MD source={colorDocs} />)
  .add('Colors (semantic)', () => (
    <Display
      items={Object.entries(theme.color).map(([title, color]) => ({
        title,
        component: (
          <>
            <Color color={color} />
            <div>{color}</div>
          </>
        ),
      }))}
    />
  ))
  .add('Colors (palette)', () => {
    const rawColor = {
      // BRAND
      brandBlue: '#00C8F5',
      brandGreen: '#D2F500',
      brandPink: '#FF2B83',
      brandTurquoise: '#00F0E1',

      // COMPLEMENTARY BRAND COLOURS
      complementaryBlue1: '#385E9D',
      complementaryBlue2: '#131F4F',
      complementaryGreen1: '#3A913F',
      complementaryGreen2: '#023C00',
      complementaryPink1: '#AC135A',
      complementaryPink2: '#78013A',
      complementaryTurquoise1: '#009195',
      complementaryTurquoise2: '#01424C',

      // GRAYSCALE PALETTE
      black: '#000000',
      gray0: '#282823',
      gray1: '#4B4B46',
      gray2: '#6E6E69',
      gray3: '#A0A09B',
      gray4: '#BCBCB6',
      gray5: '#D7D7D2',
      gray6: '#EBEBE8',
      gray7: '#F5F5F5',
      white: '#FFFFFF',

      // FUNCTIONAL COLOURS FOR PRODUCT DEVELOPMENT
      cta: '#0046FF',
      positive: '#00D200',
      negative: '#FF1900',
      index: '#FFCF00',
    };

    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <h1>⚠️ Internal object, use colors (semantic)</h1>
        <Display
          items={Object.entries(rawColor).map(([title, color]) => ({
            title,
            component: (
              <>
                <Color color={color} />
                <div>{color}</div>
              </>
            ),
          }))}
        />
      </>
    );
  })
  .add('Screen sizes', () => (
    <Display
      items={Object.entries(theme.size).map(([title, size]) => ({
        title,
        component: <pre>{size}</pre>,
      }))}
    />
  ));
