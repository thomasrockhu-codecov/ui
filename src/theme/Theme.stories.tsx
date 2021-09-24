import React from 'react';
import styled from 'styled-components';
import MD from 'react-markdown';
import { propOr } from 'ramda';
import { createTheme, Flexbox, Table, Tbody, Td, Th, Thead, theme, Tr } from '..';
import defaultColors from './defaultColors';
import accessabilityColors from './accessabilityColors';
import colorDocs from './Colors.md';

const Color = styled.div<{ $color: string }>`
  width: ${(p) => p.theme.spacing.unit(14)}px;
  height: ${(p) => p.theme.spacing.unit(14)}px;
  background-color: ${(p) => p.$color};
  border: 1px solid #eee;
`;

const ColorInArray = styled.div<{ $color: string }>`
  width: ${(p) => p.theme.spacing.unit(4)}px;
  height: ${(p) => p.theme.spacing.unit(4)}px;
  padding: 0;
  background-color: ${(p) => p.$color};
  border: 1px solid #eee;
`;

const colorWithValue = (color: string | string[]) =>
  typeof color === 'string' ? (
    <>
      <Color $color={color} />
      <>{color}</>
    </>
  ) : (
    color?.map((c: string) => (
      <Flexbox container gutter={1}>
        <ColorInArray $color={c} />
        <>{c}</>
      </Flexbox>
    ))
  );

export default {
  title: 'Others / Theme',
};

export const documentation = () => <MD>{colorDocs}</MD>;

export const colorsSemantic = () => {
  const a11yTheme = createTheme({ a11yColors: true });
  const darkTheme = createTheme({ darkColors: true });
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Default</Th>
          <Th>A11y</Th>
          <Th>Dark</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.keys(theme.color)?.map((title) => (
          <Tr key={`theme-${title}`}>
            <Td>{title}</Td>
            <Td>{colorWithValue(theme.color[title])}</Td>
            <Td>{colorWithValue(a11yTheme.color[title])}</Td>
            <Td>{colorWithValue(darkTheme.color[title])}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

colorsSemantic.story = {
  name: 'Colors (semantic)',
};

export const colorsPalette = () => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <h1>⚠️ Internal object, use colors (semantic)</h1>(
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Default</Th>
            <Th>A11y</Th>
            <Th>Dark</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(defaultColors)
            ?.filter((title) => title !== 'palettes')
            ?.map((title) => (
              <Tr key={`theme-${title}`}>
                <Td>{title}</Td>
                <Td>{colorWithValue(defaultColors[title])}</Td>
                <Td>{colorWithValue(accessabilityColors[title])}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
      );
    </>
  );
};

colorsPalette.story = {
  name: 'Colors (palette)',
};

export const screenSizes = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Size</Th>
        <Th>Offset</Th>
      </Tr>
    </Thead>
    <Tbody>
      {Object.entries(theme.breakpoints)?.map(([title, breakpoint]) => (
        <Tr key={`breakpoints-${title}`}>
          <Td>{title}</Td>
          <Td>
            <pre>{propOr('', 'size', breakpoint)}</pre>
          </Td>
          <Td>
            <pre>{propOr(0, 'offset', breakpoint)} units</pre>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

screenSizes.story = {
  name: 'Screen sizes',
};
