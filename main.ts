// News image entry for make.fun bounty news-image-20261123.
// The image sums up the world news of Monday 23 November 2026 and is
// drawn in this repository as entry.png; this program copies it to the
// grader's output directory, unchanged, every run.
// No network, no randomness: the same input bytes produce the same
// output bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
writeFileSync(target, readFileSync(source));
