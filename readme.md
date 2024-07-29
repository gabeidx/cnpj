# CNPJ

Format, validate and generate CNPJ numbers.

## Installation

### Node

```bash
npm install cnpj
```

or, if you are using jsr

```bash
npx jsr add @brazil/cnpj
```

```ts
import { validate, format, generate } from 'cnpj';
```

### Deno

```bash
deno add @brazil/cnpj
```

```ts
import { validate, format, generate } from '@brazil/cnpj';
```

## Usage

```js
// Validation
const valid = validate('38.981.218/0001-47'); // true

// Format
const formatted = format(88415345000157) // 88.415.345/0001-57

// Generation
const generated = generate(); // randomly generated, valid CNPJ
```

### License

[MIT License](https://gabrielizaias.mit-license.org) &copy; [Gabriel Silva](https://gabe.id)
