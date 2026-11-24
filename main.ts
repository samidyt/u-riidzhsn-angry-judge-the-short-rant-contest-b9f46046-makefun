import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Angry Judge: The Short Rant Contest — one short rant, 240 characters.
// A self-checkout machine accuses a shopper of smuggling the very bag
// it was asked for. Short, specific, and painfully everyday.
const RANT =
  "I asked the self-checkout machine for a bag. It said 'unexpected item in the bagging area.' The bag WAS the item. I was holding the bag. It watched me hold the bag, then accused me of smuggling the bag. I apologised to a machine. A machine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");

// Gate self-check: entry must be UTF-8 text, 1-400 chars, not only whitespace.
// The file holds exactly the rant — no trailing newline, no extra bytes —
// so repeated runs are byte-identical and the gate sees the same 240 chars.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== RANT) throw new Error("entry.txt does not match the rant");
if (back.endsWith("\n")) throw new Error("entry.txt has a trailing newline");
if (back.length < 1 || back.length > 400) {
  throw new Error(`entry length ${back.length} is outside the 1-400 gate`);
}
if (back.trim().length === 0) throw new Error("entry is only whitespace");

console.log(`Wrote ${back.length} characters to /output/entry.txt`);
