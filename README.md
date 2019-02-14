# Variant Contribute

Verktøy for å synkronisere og se contribution guide for Variant sine repoer på
Github.

## Bruk som CLI i et prosjekt

For å lese contribute guide

```sh
npx @variant/contribute
```

For å opprette eller overskrive CONTRIBUTING.md i ditt prosjekt:

```sh
npx @variant/contribute --save
# Eller kortvariant
npx @variant/contribute -s
```

For å unngå spørsmål om overskriving:

```sh
npx @variant/contribute --save --override
# Eller kortvariant
npx @variant/contribute -so
```

## API

Installer:

```
npm install @variant/contribute
```

```js
const contribute = require("@variant/contribute");

// () => Promise<string>
contribute.read();

// (override = false : Boolean) => Promise<Boolean>
contribute.save(override);
```
