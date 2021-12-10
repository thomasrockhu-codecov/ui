# Badge

This component(s) is used to display a number, label, or icon/illustration on a colored and rounded/rectangular background. It is split up inte several components, each with their specific use cases and design system:

### Base Badge (Badge)

The BaseBadge is flexible and exposed externally as Badge, and all the other badges specialized BaseBadges.

**OBSERVE:**

**<Badge> should only be used directly as a last resort if none of the other badge components covers your intended use case.**

### Account Badge (Badge.AccountBadge)

This replaces the depreciated `Avatar` component, and is used to display a representation of an entity (e.g. a bank, an account type, etc.).

- `badgeColor` - a theme color function used to set the color for the background/badge.
- `badgeSize` - sets the width/height (symmetric ratio) of the badge. Available sizes are: `'l'`: 48px, `'m'`: 32px, `'s'`: 24px.

### Icon Badge (Badge.IconBadge)

Badge with an `Icon` or `Illustration`. Used to bring flair or bring attention to something.

- `badgeColor` - a theme color function used to set the color for the background/badge.
- `badgeSize` - sets the width/height (symmetric ratio) of the badge. Available sizes are: `'xl'`: 80px, `'l'`: 48px, `'m'`: 40px, `'s'`: 32px.
- `children` - the `Icon`- or `Illustration`- component.

### Label Badge (Badge.LabelBadge)

Brings attention to a property on a page entity.

- `badgeColor` - a theme color function used to set the color for the background/badge.
- `color` - a theme color function used to set the color for the text.
- `type` - sets the typography to `primary` or `secondary`.
- `weight` - sets the font weight.
- `children` - the badge's text content.

### Notification Badge (Badge.NotificationBadge)

Used to display user notifications. Displays the notification as a badge with numbers or as a dot.

- `badgeColor` - a theme color function used to set the color for the background/badge.
- `color` - a theme color function used to set the color for the number.
- `badgeSize` - sets the width/height of the badge. Available sizes are: `'l'`: 32px, `'m'`: 24px, `'s'`: 16px, `'xs'`: 8px.
- `animateOnChange` - triggers the pulse animation when component is updated.
- `symmetricShape` - forces the component to be symmetrical. i.e round.
- `children` - the number of notifications.

### Status Badge (Badge.StatusBadge)

The Status Badge is used for displaying the statuses like `'create'`, `'complete'`, `'pending',` `'error'`, `'warning'` or `'information'`.
The status can be passed in as a `string` to `variant` which will render the corresponding `icon` and `badgeColor`.

- `badgeSize` - sets the width/height on the badge. Available sizes: `'xl'`: 72px `'l'`: 48px `'m'`: 32px `'s'`: 24px.
- `variant` - status as a string. Statuses are: `'create'`, `'complete'`, `'pending',` `'error'`, `'warning'` or `'information'`.

### Tooltip Badge (Badge.TooltipBadge)

TooltipBadge is used to display a clickable/hoverable badge for displaying additonal information in a `Tooltip` or a `Drawer`.
Consumer have to wrap TooltipBadge in a Tooltip or define their own onClick function.
If the `onClick` prop is passed in the component will styling to cursor and highlighting the badge.

- `badgeSize` - sets the width/height on the badge. Available sizes: `'l'`: 24px `'s'`: 16px.
- `onClick` - a function that is triggered on click. Sets cursor to pointer and outlines the badge and icon.
