# Molecules | CardWithTitle

This component is about proper spacing between title and content and semantics (header wrapping title).
The title that you pass in can be anything, can be custom component as well.

---

In the future we may incorporate some more styling here, but for now you need to create mutations out of this.

❗️Important, if you are want to use `FadedScroll` without it's `maxHeight` prop inside this component which means that you want Flexbox to just give the content area all the available space thats left. Then wrap all content in a container element with the following styles: `height: 100%; flex-grow: 1; min-height: 0; /* Firefox fix */`. Also this container would be where you apply padding bottom i.e. the space between the content and the bottom of the card.
