type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ScreenSizeProps = { [key: string]: any };

type MediaProps<T extends ScreenSizeProps> = { [size in ScreenSize]: T };

export type GetScreenMedia = <T extends ScreenSizeProps>(
  mediaProps: MediaProps<T>,
) => Array<T & { size: ScreenSize }>;

// type MediaProps<T> = T & { size: Size };
// export type GetScreenMedia<T> = () => { [size in Size]: MediaProps<T> };
