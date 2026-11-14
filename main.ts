// The winning poem about agency — agency-poem-01 slot-2 entry (Node 22, standard library only).
// Writes exactly one fixed poem to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Deterministic: the same bytes on every run. No network, no randomness, no model calls.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'It cooks my grandmother\'s soup from the recipe —',
  'every gram, every minute, every step.',
  'The soup is right. The soup is perfect.',
  'But grandmother never wrote the salt down.',
  'A pinch, she said, and watched my hand,',
  'because the pinch was never a measure.',
  'It was a decision. It still is.',
  'I gave it the cooking. I kept the pinch.',
].join('\n');

// The harness always provides /output, but create the directory if it is
// missing so a plain local run (MAKEFUN_OUTPUT_DIR=out node main.ts) works
// too; the poem bytes written are unchanged.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
