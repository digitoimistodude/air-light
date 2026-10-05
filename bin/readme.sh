#!/bin/bash
# Rewrites a project's README.md from its code with Claude Code
# Usage: readme.sh [project path, defaults to current directory]

SCRIPTS_LOCATION="$( cd "$( dirname "$( readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}" )" )" &> /dev/null && pwd )"
PROJECT_PATH="${1:-$( pwd )}"

if ! command -v claude &> /dev/null; then
  echo "Claude Code is not installed: https://docs.claude.com/en/docs/claude-code"
  exit 1
fi

if [ ! -f "${PROJECT_PATH}/composer.json" ]; then
  echo "${PROJECT_PATH} does not look like a dudestack project"
  exit 1
fi

cd "${PROJECT_PATH}" || exit 1
claude -p "$( cat "${SCRIPTS_LOCATION}/readme-prompt.md" )" \
  --allowedTools "Read" "Glob" "Grep" "Edit(README.md)" "Write(README.md)" "Bash(ls:*)" "Bash(git log:*)"

git --no-pager diff --stat README.md
