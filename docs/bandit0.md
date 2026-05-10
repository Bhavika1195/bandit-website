# Bandit Level 0 → Level 1

## Goal

Login to Bandit using SSH.

### Server Details

- Host: `bandit.labs.overthewire.org`
- Port: `2220`
- Username: `bandit0`
- Password: `bandit0`

---

# Step 1: Connect using SSH

Run:

```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

## Meaning

- `ssh` = Secure Shell (remote login)
- `bandit0@...` = login as user `bandit0`
- `-p 2220` = use port `2220` (not default port `22`)

## Why?

SSH lets you securely connect to another machine remotely.

This is how real servers are accessed in cybersecurity and DevOps.

---

# Step 2: Accept Fingerprint

First time it asks:

```text
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Type:

```text
yes
```

## Why?

SSH saves the server identity so next time it can detect fake servers (MITM protection).

---

# Step 3: Enter Password

Password:

```text
bandit0
```

While typing password, nothing shows on screen.

That is normal in Linux.

---

# Step 4: List Files

Run:

```bash
ls
```

## Meaning

`ls` = list files in current directory

You should see:

```text
readme
```

---

# Step 5: Read File

Run:

```bash
cat readme
```

## Meaning

`cat` = display file content

## Why?

The level says password is inside `readme`.

This gives the password for `bandit1`.

Save it in your notes.
