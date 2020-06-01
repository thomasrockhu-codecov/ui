import React from 'react';

type HtmlProps = {} & React.AllHTMLAttributes<HTMLDivElement & HTMLTableHeaderCellElement>;

export type Props = {} & HtmlProps;

export type HeaderComponent = React.FC<Props>;
