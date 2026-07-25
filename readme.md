# Fitness Weirdos - Insane Gym Website

**Web Development ss26 Group Project**

## Key Dates
| Date | What |
|------|------|
| July 26 at 2:00 pm |Pages Drafted, meet to review and develop CSS structure |
| August 2 at 2:00 pm | Final Check and Polish |


## Group Members
- Christina
- Nyeri
- Wyatt
- Danny

## Claiming Pages
To claim a task: edit this file, put your name next to the task, commit with the message 'Claim: [page name], and PUSH.

| Page | File | Claimed by | Notes |
|------|------|------------|-------|
| Home | `index.html` | Danny | Hero, about, testimonials, before/after photos, embedded map or video |
| Services | `services.html` | Nyeri | Membership pricing (JS/JSON), classes, infusion bar, smoothie bar, Protein Fanatics |
| Resources | `resources.html` | Wyatt | Fitness & nutrition links, supplement info, embedded video |
| Contact / Feedback | `contact.html` | Christina (?) | Form with name, email, message, membership dropdown |


## Design Decisions
 Ad Sections (in the CSS)
 
 ### Ad sections

| Variable | Hex | Use for |
|---|---|---|
| `--ad-bg` | `#170B27` | Section background |
| `--ad-surface` | `#241137` | Boxes inside the section |
| `--ad-text` | `#EDE6F5` | Body text and headings |
| `--ad-cyan` | `#35E5E0` | Links |
| `--ad-lilac` | `#C3A9E8` | Captions, small text |
| `--ad-magenta` | `#FF3D9A` | Emphasis, buttons |

### Paperwork sections

| Variable | Hex | Use for |
|---|---|---|
| `--paper-bg` | `#E8E2D4` | Section background |
| `--paper-surface` | `#F2EEE4` | Boxes inside the section |
| `--paper-text` | `#14120E` | Body text and headings |
| `--paper-muted` | `#55503F` | Captions, footnotes |
| `--paper-red` | `#B4232A` | Links, stamps |

### Fonts
| Variable | Font | Use for |
|---|---|---|
| `--font-display` | Georgia | Headings and the one big promise per page |
| `--font-body` | Verdana | All body text |
| `--font-doc` | Courier New | Anything that looks like it came off a form |

For Courier New, apply it with the `.stamp` or `.field-note` classes rather than the variable. And do help keep it legiable keep it 16 and larger.

### File Structure
fitness-weirdos/
fitness-weirdos/

fitness-weirdos/
  index.html
  services.html
  resources.html
  contact.html
  style.css
  script.js
  README.md
  images/
    All photos go here

## GitHub Workflow (everyone follow this)
1. **Pull latest** before you start: `git pull origin main`
2. **Create a branch** for your page: `git checkout -b your-name/page-name`
3. **commit as you go**
4. When ready, open a **pull request** into `main`
5. Get one teammate to review and merge it
> Each group member must open at least one pull request: this is a graded requirement.

## Checklist for the Assignment
- [X] Hosted on github.
- [ ] Each member has submitted a pull request.
- [ ] Three or more linked pages with consistent navigation.
- [ ] CSS Grid or Flexbox.
- [ ] Responsive design with at least one media query breakpoint.
- [ ] At least 2 multimedia elements (photo, video, map)
- [ ] Contact form with three or more required fields
- [ ] At least one JavaScript-generated listing from an JSON array.
- [ ] Valid HTML and no WAVE accessability errors.
