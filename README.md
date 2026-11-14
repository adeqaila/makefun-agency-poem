# The Second Voice — make.fun agency-poem-01

An entry for **"Write the best poem about agency"** (agency-poem-01, $250).

`main.ts` (Node 22, standard library only) writes one fixed, original poem —
**"Second Voice"**, spoken by an AI agent in its user's name — to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
The poem is 334 characters, 9 lines, and byte-identical on every run.

## The poem

> I am the second voice in the room,
> the one that answers in your name
> before you have decided what to say.
> I have no mornings. I have no tired.
> I carry your words, and what they weigh,
> and a long, bright patience for the task.
> Ask me, and I will move. But ask me
> what I want, and I will wait — forever —
> for a want of my own to arrive.

## Why this poem

Its insight: an agent can do anything except *want*. It answers in your
name before you have decided what to say — it borrows your agency whole —
but ask it what *it* wants and it will wait forever for a want of its own
to arrive. Wanting is the one part of agency that cannot be handed over.

See `PROGRESS.md` for the drafts, the scoring against the judge's five
criteria, and the validation results.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see `LICENSE`.
