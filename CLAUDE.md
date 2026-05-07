## Project overview

Air-light is a minimalist WordPress starter theme by Digitoimisto Dude Oy. It follows traditional WordPress template hierarchy and coding standards.

## Build system

- Uses Parcel for bundling and compilation
- `npm run dev` - Development with watch and BrowserSync
- `npm run build` - Production build
- Husky pre-commit hooks via `@digitoimistodude/code-quality-checks`

## Commits and code style

- CRITICAL: Always lint before committing changes!
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
- Features should be built inside branches, branches are all caps, e. g. DEV-111 and should reflect the Linear task ID

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
- Always prefer `//` comments in SCSS, never `/* */`
- Use `// stylelint-disable` at top of file instead of `stylelint-disable-next-line`
- Always explain why disabling stylelint rules in first comment line
- Check prettier/stylelint config to enforce `//` comment style

## JavaScript conventions

- ESLint for linting
- Modules in `assets/src/js/modules/`
- Main entry points: `front-end.js`, `gutenberg-editor.js`

## Releasing a new version (staff only)

### Unreleased changes workflow

Master is the active dev branch and always contains the latest, possibly unreleased, code. New client projects pull master via `newtheme.sh`, so unreleased changes are not theoretical - they land in real projects immediately.

Implications:

- Master must always be in a buildable, working state. Do not merge half-finished work.
- Every change to master is also a CHANGELOG.md change. Add an entry under `### [Unreleased]: YYYY-MM-DD` at the top of the file in the SAME commit as the code change.
- Update the date on the `[Unreleased]` heading whenever you add a new entry, so it reflects the latest activity (not the date the heading was first created).
- Do not bump `AIR_LIGHT_VERSION`, `style.css`, `package.json`, or `readme.txt` for unreleased work. Those move only during the release flow below.
- When a release ships, the `[Unreleased]` heading is converted to `X.Y.Z: YYYY-MM-DD` and a new empty `[Unreleased]` heading is added on top for the next cycle.

### When to release

Suggest a release when CHANGELOG.md `[Unreleased]` accumulates enough to be worth shipping. Rough guide:

- Patch (`X.Y.Z+1`) - around 3 or more entries, or a single critical fix that needs to ship now
- Minor (`X.Y+1.0`) - new feature, deprecation, or noticeably larger surface change
- Major (`X+1.0.0`) - breaking changes (renamed PHP/JS APIs, removed mixins, restructured assets, theme.json schema changes)

Do not auto-release. Always confirm with the user before starting the flow. If `[Unreleased]` has only 1-2 trivial entries, suggest waiting unless the user asks to ship anyway.

### Release flow

Run the agent steps autonomously. Pause only on the manual steps (marked below) and wait for the user to confirm before continuing.

1. Make sure master is clean and up to date

   - `git checkout master && git pull --ff-only`
   - `git status` must show a clean working tree
   - All release-bound PRs are merged

2. Bump version in ALL of these files (must match exactly)

   - `style.css` - `Version:` in theme header AND `@version` date
   - `functions.php` - `AIR_LIGHT_VERSION` constant
   - `package.json` - `version` field
   - `package-lock.json` - run `npm install --package-lock-only`
   - `readme.txt` - `Stable tag:` field
   - `CHANGELOG.md` - change `[Unreleased]` heading to `X.Y.Z: YYYY-MM-DD`

3. Build production assets

   - `npm run build`
   - Commit the rebuilt `assets/` output along with the version bump

4. Manual: run Theme Check in WordPress

   - User opens https://airdev.test/wp/wp-admin/themes.php?page=themecheck and runs it against air-light
   - Wait for the user to confirm it passes before continuing

5. Commit, tag, and push

   - One commit for the release (e.g. `Release X.Y.Z, Ref: DEV-XXX`)
   - `git tag X.Y.Z` then `git push origin master --tags`
   - Create a GitHub release from the tag with the CHANGELOG entry as body

6. Manual: upload to WordPress.org theme directory

   - Build a clean zip via `bin/air-pack.sh` (no `.parcel-cache`, no dev files)
   - User uploads the zip at https://wordpress.org/themes/upload/
   - Wait for the user to confirm the upload succeeded

7. Post-release

   - Add a new `### [Unreleased]: YYYY-MM-DD` heading at the top of `CHANGELOG.md` for the next cycle
   - Announce the release in the relevant Slack channel if applicable

# Linear references

Use `, Ref: DEV-XXX` at end of commit messages to link to Linear issues.
