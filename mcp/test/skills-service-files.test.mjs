import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

import { SkillsService } from "../dist/skills/skills.service.js";

function createFixture() {
  const rootDir = mkdtempSync(join(tmpdir(), "agents-skills-"));
  const skillDir = join(rootDir, "sample-skill");
  mkdirSync(join(skillDir, "references"), { recursive: true });
  mkdirSync(join(skillDir, "node_modules"), { recursive: true });

  writeFileSync(
    join(skillDir, "SKILL.md"),
    `---
name: sample-skill
description: Use when testing skill file access.
---

# Sample Skill
`,
  );
  writeFileSync(join(skillDir, "references", "guide.md"), "# Guide\n\nUse this.");
  writeFileSync(join(skillDir, "notes.txt"), "plain notes");
  writeFileSync(join(skillDir, "node_modules", "ignored.md"), "ignored");
  writeFileSync(join(skillDir, ".secret.md"), "ignored");

  return rootDir;
}

test("lists readable files inside a skill directory", () => {
  const rootDir = createFixture();

  try {
    const service = new SkillsService({ rootDir });

    assert.deepEqual(service.listSkillFiles("sample-skill"), {
      name: "sample-skill",
      files: [
        {
          path: "notes.txt",
          size: 11,
          type: "text/plain",
        },
        {
          path: "references/guide.md",
          size: 18,
          type: "text/markdown",
        },
      ],
    });
  } finally {
    rmSync(rootDir, { recursive: true, force: true });
  }
});

test("reads a skill support file and rejects path traversal", () => {
  const rootDir = createFixture();

  try {
    const service = new SkillsService({ rootDir });

    assert.deepEqual(service.getSkillFile("sample-skill", "references/guide.md"), {
      name: "sample-skill",
      path: "references/guide.md",
      size: 18,
      type: "text/markdown",
      content: "# Guide\n\nUse this.",
    });

    assert.throws(
      () => service.getSkillFile("sample-skill", "../outside.md"),
      /Invalid skill file path/,
    );
    assert.throws(
      () => service.getSkillFile("sample-skill", ".secret.md"),
      /not an allowed readable text file/,
    );
    assert.throws(
      () => service.getSkillFile("sample-skill", "node_modules/ignored.md"),
      /not an allowed readable text file/,
    );
  } finally {
    rmSync(rootDir, { recursive: true, force: true });
  }
});
