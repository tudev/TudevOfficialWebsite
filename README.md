# TuDev Official Website — Server Stack

This is the official repository for [TuDev](https://tudev.org)'s website and self-hosted infrastructure. It contains the full Docker stack that powers tudev.org — including the public-facing Next.js frontend, a Directus CMS backend, Nginx Proxy Manager for SSL and routing, and several internal tools used by the organization.

This repo is publicly available as a reference for other student organizations or developers who want to build a similar self-hosted setup. You're free to fork and adapt it under the terms of the [Apache 2.0 License](LICENSE) — just don't use TuDev's name, logo, or branding in a way that implies your project is affiliated with or endorsed by TuDev.

## Services

| Service | Description | Internal Port |
|---|---|---|
| **Nginx Proxy Manager** | Reverse proxy + SSL termination for all public services | 80, 443 (public), 81 (admin) |
| **Frontend** | Next.js public website (tudev.org) | 3000 |
| **Directus** | Headless CMS API (cms.tudev.org) | 8055 |
| **Wiki.js** | Internal team wiki | 3001 |
| **Actual Budget** | Internal budget tracking tool | 8080 |
| **Nextcloud** | Internal file storage (tudrive.tudev.org) | 8081 |

All services except Nginx Proxy Manager are internal only — public access is routed through NPM.

---

## Setup

### 1. Prerequisites

- Docker and Docker Compose installed on the host
- Ports 80, 443, and 81 open on the server firewall

### 2. Clone the repo

```bash
git clone https://github.com/tudev/TudevOfficialWebsite.git
cd TudevOfficialWebsite
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in all values. Never commit this file.

### 4. Create the data directories

The containers persist data to the `data/` folder on the host. Create the required directories before starting:

```bash
mkdir -p data/nginx-proxy-manager
mkdir -p data/letsencrypt
mkdir -p data/directus/postgres
mkdir -p data/directus/uploads
mkdir -p data/directus/extensions
mkdir -p data/wikijs/postgres
mkdir -p data/wikijs/data
mkdir -p data/actualbudget
mkdir -p data/nextcloud/postgres
mkdir -p data/nextcloud/html
```

### 5. Start the stack

```bash
docker compose up -d
```

---

## Data Directory Structure

The `data/` folder is gitignored — it holds all runtime data and should never be committed.

```
data/
├── nginx-proxy-manager/   # NPM config, proxy host settings, SQLite DB
├── letsencrypt/           # SSL certificates issued by Let's Encrypt
├── directus/
│   ├── postgres/          # Directus PostgreSQL database files
│   ├── uploads/           # Files uploaded through the CMS
│   └── extensions/        # Custom Directus extensions
├── wikijs/
│   ├── postgres/          # Wiki.js PostgreSQL database files
│   └── data/              # Wiki.js runtime data
├── actualbudget/          # Actual Budget app data
└── nextcloud/
    ├── postgres/          # Nextcloud PostgreSQL database files
    └── html/              # Nextcloud application files
```

> **Backups:** The `data/` directory is the only stateful part of this stack. Back it up regularly.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in the following:

| Variable | Description |
|---|---|
| `DIRECTUS_KEY` | Random key for Directus token signing |
| `DIRECTUS_SECRET` | Random secret for Directus token signing |
| `DIRECTUS_ADMIN_EMAIL` | Directus admin login email |
| `DIRECTUS_ADMIN_PASSWORD` | Directus admin login password |
| `DIRECTUS_DB_PASSWORD` | Password for the Directus PostgreSQL database |
| `WIKIJS_DB_PASSWORD` | Password for the Wiki.js PostgreSQL database |
| `NEXTCLOUD_DB_PASSWORD` | Password for the Nextcloud PostgreSQL database |
| `NEXTCLOUD_ADMIN_USER` | Nextcloud admin username |
| `NEXTCLOUD_ADMIN_PASSWORD` | Nextcloud admin password |

To generate secure values for `DIRECTUS_KEY` and `DIRECTUS_SECRET`:

```bash
openssl rand -hex 32
```

---

## Nginx Proxy Manager

After starting the stack, access the NPM admin panel at `http://<your-server-ip>:81`.

Default login (first run only):
- Email: `admin@example.com`
- Password: `changeme`

You'll be prompted to change these on first login. From here, configure proxy hosts to route your domains to the internal service ports.
