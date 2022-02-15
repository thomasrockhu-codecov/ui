# Button

This component will render either a `<button>` or a `<a>` tag depending on what props you pass to it.

## Button vs Link

If the expected behaviour on click event is to navigate the user somewhere then we should always be using links, even if
it's styled to look like a button. Therefore, this component can output links that looks like buttons.

## Props

Because the component can output two different elements, we need to divide the props into two camps. If the `to` prop is
specified then the output will always be a link and all the button props will be disregarded. Also, if the `disabled`
prop is specified then the output will be a button and all the link props will be disregarded. This because a link can't
really be disabled and then you probably want to have a button which can be disabled.

### Shared props

- `variant` - a string that can be either `primary` or `secondary`, default it's `primary`.
- `size` - a string that can be `s`, `m` or `l`, default it's `m`.
- `fullWidth` - a boolean value, default it's `false`.
- `color` - function, selector from the theme, e.g. `t => t.color.cta`. Currently, only cta and negative are available.

### Button Props

- `disabled` - a boolean value.
- `onClick` - a function that will run on click event.
- `type` - a string that can be `button`, `reset` or `submit`.

### Link Props

- `onClick` - a function that will run on click event.
- `to` - a path that will be passed to React router dom.
- `rel` - a string if you want to specify a relation like `nofollow`.

## Usage

Basic usage

```javascript
<Button type="button" onClick={action('clicked')}>
  Button text
</Button>
```

### With disabled prop

Disable your button just by passing the prop disabled. When the disabled prop is present, the `<Button>` will no longer
be able to become a link, because a html link can't really be disabled.

```javascript
<Button type="submit" onClick={action('clicked')} disabled>
  Disabled submit button
</Button>
```

### With different looks

Variant, Size and fullWidth all changes the looks of the button. These props can be used in all combinations.

```javascript
<Button type="button" onClick={action('clicked')} variant="secondary" size="l">
  Secondary button
</Button>
```

### With to prop

Turn your `<Button>` into a link by passing the `to` prop. When doing this the `type` prop will be omitted because this
is a html `<button>` specific prop.

```javascript
<Button to="www.nordnet.se">To Nordnet</Button>
```
