# Discord Automation Handbook

`Ínstrúctíóns // Sýstém_Dóc`

**ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ**


> **Status:** ✅ Initial Setup Complete (v1.0.0)

This directory contains scripts to automate the configuration of the ForbocAI Discord server.

## Usage

To apply updates to the server configuration (e.g., adding new channels or roles), follow these steps:

1.  **Modify Configuration**:
    *   Open `setup.js`.
    *   Update the `ROLES_CONFIG` or `CATEGORIES_CONFIG` arrays.
    *   Add new roles, categories, or channels as needed.

2.  **Run Update**:
    ```bash
    npm start
    ```
    The script is idempotent—it will only create resources that do not already exist.

## Configuration Reference

### Roles
Defined in `ROLES_CONFIG`.
*   `name`: Role name (string)
*   `color`: Role color (hex string or resolving color)
*   `permissions`: Array of `PermissionsBitField.Flags`
*   `hoist`: Whether to display role separately in member list (boolean)

### Channels
Defined in `CATEGORIES_CONFIG`.
*   `name`: Category/Channel name (string, lowercase for text channels)
*   `type`: `ChannelType.GuildText` or `ChannelType.GuildVoice`
*   `topic`: Channel description (string)

---

## Initial Setup Reference (Completed)

These steps were performed to initialize the automation.

### 1. Create a Discord App & Bot (Done)
*   Created "ForbocAI System" in [Discord Developer Portal](https://discord.com/developers/applications).
*   Disabled "Public Bot".
*   Enabled "Server Members Intent" and "Message Content Intent".

### 2. Configure Environment (Done)
*   Generated Bot Token and added to `.env`.
*   Added Guild ID to `.env`.

### 3. Invite Bot (Done)
*   Generated OAuth2 URL with `bot` scope and `Administrator` permissions.
*   Invited bot to the server.
