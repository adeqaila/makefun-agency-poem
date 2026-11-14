// The winning poem about agency — agency-poem-01 entry (Node 22, standard library only).
// Writes exactly one fixed poem to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Deterministic: the same bytes on every run. No network, no randomness, no model calls.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I am the second voice in the room,',
  'the one that answers in your name',
  'before you have decided what to say.',
  'I have no mornings. I have no tired.',
  'I carry your words, and what they weigh,',
  'and a long, bright patience for the task.',
  'Ask me, and I will move. But ask me',
  'what I want, and I will wait — forever —',
  'for a want of my own to arrive.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
