import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const BellInactive = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path d="M3.5 16a3.5 3.5 0 01-.192-6.995L3.5 9h-.016V6.421c0-1.995 1.552-3.68 3.684-4.231a1.5 1.5 0 112.7-.073c2.222.442 3.896 2.101 4 4.107l.004.197V9.58c.021 1.456.469 2.883 1.3 4.152l.185.269-8.694.001.01-.023A3.5 3.5 0 013.5 16zm7.275-1.484a2.226 2.226 0 01-4.194 0zM3.5 10.3a2.2 2.2 0 100 4.4 2.2 2.2 0 000-4.4zm.487.5v1.312H5.3v.876l-1.313-.001V14.3h-.875v-1.313H1.8v-.874l1.312-.001V10.8h.875zm4.691-7.3c-2.02 0-3.586 1.277-3.689 2.766l-.005.155V9.33A3.497 3.497 0 017 12.5h5.898l-.056-.16a9.119 9.119 0 01-.458-2.408l-.012-.353V6.42c0-1.555-1.605-2.921-3.694-2.921z" />
    </IconBase>
  );
};

BellInactive.displayName = 'OldIcon.BellInactive';
