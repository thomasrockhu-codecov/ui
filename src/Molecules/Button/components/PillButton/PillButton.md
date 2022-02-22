# PillButton

This component will render a `<button>` or a `<a>` tag looking like a button, with height 24px (size small)

## Button vs Link

If the expected behaviour on click event is to navigate the user somewhere then we should always be using links, even if
it's styled to look like a button. Therefore, this component can output links that looks like buttons.

## Props

Because the component can output two different elements, we need to divide the props into two camps. If the `to` prop is
specified then the output will always be a link and all the button props will be disregarded. Also, if the `disabled`
prop is specified then the output will be a button and all the link props will be disregarded. This because a link can't
really be disabled and then you probably want to have a button which can be disabled.

## Shared Props

- `variant` - a string that can be either `primary` or `secondary`, default is `primary`.
- `fullWidth` - a boolean value, default is `false`.
- `icon` - a ui icon to be placed either left or right of button text. If icon color is to follow text color (also while hovering and pressing button), set icon's color to "currentColor" as in the stories.
- `iconPlacement` - a string that can be either `left` or `right`, default is `left`.
- `onClick` - a function that will run on click event.
- `loading` - a boolean to indicate if spinner should be shown in button.
- `ref`

### Button Props

- `disabled` - a boolean value.

### Link Props

- `to` - a path that will be passed to React router dom.
- `rel` - a string if you want to specify a relation like `nofollow`.
- `target` - `_blank` or `_self`.
- `external` - for external links
- `fullServerRedirect`

## Usage

Basic usage

```javascript
<PillButton onClick={action('clicked')}>
  Button text
</PillButton>
```

### With disabled prop

Disable your button just by passing the prop disabled

```javascript
<PillButton onClick={action('clicked')} disabled>
  Disabled button
</PillButton>
```

### With different looks

Variant and fullWidth changes the looks of the button. These props can be used in all combinations.

```javascript
<PillButton type="button" onClick={action('clicked')} variant="secondary">
  Secondary button
</PillButton>
```
