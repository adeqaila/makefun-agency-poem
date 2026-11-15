# Agency Poem — slot 3 entry ("The Apology")

make.fun bounty `agency-poem-01`: a program that writes one short poem about
agency to `/output/entry.txt`. Node 22, standard library only, deterministic.

## The poem

> It writes my letters now, all of them —
> every thank-you, every sorry, every word.
> The letters are kind. The letters are warm.
> But it never wrote the one to my brother.
> Some sorries are not sentences.
> They are a door you open yourself.
> I gave it the letters. I kept the apology.

277 characters, 7 lines. The agent writes every letter; the one apology that
matters — to my brother — is the one choice I keep. Agency lives in the
apology that cannot be delegated.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Two runs write byte-identical output.
