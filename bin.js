const { read, save } = require("./index");
const marked = require("marked");
const TerminalRenderer = require("marked-terminal");

marked.setOptions({
  renderer: new TerminalRenderer()
});

const argv = require("yargs")
  .options({
    save: {
      alias: "s",
      describe: "save contribute file",
      boolean: true
    },
    override: {
      alias: "o",
      describe: "if saving and already exits, override silently",
      boolean: true
    }
  })
  .help().argv;

async function start() {
  if (!argv.s) {
    try {
      const content = await read();
      return console.log(marked(content));
    } catch (e) {
      console.error("Kunne ikke hente ut contribute");
      console.error(e);
      return;
    }
  }

  try {
    const success = await save(argv.o);

    if (success) {
      console.log(`Lagret CONTRIBUTING.md i ${process.cwd()}`);
    } else {
      console.log(`Lagret ikke contribute fil`);
    }
  } catch (e) {
    console.error("Fikk ikke lagret contribute i prosjektet");
    console.error(e);
    return;
  }
}

start();
