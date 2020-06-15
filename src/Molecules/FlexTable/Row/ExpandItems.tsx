import React from 'react';
import { Media, Flexbox, Typography, LabeledValue } from '../../..';
import { ExpandItemsComponent } from './Row.types';

export const ExpandItems: ExpandItemsComponent = ({ items }) => {
  return (
    <>
      <Media query={t => t.media.lessThan(t.breakpoints.md)}>
        {items.map(item => (
          <Flexbox container justifyContent="space-between">
            <Flexbox item>
              <Typography>{item.label}</Typography>
            </Flexbox>
            <Flexbox item>
              <Typography>{item.value}</Typography>
            </Flexbox>
          </Flexbox>
        ))}
      </Media>
      <Media query={t => t.media.greaterThan(t.breakpoints.md)}>
        <Flexbox container wrap="wrap" gutter={10}>
          {items.map(item => (
            <Flexbox item>
              <LabeledValue label={item.label}>{item.value}</LabeledValue>
            </Flexbox>
          ))}
        </Flexbox>
      </Media>
    </>
  );
};
