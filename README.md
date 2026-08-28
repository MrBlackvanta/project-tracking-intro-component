# Project tracking intro component

My solution to the [Project tracking intro component](https://www.frontendmentor.io/challenges/project-tracking-intro-component-rv1UdCGgt)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://project-tracking-intro-component.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/project-tracking-intro-component

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Colour

Two pairings needed changing:

|                               | design     | built             | contrast     |
| ----------------------------- | ---------- | ----------------- | ------------ |
| Muted labels (eyebrow, Login) | ink at 50% | ink at 70%        | 2.9 to 5.1   |
| White label on the CTA        | `#FF5E5E`  | `hsl(0 100% 46%)` | 2.99 to 4.63 |

**No red at this hue and saturation can carry a white label at AA.** Even pure `#FF0000`
only reaches 4.0:1, so the surface has to drop below 50% lightness. The design's original
red becomes the CTA's hover colour, which keeps the design's own lighten-on-hover
direction. White on that hover is below AA, kept deliberately since hover states aren't
audited and the resting state passes.

`Login` is what forces 70% rather than 65%. It's the only muted label sitting on the pale
shape instead of white, and the shape costs about a quarter of a ratio point.

Body copy needed no change. Two palette tokens carry a decimal place so they render the
file's exact paints; the style guide's rounded values would ship something else.

### Implementation

**The background shape is drawn in code**, as the brief asks: one decorative `div` anchored
top-right with a 60px bottom-left radius, scaled by percentage so the nav stays over it at
wide viewports.

**Line breaks are constrained widths, not `<br>`.** The design hard-breaks the headline
after "INSIGHTS", and a `<br>` would overflow narrow screens. The constraint is in `em`
rather than `px`, because the design's own box sits within a pixel of the longest line and
a px value risks flipping the break on sub-pixel font-metric differences. One `8.4em`
declaration holds the two-line break from 375px up with no breakpoint.

**One breakpoint at 64rem.** Below it, the mobile stack with a dropdown; above it, the
illustration moves beside the copy. 1024px is the tightest case, where the headline clears
the background shape by 13px.

**The illustration overflows the viewport at both breakpoints, by design.** Its SVG canvas
is larger than the Figma group's bounding box because of drop-shadow filter bleed, so I
derived placement from the laptop rectangle, which exists in both coordinate spaces. The
overflow is clipped on the page wrapper rather than on `body`, since `body`'s overflow
propagates to the viewport and leaves it unable to clip an absolutely positioned
descendant.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
