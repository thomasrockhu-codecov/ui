import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Clicks = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path d="M4.37272727 4.56363636l9.16363633 3.05454546-3.4737272 1.73545454 4.4327952 4.43275024-.8999541.8999541-4.43184114-4.4327043-1.73636363 3.4736363-3.05454546-9.16363634zM6.385 6.576l1.278 3.833.85200146-1.70308945L10.218 7.854 6.385 6.576zM15.6363636.36363636v9.92727274h-2.9696969V9.01818182L14.363 9.018V1.636H1.636v7.382l3.564.00018182v1.27272728H.36363636V.36363636H15.6363636z" />
    </IconBase>
  );
};

Clicks.displayName = 'OldIcon.Clicks';
