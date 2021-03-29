# Others | Theme

## Colors

Semantic colors are stored in theme object and are exposed publicly. Raw color palette is stored in theme object and is
not exposed publicly.

Semantic colors are links to the raw colors:

```js
background: rawColor.gray7;
```

If you need to use some color, workflow is this:

1. Do you have suitable semantic color presented? (e.g. you want to have white text color in the button, then there is
   one already `buttonText: rawColor.white`)
2. If there is no suitable semantic color presented, or there is one name that relates to your use case, but the color
   is different, then you create new color with a similar name, but specific to your situation (
   e.g. `buttonTextWhenStrangeConditionIsTrue: rawColor.cta` )
3. From time to time we are going to groom the colors and merge them together with standard deprecation flow, keep up to
   date
