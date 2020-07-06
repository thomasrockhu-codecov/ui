import { Theme } from '../../../theme/theme.types';

export type Density = 's' | 'm' | 'l';

export type FontSize = 's' | 'm' | undefined;

export type MediaRelatedProps<T> = { [screenSize in keyof Theme['breakpoints']]?: Partial<T> };
