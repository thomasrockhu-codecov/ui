# Button

This component will render a `<button>` with height 24px (old size small)

## Props

- `variant` - a string that can be either `primary` or `secondary`, default is `primary`.
- `fullWidth` - a boolean value, default it's `false`.
- `disabled` - a boolean value.
- `icon` - a ui icon to be placed either left or right of button text.
- `iconPlacement` - a string that can be either `left` or `right`, default is `left`
- `onClick` - a function that will run on click event.
- `loading` - a boolean to indicate if spinner should be shown in button

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
