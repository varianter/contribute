// @ts-check
import { readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import prompts from "prompts";

const destination = join(process.cwd(), "CONTRIBUTING.md");

export { read, save };

/**
 * @param {'no' | 'en' | undefined} [lang]
 */
async function read(lang) {
  if (!lang) {
    const result = await prompts({
      type: "select",
      name: "lang",
      message: "In what language?",
      choices: [
        { title: "Norsk", value: "no" },
        { title: "English", value: "en" },
      ],
    });

    lang = result.lang;
  }

  const source = join(
    dirname(fileURLToPath(import.meta.url)),
    `CONTRIBUTING_${lang}.md`
  );
  console.log(source);
  const content = (await readFile(source)).toString();
  return content;
}

async function save(override = false) {
  const doesExist = await exists(destination);

  if (doesExist && !override) {
    const result = await prompts({
      type: "confirm",
      message: "Override existing CONTRIBUTING.md?",
      name: "override",
      initial: false,
    });

    if (!result.override) {
      return false;
    }
  }

  const content = await read();

  await writeFile(destination, content);
  return true;
}

async function exists(filename) {
  try {
    const doesExist = await stat(filename);
    return doesExist.isFile();
  } catch (e) {
    return false;
  }
}
