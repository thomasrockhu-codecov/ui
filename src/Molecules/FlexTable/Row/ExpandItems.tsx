import React from 'react';
import { Media, Flexbox, Typography, LabeledValue, List, ListItem } from '../../..';
import { ExpandItemsComponent, ExpandItem } from './Row.types';

const MobileItem: React.FC<{ item: ExpandItem }> = ({ item }) => (
  <Flexbox container justifyContent="space-between" as={ListItem}>
    <Flexbox item>
      <Typography type="tertiary" color={t => t.color.label}>
        {item.label}
      </Typography>
    </Flexbox>
    <Flexbox item>
      <Typography type="tertiary">{item.value}</Typography>
    </Flexbox>
  </Flexbox>
);
const DesktopItem: React.FC<{ item: ExpandItem }> = ({ item }) => (
  <Flexbox item as={ListItem}>
    <LabeledValue
      label={
        <Typography type="secondary" color={t => t.color.label}>
          {item.label}
        </Typography>
      }
    >
      <Typography>{item.value}</Typography>
    </LabeledValue>
  </Flexbox>
);
export const ExpandItems: ExpandItemsComponent = ({ items }) => {
  return (
    <>
      <Media query={t => t.media.lessThan(t.breakpoints.md)}>
        <List>
          {items.map(item => (
            <MobileItem item={item} />
          ))}
        </List>
      </Media>
      <Media query={t => t.media.greaterThan(t.breakpoints.md)}>
        <Flexbox container wrap="wrap" gutter={10} as={List}>
          {items.map(item => (
            <DesktopItem item={item} />
          ))}
        </Flexbox>
      </Media>
    </>
  );
};
