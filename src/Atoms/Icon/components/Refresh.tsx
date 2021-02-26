import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Refresh = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path d="M7.923 3c2.719 0 4.923 2.204 4.923 4.906l.001.213.496.133 1.19.319-2.492 1.835-.055.057-.012-.012-.616.455-1.581-3.61 1.19.32.645.172-.002-.061a3.692 3.692 0 10-3.687 3.888v1.231a4.923 4.923 0 110-9.846z" />
    </IconBase>
  );
};

Refresh.displayName = 'Icon.Refresh';
