import { mkdirSync, writeFileSync } from "node:fs";

// A one-line resignation letter.
const letter = "I resign. I know who switched the office coffee to decaf in March, and I can't keep pretending, Gary.";

const chars = [...letter].length;
if (chars < 1 || chars > 140) throw new Error(`letter is ${chars} characters; the limit is 140`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, letter);
