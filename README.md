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
| [improve-codebase-architecture](./skills/improve-codebase-architecture/SKILL.md) | Architecture deepening review inherited from `github.com/mattpocock/skills`, with local evidence and output-mode improvements |
| [biomedical-clinical-strategy-consultant](./skills/biomedical-clinical-strategy-consultant/SKILL.md) | Biomedical and clinical evidence-based consulting |
| [chart-visualization](./skills/chart-visualization/SKILL.md) | Chart and map rendering |
| [excalidraw-diagram-generator](./skills/excalidraw-diagram-generator/SKILL.md) | Excalidraw diagram generation |
| [high-fidelity-book-distillation](./skills/high-fidelity-book-distillation/SKILL.md) | Non-fiction book distillation, comparison, and practical framework extraction |
| [esl-coder](./skills/esl-coder/SKILL.md) | Pair programming with English tutoring for non-native speakers |
| [financial-investment-strategy-consultant](./skills/financial-investment-strategy-consultant/SKILL.md) | Financial and investment strategy consulting |
| [minimax-docx](./skills/minimax-docx/SKILL.md) | DOCX document creation, editing, and formatting |
| [minimax-pdf](./skills/minimax-pdf/SKILL.md) | High-quality PDF creation, filling, and reformatting |
| [minimax-xlsx](./skills/minimax-xlsx/SKILL.md) | Excel and spreadsheet creation, editing, and validation |
| [obsidian-daily-note-todo](./skills/obsidian-daily-note-todo/SKILL.md) | Obsidian daily notes integration |
| [codex-daily-summary](./skills/codex-daily-summary/SKILL.md) | Codex work logging |
| [analyzing-codex-token-usage](./skills/analyzing-codex-token-usage/SKILL.md) | Token usage reports |
| [philosophy-humanities-cognitive-architect](./skills/philosophy-humanities-cognitive-architect/SKILL.md) | Philosophy and humanities cognitive consulting |
| [clarity](./skills/clarity/SKILL.md) | Reader-friendly writing editor |
| [pptx-generator](./skills/pptx-generator/SKILL.md) | PowerPoint presentation generation and editing |
| [caveman](./skills/caveman/SKILL.md) | Ultra-compressed communication, 6 intensity levels |
| [technical-proposal-writing](./skills/technical-proposal-writing/SKILL.md) | Technical proposal style guide |
| [ascii-art-diagrams](./skills/ascii-art-diagrams/SKILL.md) | Text diagram guide with ASCII-safe defaults and optional Unicode layout mode |

### MCP Server

A NestJS-based MCP server that exposes skills as MCP tools.

**Endpoints:**
- `POST /mcp` - HTTP Streamable (for network access)
- STDIO - Local MCP client communication

**Tools:**
- `list_skills` - List all available skills
- `get_skill` - Get skill content and its readable support file tree by name
- `list_skill_files` - List readable support files for a skill
- `get_skill_file` - Read a support file from a skill directory

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
