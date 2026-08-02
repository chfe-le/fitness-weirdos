
Hi all,

I finished the shared stylesheet and the script file over the weekend, and they are in a pull request now. Once it merges, please pull main before you touch your page, or you will be building against the old CSS and we will get conflicts.

I also updated "page-template.html". The old version was missing the wrap divs, so anything built from it would have had text running off the edge of the screen. The new one has a working example of the two column layout and the register block, so it is worth starting from that even if your page is already written.

A few things that apply to all of us:

We are using one stylesheet, "style.css". Please do not add a second CSS file or link Google Fonts. If you need new rules, put them at the bottom of "style.css" under your name in Section 6, and prefix your class names with "svc-", "res-", or "con-" so they cannot collide with anyone else's.

One more thing about the stylesheet: the "@media (min-width: 768px)" block has to stay at the very end of the file. The rules in there override the mobile values above it. If it gets moved up, the whole site loses its desktop layout.

We are also using one script file, "script.js", loaded with a plain script tag at the end of the body. No "type=module" and no inline script blocks in the middle of the HTML.

Every section needs a "wrap" div directly inside it. The section tag sets the background color and the wrap div sets the page padding and max width. Without it your text runs to the edge.

Copy the header and footer straight from "page-template.html". The only things you change are moving "aria-current" onto your own page's nav link, and your revision number. The revision numbers are meant to be different on each page, that is the joke, just keep your header and footer matching each other.

Every page also needs three small things: the skip link at the top of the body, "id=main" on the main tag, and the register section as the last thing before the footer. All three are in the template.

For the footnotes, open "script.js" and find the "REGISTER" object near the top. Your page has a placeholder entry in there. Replace the text with your own, then put a matching "fn-ref" marker next to the claim in your HTML. The numbers have to match or it counts as a broken link.

Before you open your pull request, run your page through validator.w3.org/nu and wave.webaim.org and fix whatever they flag. Valid HTML and no WAVE errors are both on the grading list.


Nyeri, for services.html:

You can delete "style2.css", "data.js", and "script1.js". The plan data and the renderer are both inside "script.js" now, and the membership cards will build themselves as long as you keep the "membership-plans" div where it is. Your renderer worked, I just moved it over so we only have one script file.

Other things: point the stylesheet link at "style.css", drop the two preconnect tags and the Google Fonts link, swap in the header and footer from the template, change "brand" from an h1 to an a tag since the page currently has two h1s, replace every "container" with "wrap", delete the empty section tag near the top of main, and fill in the dd elements that still say "..". The styles for "services-nav", "plan-card", and the description lists are already written, so you should not need to add any CSS.


Wyatt, for resources.html:

Your page was actually the closest to the shared system already, you were using "style.css" and "field-note" and the aria labels, so thank you for that.

Things to change: the title tag and footer still say Insane Gym, those need to be Meridian. Swap in the header and footer from the template, and use the ul markup for the nav since the bare links will not pick up the nav styling. Remove the inline style attributes on the section and the figure, everything you need is in the stylesheet. Wrap each section's contents in a "wrap" div. And the video needs a "track" element for captions, otherwise WAVE raises an alert on it.

The grid styles for "resource-grid", "resource-card", and "supplemental-links" are all written already.

One small thing, some of your images are pretty big. "res-raw.jpg" is 4.4 MB and "res-warrior.jpg" is 3.6 MB. If you have a minute to compress them it would help the page load.


Christina, for contact.html:

The form has the most on its list, so I wanted to give you the details rather than just say go fix it.

The big one is that the labels are not connected to their inputs. There are 17 of them and they all have the same issue: the "for" attribute does not match the input's "id". For example the first one is "for=FirstName" on an input with "id=fname". They need to match exactly, including capitals. This is most of our WAVE errors in one place, so it is the highest value fix on the whole site.

The rest:

The footer is sitting outside the body tag, it needs to move inside.

Neither form has a submit button, so they cannot actually be submitted. Adding "button type=submit" to each one covers it.

In the child form script, three lines use single quotes where they need backticks: the "dobLabel.textContent" line and the two "dobInput" lines. Right now every generated date input gets the same literal id, which reads as duplicate IDs, and the label prints the raw text instead of the number.

The label text has quotation marks in it, so it renders with visible quotes around each one.

The income input has two "placeholder" attributes on it, one needs to go.

Most of the "autocomplete" values are not real tokens. "first-name", "phone", "date", "blood", "diet", "career", "marital" and a few others get flagged by the validator. There are correct ones for a handful of them, "given-name", "additional-name", "family-name", "tel", "bday", "address-level1". For anything without a real token it is cleaner to just delete the attribute.

The select needs a "name" attribute, and "Do you have Children?" should be an h2 since we can only have one h1.

Three of the field rows use "phone", "dob", and "app" instead of "field", so they are not picking up the styling. And "container" needs to become "wrap" like the other pages.

Last thing, the inline script should move into "script.js" wrapped in a guard so it does not run on the other pages. I can help with that part if you want, just send it over.

Optional but it would help: wrapping the field rows in a "form-grid" div gives you two columns of inputs above the breakpoint, which cuts the form height roughly in half.


Two last things.

Nyeri and Wyatt, your branches are pushed but I do not think either of you has opened a pull request yet. Main is still missing services.html and resources.html, so two of the four nav links are 404ing on the live site. Each of us needs at least one merged pull request and that part is graded per person, so please open one today even if the page is not finished. We can always merge again after.

And can someone confirm GitHub Pages is actually turned on and send the URL? I do not think we have checked, and that is the first thing on the grading list plus it is what we post to the discussion forum.

See everyone tomorrow at 2.

Danny


Alignment · MD
# Alignment checklist
 
The shared stylesheet and script are finished. This file is what your
page needs so it matches everything else.
 
**Pull main before you start.** If you build against the old CSS we will
get conflicts.
 
```
git checkout main
git pull origin main
git checkout -b your-name/cleanup
```
 
Do your edits, then open a pull request and get someone to review it.
 
---
 
## Start from the template
 
`page-template.html` has been updated. The old version was missing the
wrap divs, so anything built from it had text running off the edge of
the screen. The new one has a working two column example and the
register block. Worth starting from it even if your page is already
written.
 
---
 
## Things that apply to all of us
 
**One stylesheet, `style.css`.** No second CSS file, no Google Fonts. If
you need new rules, put them at the bottom under your name in Section 6
and prefix your class names with `svc-`, `res-`, or `con-` so they
cannot collide with anyone else's.
 
**The `@media (min-width: 768px)` block stays at the very end of
`style.css`.** The rules in there override the mobile values above it.
If it gets moved up, the whole site loses its desktop layout.
 
**One script, `script.js`,** loaded with a plain script tag at the end
of the body. No `type="module"`, no inline script blocks in the middle
of the HTML.
 
**Every section needs a `wrap` div directly inside it.** The section tag
sets the background color and the wrap div sets the page padding and max
width. Without it your text runs to the edge.
 
```html
<section class="paperwork" aria-labelledby="something-heading">
  <div class="wrap">
    ...your content...
  </div>
</section>
```
 
**Copy the header and footer straight from the template.** Two things
change: move `aria-current="page"` onto your own page's nav link, and
set your own revision number. The revision numbers are meant to differ
per page, that is the joke. Just keep your header and footer matching
each other.
 
**Every page needs these three things,** all of which are in the
template:
 
- The skip link as the first thing in the body
- `id="main"` on the main tag
- The register section as the last thing before the footer
**Footnotes.** Open `script.js` and find the `REGISTER` object near the
top. Your page has a placeholder entry. Replace the text with your own,
then put a matching marker next to the claim in your HTML:
 
```html
<a class="fn-ref" id="ref-1" href="#fn-1" aria-label="Footnote 1">1</a>
```
 
The numbers have to match or it counts as a broken link.
 
**Before you open your pull request,** run your page through both of
these and fix what they flag:
 
- validator.w3.org/nu
- wave.webaim.org
Valid HTML and no WAVE errors are both on the grading list.
 
---
 
## Nyeri: services.html
 
You can delete `style2.css`, `data.js`, and `script1.js`. The plan data
and the renderer are both inside `script.js` now, and the membership
cards will build themselves as long as you keep the `membership-plans`
div where it is. Your renderer worked, it just got moved over so we only
have one script file.
 
- Point the stylesheet link at `style.css`
- Drop the two `preconnect` tags and the Google Fonts link
- Swap in the header and footer from the template
- Change `brand` from an `h1` to an `a` tag. The page currently has two
  `h1` elements, which is an accessibility error
- Replace every `container` with `wrap`
- Delete the empty `<section class="">` near the top of main
- Fill in the `dd` elements that still say `..`
The styles for `services-nav`, `plan-card`, and the description lists
are already written, so you should not need to add any CSS.
 
---
 
## Wyatt: resources.html
 
Your page was the closest to the shared system already. You were using
`style.css`, `field-note`, and the aria labels.
 
- The title tag and footer still say Insane Gym, both need to be
  Meridian
- Swap in the header and footer from the template, including the `ul`
  markup for the nav. Bare `a` tags inside `nav` will not pick up the
  nav styling
- Remove the inline `style` attributes on the section and the figure.
  Everything you need is in the stylesheet
- Wrap each section's contents in a `wrap` div
- Add a `track` element to the video, otherwise WAVE raises an alert on
  it
The grid styles for `resource-grid`, `resource-card`, and
`supplemental-links` are all written already.
 
Some of the images are large. `res-raw.jpg` is 4.4 MB and
`res-warrior.jpg` is 3.6 MB. Compressing them would help the page load.
 
---
 
## Christina: contact.html
 
The form has the most on its list, so here are the details rather than
just a list of file names.
 
**The big one: the labels are not connected to their inputs.** All 17 of
them have the same issue, where the `for` attribute does not match the
input's `id`. The first one is `for="FirstName"` on an input with
`id="fname"`. They need to match exactly, capitals included. This is
most of our WAVE errors in one place, so it is the highest value fix on
the whole site.
 
The rest:
 
- The footer is sitting outside the `body` tag. It needs to move inside
- Neither form has a submit button, so they cannot be submitted. Add
  `<button type="submit">Submit</button>` to each
- In the child form script, three lines use single quotes where they
  need backticks: the `dobLabel.textContent` line and the two `dobInput`
  lines. Right now every generated date input gets the same literal id,
  which reads as duplicate IDs, and the label prints raw text instead of
  the number
- The label text has quotation marks in it, so it renders with visible
  quotes around each one
- The income input has two `placeholder` attributes. One needs to go
- Most of the `autocomplete` values are not real tokens. `first-name`,
  `phone`, `date`, `blood`, `diet`, `career`, and `marital` all get
  flagged. There are correct ones for a handful: `given-name`,
  `additional-name`, `family-name`, `tel`, `bday`, `address-level1`. For
  anything without a real token it is cleaner to delete the attribute
- The `select` needs a `name` attribute
- "Do you have Children?" should be an `h2`, since we can only have one
  `h1`
- Three field rows use `phone`, `dob`, and `app` instead of `field`, so
  they are not picking up the styling
- `container` needs to become `wrap` like the other pages
- The inline script should move into `script.js`, wrapped so it does not
  run on other pages:
```js
(function buildChildFields() {
  var select = document.getElementById('numChildren');
  if (!select) return;
  // rest of your code
})();
```
 
Optional but it helps: wrapping the field rows in a `form-grid` div
gives you two columns of inputs above the breakpoint, which cuts the
form height roughly in half.
 
---
 
## Two open items
 
**Pull requests.** Nyeri and Wyatt, your branches are pushed but neither
has a pull request open yet. Main is still missing `services.html` and
`resources.html`, so two of the four nav links are 404ing on the live
site. Each of us needs at least one merged pull request and it is graded
per person, so please open one even if the page is not finished. We can
merge again after.
 
**GitHub Pages.** Can someone confirm it is turned on and post the URL?
It is the first thing on the grading list and it is what we submit to
the discussion forum.
 

