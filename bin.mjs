#!/usr/bin/env node

import { read, save } from "./index.mjs";
import marked from "marked";
import TerminalRenderer from "marked-terminal";
import yargs from "yargs";

marked.setOptions({
  renderer: new TerminalRenderer(),
});

const argv = yargs
  .options({
    save: {
      alias: "s",
      describe: "save contribute file",
      boolean: true,
    },
    override: {
      alias: "o",
      describe: "if saving and already exits, override silently",
      boolean: true,
    },
    lang: {
      alias: "l",
      describe: "language (either `no` or `en`).",
      choices: ["en", "no"],
    },
  })
  .help().argv;

async function start() {
  if (!argv.s) {
    try {
      const content = await read();
      return console.log(marked(content));
    } catch (e) {
      console.error("Could not fetch CONTRIBUTE file");
      console.error(e);
      return;
    }
  }

  try {
    const success = await save(argv.o);

    if (success) {
      console.log(`Saved CONTRIBUTING.md in ${process.cwd()}`);
    } else {
      console.log(`Couldn't save file`);
    }
  } catch (e) {
    console.error("Couldn't save CONTRIBUTE file in project.");
    console.error(e);
    return;
  }
}

start();
