# Bandit 13

## Overview

This page tracks the Bandit 13 task from OverTheWire.

- Host: `bandit.labs.overthewire.org`
- Port: `2220`
- User: `bandit13`
- Goal: Find the password for `bandit14`.

## Access

Connect with SSH using the password from Bandit 12:

```bash
ssh bandit13@bandit.labs.overthewire.org -p 2220
```

## Task details

Bandit 13 asks you to examine a hidden file and extract the password for the next level. The file is not immediately visible using standard `ls` output.

### Useful commands

- `ls -la`
- `cat <filename>`
- `strings <file>`
- `file <file>`

### Hints

- Hidden files begin with a `.` character.
- Use directory listing options to show hidden entries.
- The password may be stored in a file whose name is not obvious.

## Assets

Assets for Bandit 13 are available in `assets/bandit13/`.
