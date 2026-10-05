Rewrite README.md in this WordPress project (dudestack + air-light, made by Digitoimisto Dude Oy) so a developer joining the project understands it without asking anyone. Read the code first: composer.json, the theme in content/themes/, custom plugins in content/plugins/ that are committed (check .gitignore), functions.php config, inc/, blocks/, package.json scripts, config/, .github/workflows/, the existing README.md and CHANGELOG.md.

Nobody updates READMEs after writing them, so write only what stays true:

- Never write version numbers, dates, counts, local or server URLs, Linear issue keys, people's names or anything else that changes over time. Point to where it lives instead (CHANGELOG.md, composer.json, a folder).
- Every claim must come from the code. If you cannot verify something, leave it out. Never invent URLs, hostnames, environments or integrations.
- Never tell anyone to change `core.hooksPath`, the code-quality-checks package points it at its own husky hooks.
- Keep project-specific content from the existing README if the code shows it is still true. Drop the old boilerplate: the "git blame is in place" disclaimer, version badges, GitBook links, and instructions to run npm in the project root when the root has no package.json.

Structure, leaving out any section with nothing real to say:

1. `# Project name`, then one or two sentences on what the site is and does, then the screenshot `![<Name> theme screenshot](content/themes/<theme>/screenshot.png)`, then: Built on [dudestack](https://github.com/digitoimistodude/dudestack) and [air-light](https://github.com/digitoimistodude/air-light). Versions and release notes are in [CHANGELOG.md](<path to the actual CHANGELOG.md>).
2. `## What lives in this repo`: a table of the theme and each committed custom plugin with what it does. Mention that other plugins come from Composer.
3. `## Integrations`: external systems the code talks to, REST routes it registers (`register_rest_route`), WP-CLI commands, cron jobs, and the env variables each one uses.
4. `## Getting started`: link [Joining the project later on](https://docs.dude.fi/doc/joining-the-project-later-on-enczxoagEQ), then the commands from clone to `npm run dev`: `composer install` in the project root, then `nvm use`, `npm install` and `npm run dev` in the theme folder, or whatever the build actually uses (older projects run gulp from the root). Mention any extra key composer needs (private package URLs with `{%VAR}`).
5. `### Environment variables`: an empty `.env` block of the variables the project needs beyond the dudestack defaults, found from `env(`, `getenv(` and `{%VAR}` in composer.json.
6. `## Development`: a table of the theme's npm scripts that a developer runs, which CI workflows run, and: Every change gets a line in CHANGELOG.md and a Linear issue reference at the end of the commit message.
7. `## Deployment`: how it deploys (Capistrano `cap staging deploy` / `cap production deploy` if there is a Capfile, or the GitHub workflow if one deploys), linking [Deploying to staging](https://docs.dude.fi/doc/deploying-to-staging-dPBT6qe7NA) for Capistrano projects.

Style: English, plain words, sentence case headings, no emojis, no em dashes, no bold used as headings, tables for lists of things. Use only regular dashes.

Only edit README.md. Do not touch any other file, do not commit.
