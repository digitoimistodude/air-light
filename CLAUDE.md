## Project overview

Air-light is a minimalist WordPress starter theme by Digitoimisto Dude Oy. It follows traditional WordPress template hierarchy and coding standards.

## Assets structure

```
assets/
├── src/           # Source files
│   ├── js/        # JavaScript source
│   ├── sass/      # SCSS source
│   └── fonts/     # Font files
├── dist/          # Compiled output (Parcel)
│   ├── js/        # Compiled JavaScript
│   └── css/       # Compiled CSS + fonts
└── svg/           # Static SVG files
```

## Build system

- Uses Parcel for bundling and compilation
- `npm run dev` - Development with watch and BrowserSync
- `npm run build` - Production build
- Husky pre-commit hooks via `@digitoimistodude/code-quality-checks`

## Commits and code style

- 2 space indents
- Always commit build and asset files
- One logical change per commit
- Keep commit messages concise (one line), use sentence case
- Reference Linear issues at end: `Fix navigation bug, Ref: DEV-123`
- Update CHANGELOG.md after each change
- Use present tense in commits and CHANGELOG.md
- Use sentence case for headings (not Title Case)
- Never use bold text as headings, use proper heading levels instead
- Always add an empty line after headings
- No formatting in CHANGELOG.md except `inline code` and when absolute necessary
- Use `*` as bullets in CHANGELOG.md
- Never use Claude watermark in commits (FORBIDDEN: "Co-Authored-By")
- No emojis in commits or code
- Keep CHANGELOG.md date up to date when adding entries

## Claude Code workflow

- Always add tasks to the Claude Code to-do list and keep it up to date.
- Review your to-do list and prioritize before starting.
- If new tasks come in, don’t jump to them right away—add them to the list in order of urgency and finish your current work first.
- Do not ever guess features, always proof them via looking up official docs, GitHub code, issues, if possible.
- When looking things up, do not use years in search terms like 2024 or 2025.

## PHP conventions

- Namespaced PHP: `namespace Air_Light;`
- Use `__NAMESPACE__ . '\function_name'` for hooks
- WordPress coding standards (PHPCS)
- Theme version in `functions.php` constant `AIR_LIGHT_VERSION`

## CSS/SCSS conventions

- Stylelint with `@digitoimistodude/stylelint-config`
- CSS custom properties for colors, typography, spacing
- Mobile-first responsive approach
- Naming: SMACSS + DCS (Dude Coding Standards) + WordPress conventions
- Use `.is-something`, `.has-something`, `.subject-something`
- Never use BEM double dashes `--` or underscores `__`

## JavaScript conventions

- ESLint for linting
- Modules in `assets/src/js/modules/`
- Main entry points: `front-end.js`, `gutenberg-editor.js`

# Linear references

Use `, Ref: DEV-XXX` at end of commit messages to link to Linear issues.