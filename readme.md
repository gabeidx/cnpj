# CNPJ

Format, validate and generate CNPJ numbers.

## Installation

### Deno

```ts
import { validate, format, generate } from 'https://deno.land/x/cnpj/mod.ts';
```

### Node

```bash
npm install cnpj
```

```ts
import { validate, format, generate } from 'cnpj';
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
