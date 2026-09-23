<br/>
<div align="center">
  <img alt="ForbocAI logo" src="https://forboc.ai/logo.png" height="50" align="center">
  
  <br/>

# ForbocAI

`Hearthlight_Site // Public_Brand`

Warm, imaginative AI for living game characters.

[![Documentation](https://img.shields.io/badge/docs-docs.forboc.ai-blue)](https://docs.forboc.ai)
[![Discord](https://img.shields.io/discord/your-discord-id?label=Discord)](https://discord.gg/6hr2jHqnsG)

</div>

---

## Overview

This repository contains the source for the main ForbocAI marketing site at `forboc.ai`.

It is the active Layer 1 public brand and should now follow the cozy direction:

- warm
- welcoming
- imaginative
- crafted rather than severe
- premium without feeling cold

The old monochrome / grimdark version has been preserved separately in `Forboc.AI/monochrome/`.

The aesthetic should diverge from `monochrome/`, and the active site should still clearly describe the same ForbocAI company and feature surface. Use `monochrome/` as a sibling reference for scope, not as a line-by-line copy source.

## Product Positioning

ForbocAI helps game developers build characters that feel alive:

- autonomous NPC behavior
- memory and continuity, written to a store the studio owns
- cognition hosted on ForbocAI infrastructure, so studios ship no model runtime
- actions validated against the studio's own rules before the world changes
- Ghost playtesting, portable Souls, and the public `$FAI` utility layer

Public messaging should stay clear and high-level. The brochure site is not the place for deep Layer 3 implementation detail.

Two claims are easy to get wrong and must not reappear: inference is **not** local or on-device, and the product is **not** free — it is paid from the first API call. Check `classified/docs/business/business-model.md` before writing a capability claim.

## Brand Direction

The active brochure site should feel like a lantern-lit invitation into a magical workshop:

- soft atmosphere
- warm typography
- handcrafted visual details
- clear storytelling
- approachable product language

Avoid framing the brand as:

- ominous
- void-centered
- grimdark
- coldly cyberpunk
- intentionally hostile or cryptic

## Messaging Rule

The cozy site is not a second company narrative, and it is not a game site. It should present ForbocAI, Inc. as the company behind the demos, guidance, Souls, and `$FAI` market path while keeping the public copy warm, clear, and distinct from the preserved `monochrome/` wording.

## Local Development

To run locally:

1. Clone:
   ```bash
   git clone https://github.com/forbocai/forbocai.github.io.git
   cd forbocai.github.io
   ```
2. Run:
   ```bash
   python3 -m http.server 8000
   ```
3. View:
   [http://localhost:8000](http://localhost:8000)

Any static file server is fine.

## Checks

```bash
scripts/verify.sh                      # everything that has to be true before a push
python3 scripts/audit-claims.py        # fail on any capability claim the product contradicts
python3 scripts/audit-claims.py --list # show what it looks for and why
python3 scripts/check_line_count.py    # fail on any authored file over 300 lines
python3 scripts/check_dead_code.py     # fail on a class nothing wears, a sheet nothing links, a module nothing imports
python3 forbocai.github.io/scripts/art/compose-cast-plate.py  # from the Forboc.AI root: rebuild the Servitor cast plate
```

Three claims were live on this site and wrong: inference described as local, a
per-token cost of zero, and a roadmap of quarters that had already passed. The
audit exists so the next person cannot reintroduce them by accident. A doc that
needs to quote a banned claim in order to forbid it marks the line
`<!-- claims-audit:allow -->`.

## Documentation

- [docs.forboc.ai](https://docs.forboc.ai) — Developer docs and SDK guidance
- [docs.forboc.ai/npm/user-stories](https://docs.forboc.ai/npm/user-stories) — User stories
- [docs.forboc.ai/npm/concepts](https://docs.forboc.ai/npm/concepts) — Concepts and architecture

## Related Repos

- `forbocai.github.io/` — active public marketing site
- `Forboc.AI/monochrome/` — preserved previous brochure fork

## Links

- Website: [forboc.ai](https://forboc.ai)
- Documentation: [docs.forboc.ai](https://docs.forboc.ai)
- Discord: [discord.gg/6hr2jHqnsG](https://discord.gg/6hr2jHqnsG)
- Telegram: [t.me/forbocai](https://t.me/forbocai)

## License

All rights reserved. © 2026 ForbocAI. See [LICENSE](./LICENSE) for full details.

## Design Rule

See [style-guide.md](./style-guide.md) for the active cozy brochure-site aesthetic standards.
