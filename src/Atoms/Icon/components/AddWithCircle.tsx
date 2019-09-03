import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const AddWithCircle = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path d="M8,16 C12.418278,16 16,12.418278 16,8 C16,3.581722 12.418278,0 8,0 C3.581722,0 0,3.581722 0,8 C0,12.418278 3.581722,16 8,16 Z M8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 Z" />
      <path d="M9,4 L9,7 L12,7 L12,9 L9,9 L9,12 L7,12 L7,8.999 L4,9 L4,7 L7,6.999 L7,4 L9,4 Z" />
    </IconBase>
  );
};

AddWithCircle.displayName = 'Icon.AddWithCircle';
