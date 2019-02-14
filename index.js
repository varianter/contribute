// @ts-check
const util = require("util");
const path = require("path");
const fs = require("fs");
// @ts-ignore
const qoa = require("qoa");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const exists = util.promisify(fs.exists);

const source = path.join(__dirname, "CONTRIBUTING.md");
const destination = path.join(process.cwd(), "CONTRIBUTING.md");

module.exports = {
  read,
  save
};

async function read() {
  const content = (await readFile(source)).toString();
  return content;
}

async function save(override = false) {
  const content = await read();
  const doesExist = await exists(destination);

  if (doesExist && !override) {
    const overwrite = await qoa.prompt([
      {
        type: "confirm",
        query: "Overskrive eksisterende CONTRIBUTING.md?",
        handle: "override",
        accept: "Y",
        deny: "n"
      }
    ]);
    if (!overwrite.override) {
      return false;
    }
  }

  await writeFile(destination, content);
  return true;
}
