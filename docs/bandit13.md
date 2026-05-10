# Bandit Level 13 to 14 — Step-by-Step Flow

This guide shows the complete flow for logging in as `bandit13`, copying the SSH private key, and then using it to log in as `bandit14`.

## Part 1 — Log in to `bandit13`

From your Kali terminal:

```bash
ssh bandit13@bandit.labs.overthewire.org -p 2220
```

When prompted, enter the **password from Level 12**.

Verify the login:

```bash
whoami
```

Expected output:

```bash
bandit13
```

## Part 2 — View the SSH private key

Run:

```bash
cat sshkey.private
```

You will see a private key like this:

```text
-----BEGIN OPENSSH PRIVATE KEY-----
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx
-----END OPENSSH PRIVATE KEY-----
```

### Important
Copy **everything exactly**:
- `BEGIN` line
- all middle text
- `END` line

## Part 3 — Open a new Kali terminal

Do **not** close the `bandit13` terminal.

Open another terminal window in Kali. You should see a prompt like:

```bash
kali@kali:~$
```

or:

```bash
root@kali:~#
```

## Part 4 — Create a local key file

Run:

```bash
nano bandit14key
```

Paste the full private key into the file.

Save and exit nano:

- `CTRL + O`
- `Enter`
- `CTRL + X`

## Part 5 — Set the correct permissions

Run:

```bash
chmod 600 bandit14key
```

### Meaning of `600`

| Permission | Meaning |
|---|---|
| 6 | owner can read and write |
| 0 | group has no access |
| 0 | others have no access |

SSH requires private keys to be secure.

## Part 6 — Log in directly as `bandit14`

Run:

```bash
ssh -i bandit14key bandit14@bandit.labs.overthewire.org -p 2220
```

If asked:

```text
Are you sure you want to continue connecting?
```

type:

```text
yes
```

A successful login looks like:

```bash
bandit14@bandit:~$
```

Verify:

```bash
whoami
```

Expected output:

```bash
bandit14
```

## Part 7 — Get the Level 14 password

Run:

```bash
cat /etc/bandit_pass/bandit14
```

This prints the password for:

**Level 14 → 15**
