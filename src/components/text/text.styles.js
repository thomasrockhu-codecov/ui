export default ({ typography }) => ({
  primary: typography.primary(),
  secondary: typography.secondary(),
  tertiary: typography.tertiary(),
  caption: typography.caption(),
  title1: typography.title1(),
  title2: typography.title2(),
  title3: typography.title3(),
  hero: typography.hero(),
  regular: {
    fontWeight: typography.primary().fontWeight,
  },
  bold: {
    fontWeight: typography.primary({ weight: 'bold' }).fontWeight,
  },
  extrabold: {
    fontWeight: typography.primary({ weight: 'extrabold' }).fontWeight,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
});
