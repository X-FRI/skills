---
name: agents-repository
description: Home directory for agentic AI tools and skills
---

# Agents Repository

A centralized repository for AI agent capabilities, skills, and MCP services.

## Structure

```
~/.agents/
├── .git/                    # Git repository
├── skills/                  # Skills directory
│   ├── README.md           # Skills overview
│   ├── README_zh.md       # 中文说明
│   └── <skill-name>/      # Individual skill folders
│       └── SKILL.md       # Skill definition
├── mcp/                    # MCP server
│   ├── README.md           # MCP server overview
│   └── src/               # Source code
└── .skill-lock.json        # Skill lock file
```

## Quick Start

### Skills

Skills are reusable task-specific workflows stored in `skills/` directory. Each skill is a self-contained `SKILL.md` file with YAML frontmatter.

**Available Skills:**

| Skill | Description |
|-------|-------------|
| [discovering-project-context](./skills/discovering-project-context/SKILL.md) | Fast project discovery and architecture mapping |
| [writing-plans](./skills/writing-plans/SKILL.md) | Create detailed implementation plans |
| [brainstorming](./skills/superpowers/brainstorming/SKILL.md) | Structured brainstorming sessions |
| [systematic-debugging](./skills/superpowers/systematic-debugging/SKILL.md) | Systematic debugging workflows |
| [deep-research](./skills/deep-research/SKILL.md) | Multi-source research with citations |
| [commit](./skills/commit/SKILL.md) | Conventional commit creation |
| [find-docs](./skills/find-docs/SKILL.md) | Current library documentation lookup |
| [chart-visualization](./skills/chart-visualization/SKILL.md) | Chart and map rendering |
| [excalidraw-diagram-generator](./skills/excalidraw-diagram-generator/SKILL.md) | Excalidraw diagram generation |
| [obsidian-daily-note-todo](./skills/obsidian-daily-note-todo/SKILL.md) | Obsidian daily notes integration |
| [codex-daily-summary](./skills/codex-daily-summary/SKILL.md) | Codex work logging |
| [analyzing-codex-token-usage](./skills/analyzing-codex-token-usage/SKILL.md) | Token usage reports |
| [personification](./skills/personification/SKILL.md) | Human-tone writing adapter |
| [caveman](./skills/caveman/SKILL.md) | Ultra-compressed communication, 6 intensity levels |
| [technical-proposal-writing](./skills/technical-proposal-writing/SKILL.md) | Technical proposal style guide |

### MCP Server

A NestJS-based MCP server that exposes skills as MCP tools.

**Endpoints:**
- `POST /mcp` - HTTP Streamable (for network access)
- STDIO - Local MCP client communication

**Tools:**
- `list_skills` - List all available skills
- `get_skill` - Get skill content by name

**Start the server:**
```bash
cd ~/.agents/mcp
npm install
npm run build
npm run start
```

## Development

### Adding a New Skill

1. Create a new directory under `skills/`:
   ```bash
   mkdir skills/my-new-skill
   ```

2. Create `SKILL.md` with frontmatter:
   ```markdown
   ---
   name: my-new-skill
   description: Brief description of what this skill does
   ---
   
   # My New Skill
   
   ## Overview
   ...
   ```

3. Commit changes:
   ```bash
   git add skills/my-new-skill
   git commit -m "feat(skills): add my-new-skill"
   ```

### Syncing Superpowers

Superpowers skills are synced from upstream `obra/superpowers`:

```bash
./scripts/sync-superpowers.sh
```

## License

This repository contains multiple components with potentially different licenses. Check individual `LICENSE` files in each directory.
