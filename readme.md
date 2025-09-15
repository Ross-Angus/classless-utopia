## Font sizes

In dark mode, bodytext needs a nudge to its font weight to remain as readable as it was in light mode. Hilariously, very bold headings should be less bold in dark mode. Design is bullshit.

Use clamp() for line height and letter spacing?

## Headings

https://typescale.com/

Headings should use margin top and bottom (collapsing) so that it's possible to have different gaps above them

A full 1-6 heading hierarchy apparently doesn't work on mobile -
Restrict it to 3 sizes and use typography weights to indicate the hierarchy from then on

Line spacing for headings is between 1.1 and 1.4

All caps headings require wider letter spacing.

## Blockquotes

Use a serif typeface for blockquotes?
Ratio of font size of quote to font size of citation should be 1.75:1

## Asides and figures

Larger margin-bottom, to give breathing room from body text. If it has a `figcaption` the gap should be larger still

Is there a way to use `figure` for pull-quote style stats? "49% of users thought this was a good idea". Use monospaced type?

## Card design:

aside
picture
h2
p content
p a
Aside is padded, picture is inside padding
Last para is a cta
Look at [`hgroup`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hgroup)

## Forms

Demo `data` and `datalist`

### Search tag

https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/search

## Navigation

Nav spacing for mobile needs to be larger for fat fingers

Look into the disaster of desktop mega menus - `:scope > li` forms the columns instead of the `columns` property in CSS?

## Tags

`address`
`dfn` (tooltip?)
`map` & `area`?
`meter`, `progress`
`output`
`time`

## Other

Is there anything to be done with width fit content?

https://www.w3.org/TR/css-pseudo-4/#selectordef-target-text

Click outside of main nav should close nav (close all nav?)

## Find and replace blog post:

<option value="(.*)"></option>
<option value="$1">$1</option>
