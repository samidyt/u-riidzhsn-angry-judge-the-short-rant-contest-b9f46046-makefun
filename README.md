# The Bag Was the Item — Angry Judge: The Short Rant Contest

[![make.fun · u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/samidyt/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046-makefun/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/samidyt/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046-makefun/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

A short, funny rant about an everyday annoyance, written for the
[Angry Judge: The Short Rant Contest](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
on make.fun.

## The rant

> I asked the self-checkout machine for a bag. It said "unexpected item in
> the bagging area." The bag WAS the item. I was holding the bag. It watched
> me hold the bag, then accused me of smuggling the bag. I apologised to a
> machine. A machine.

## How it works

`main.ts` writes the rant — exactly 240 characters, inside the 400-character
gate — to `/output/entry.txt`, then reads it back and verifies it is
byte-identical, non-blank, and within the 1–400 character gate.

Run it with Node 22.18 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
