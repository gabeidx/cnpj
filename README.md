# CNPJ

Format, validate and generate CNPJ numbers.

## Installation

```bash
yarn add cnpj
```

Or, if you prefer using `npm`, you can run

```bash
npm install --save cnpj
```

## Usage

```js
import { validate, format, generate } from 'cnpj';
// import * as CNPJ from 'cnpj;s

// Validation
const valid = validate('38.981.218/0001-47'); // true

// Format
const formatted = format(88415345000157) // 88.415.345/0001-57

// Generation
const generated = generate(); // randomly generated, valid CNPJ
```

### License

[MIT License](https://gabrielizaias.mit-license.org) &copy; Gabriel Izaias
