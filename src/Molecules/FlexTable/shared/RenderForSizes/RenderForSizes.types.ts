import { Theme, MediaQuery } from '../../../../theme/theme.types';

export type ScreenSize = 'xs' | keyof Theme['breakpoints'];

export interface ScreenSizeProps {
  [key: string]: any;
}

export type MediaProps = { [size in ScreenSize]?: ScreenSizeProps };

export type MediaPropsAndSize = ScreenSizeProps & { size: ScreenSize };

export type GetMediaQuery = (
  theme: Theme,
  currentSize: ScreenSize,
  nextSize: ScreenSize | null,
) => MediaQuery;

export type GetScreenMedia = (mediaProps: MediaProps) => Array<MediaPropsAndSize>;

export type RenderForSizesComponent = React.FC<
  MediaProps & {
    children: React.FC<MediaPropsAndSize>;
  }
>;
