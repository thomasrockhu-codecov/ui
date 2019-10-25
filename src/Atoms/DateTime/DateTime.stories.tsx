import React from 'react';
import DateTime from '.';

export default {
  title: 'Atoms | DateTime',
  parameters: {
    component: DateTime,
  },
};

export const dateTime = () => {
  return <DateTime value={1554824654} />;
};

dateTime.story = {
  name: 'DateTime',
};

export const withDateOnly = () => {
  return <DateTime onlyDate value={1554824654} />;
};

withDateOnly.story = {
  name: 'With date only',
};

export const withDateTimeAsIso8601String = () => {
  return <DateTime value="1999-11-11T11:11+0100" />;
};

withDateTimeAsIso8601String.story = {
  name: 'With date time as ISO 8601 string',
};

export const withDateAsIso8601String = () => {
  return <DateTime onlyDate value="1999-11-11" />;
};

withDateAsIso8601String.story = {
  name: 'With date as ISO 8601 string',
};

export const invalidValueStory = () => {
  return <DateTime value={null} />;
};

invalidValueStory.story = {
  name: 'Invalid value',
};

export const usesCustomSymbolForInvalidValue = () => {
  return <DateTime value={null} invalidValue="X" />;
};

usesCustomSymbolForInvalidValue.story = {
  name: 'Uses custom symbol for invalid value',
};
