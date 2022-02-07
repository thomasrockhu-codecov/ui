import React from 'react';
import { Property } from 'csstype';
import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
export type HtmlProps = {} & Omit<React.HTMLProps<HTMLSpanElement>, 'color' | 'children'>;
type ColorFn = (t: Theme) => Values<Theme['color']>;

export type Types =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'caption'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'hero';

// TODO: for a better day
// type PrimaryProps = {
//   /** @default 'regular' */
//   type?: 'primary';
//   weight?: 'regular' | 'bold' | 'extrabold';
// };
// type SecondaryProps = {
//   /** @default 'regular' */
//   type: 'secondary';
//   weight?: 'regular' | 'bold';
// };
// type TertiaryProps = {
//   /** @default 'regular' */
//   type: 'tertiary';
//   weight?: 'regular' | 'bold';
// };
// type CaptionProps = {
//   /** @default 'regular' */
//   type: 'caption';
//   weight?: 'regular' | 'bold';
// };
// type TitleProps = {
//   /** @default 'extrabold' */
//   type: 'title1' | 'title2' | 'title3';
//   weight?: 'regular' | 'bold' | 'extrabold';
// };
// type HeroProps = {
//   /** @default 'extrabold' */
//   type: 'hero';
//   weight?: 'bold' | 'extrabold';
// };

type WhiteSpace =
  | 'normal'
  | 'nowrap'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | 'break-spaces'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset';

export type Props = HtmlProps & {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  color?: 'inherit' | ColorFn;
  id?: string;
  weight?: string;
  'aria-hidden'?: boolean;
  /**
   * primary has font-weight: regular, font-size: 16px (mobile) and 16px (desktop)
   * secondary has font-weight: regular, font-size: 14px (mobile) and 14px (desktop)
   * tertiary has font-weight: regular, font-size: 12px (mobile) and 12px (desktop)
   * caption has font-weight: regular, font-size: 10px (mobile) and 10px (desktop)
   * hero has font-weight: extrabold, font-size: 46px (mobile) and 48px (desktop)
   * title1 has font-weight: extrabold, font-size: 24px (mobile) and 28px (desktop)
   * title2 has font-weight: extrabold, font-size: 20px (mobile) and 24px (desktop)
   * title3 has font-weight: extrabold, font-size: 18px (mobile) and 20px (desktop)
   */
  type?: Types;
  lineHeight?: 'inherit';
  textAlign?: Property.TextAlign;
  whiteSpace?: WhiteSpace;
  children: React.ReactNode;
};

export type FontProps = {
  lineHeight: number;
  size: number;
} | null;
