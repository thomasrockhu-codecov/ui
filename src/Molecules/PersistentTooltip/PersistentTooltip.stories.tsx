import React, { useState } from 'react';
import { Icon } from '../..';
import { PersistentTooltip } from './PersistentTooltip';

export default {
  title: 'Molecules / Persistent Tooltip',
};

export const DefaultStory = () => {
  const [open, setOpen] = useState(true);

  return (
    <PersistentTooltip open={open} onClose={() => setOpen(false)}>
      <Icon.Questionmark />
    </PersistentTooltip>
  );
};
