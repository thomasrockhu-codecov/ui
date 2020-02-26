import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Cogwheel = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <g fillRule="evenodd">
        <path d="M6.27027028 2.69194524V0h3.45945944v2.69194524c.38637838.12953418.75372978.30115061 1.09708108.50958901l1.9701622-1.99736989 2.4462702 2.47978088-2.1483243 2.17775338c.0516756.12602742.0988108.25446574.1414054.38487673H16v3.5068493h-2.7636757c-.0685406.20975346-.1487567.41424655-.2402162.61216435l2.0309189 2.0587398-2.4462702 2.4797808-1.9597838-1.9866302c-.283027.1553973-.5811893.286685-.89124328.3905754V16H6.27027028v-2.6919452c-.28475675-.0955616-.55935137-.2139178-.82162162-.3528767l-1.92259459 1.9489315-2.44627029-2.4797808 1.95870272-1.9855343c-.10594596-.2207123-.19783787-.44953421-.27481084-.68536985H0v-3.5068493h2.76367566c.05124327-.15671237.10897302-.31057535.17318918-.4609315L.86356757 3.68394524l2.44627028-2.47978088 1.93059461 1.95726029c.32389185-.19046574.66854054-.34827396 1.02983782-.46947941zm1.72972968 2.51353418c1.52151355 0 2.75675684 1.25216443 2.75675684 2.79452058 0 1.54235615-1.23524329 2.7945206-2.75675684 2.7945206-1.52151347 0-2.75675674-1.25216445-2.75675674-2.7945206 0-1.54235615 1.23524327-2.79452058 2.75675674-2.79452058z" />
      </g>
    </IconBase>
  );
};

Cogwheel.displayName = 'Icon.Cogwheel';
