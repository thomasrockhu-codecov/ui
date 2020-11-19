import { MediaRelatedProps } from './shared.types';

type GenericBaseProps = { [key: string]: any };

type GenericScreenSizeProps = { [key: string]: any };

type GenericMediaRelatedPropsWithXs = {
  xs: GenericScreenSizeProps & MediaRelatedProps<GenericScreenSizeProps>;
};

type BasePropsMergedWithScreenSizeProps<P extends GenericMediaRelatedPropsWithXs> = Exclude<
  P,
  'xs' | 'sm' | 'md' | 'lg' | 'xl'
> &
  P['xs'];

function getStyles<T, P>(props: P, getStylesPerProp: { [K in keyof T]?: (props: P) => string }) {
  return Object.keys(getStylesPerProp)
    .map((key) => getStylesPerProp[key](props))
    .join('\n');
}

function getStylesForSizes<P extends GenericBaseProps & GenericMediaRelatedPropsWithXs>(
  props: P,
  getStylesPerProp: {
    [K in keyof P['xs']]: (props: BasePropsMergedWithScreenSizeProps<P>) => string;
  },
) {
  const { xs, sm, md, lg, xl, ...baseProps } = props;
  return [
    { size: 'xs', ...xs },
    { size: 'sm', ...sm },
    { size: 'md', ...md },
    { size: 'lg', ...lg },
    { size: 'xl', ...xl },
  ]
    .filter((screenSizeProps) => Object.keys(screenSizeProps).length > 1)
    .map(({ size, ...sizeSpecificProps }) => {
      const styles = getStyles<P['xs'], BasePropsMergedWithScreenSizeProps<P>>(
        { ...sizeSpecificProps, ...baseProps },
        getStylesPerProp,
      );
      if (size !== 'xs') {
        return `${props.theme.media.greaterThan(props.theme.breakpoints[size])} { ${styles} }`;
      }
      return styles;
    })
    .join('\n');
}

export default getStylesForSizes;
