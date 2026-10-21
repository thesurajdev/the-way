# The Way

*Find your way. Respect theirs. Grow together.*

The Way is a personal philosophy about how a person might live. It rests on four ideas: individuality, freedom, responsibility and growth. You don't have to believe it, follow it or agree with it. You can disagree, question it, take one idea and leave the rest, or ignore all of it.

This repo is the source of the website: **[theway.surajdev.com](https://theway.surajdev.com)**

## The four foundations

- **Individuality.** Be yourself. Every person is unique, and no one needs to become a copy of someone else.
- **Freedom.** Choose your way. People should have room to develop their own beliefs, values and lifestyles.
- **Responsibility.** Remember others. Your choices affect other people, animals, nature and future generations.
- **Growth.** Keep becoming. Learn, question, improve, and let The Way change too.

## What it asks of you

Nothing. No belief or rejection of God, no worship, rituals, donations, membership or specific lifestyle. Reading is open, and there is no account to create and nothing to sign.

## What's on the site

| Section | What you'll find |
|---|---|
| Declaration | The opening statement of The Way |
| Manifesto | The full text |
| Philosophy | The ideas behind it |
| Principles | The principles in short form |
| Safeguards | The constitutional limits that stop it becoming an authority |
| Questions | Questions and answers, including the hard ones |
| Founder | The founder's framework, and why the founder holds no authority over your beliefs |
| Identity | Identity and language used in the project |
| Versions | Version history and what changed in each release |
| Discuss | Where to question, challenge or disagree |

## Criticism is part of the design

The Way expects to be wrong in places. If you find a contradiction, a harmful implication, an outdated idea or a missing perspective, say so. Open an [issue](../../issues) with the page you're looking at and what you think should change. Corrections can land in a future version, and every version stays on record.

## Versions

Current version: **v1.0**

Each version is documented under `versions/`, with a summary of what changed. Releases on this repo follow the same numbering.

## Repo structure

```
the-way/
├── index.html        home page
├── 404.html
├── CNAME             custom domain for GitHub Pages
├── robots.txt
├── sitemap.xml
├── assets/           images, styles, scripts
├── declaration/
├── manifesto/
├── philosophy/
├── principles/
├── safeguards/
├── questions/
├── founder/
├── identity/
├── versions/
└── discuss/
```

It's a static site: plain HTML, CSS and a little JavaScript. No build step. Push to `main` and GitHub Pages publishes it.

To preview locally:

```bash
git clone https://github.com/thesurajdev/the-way.git
cd the-way
python3 -m http.server 8000
# open http://localhost:8000
```

## Author

Written and maintained by [Suraj Dev](https://www.surajdev.com). The founder is the starting point, not the final authority.
