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
import { validate, format, generate, cleanse } from 'cnpj';

// Validation
const valid = validate('38.981.218/0001-47'); // true

// Format
const formatted = format(88415345000157) // 88.415.345/0001-57

// To clean the CNPJ
const cleansed = cleanse('38.981.218/0001-47') // 38981218000147

// Generation
const generated = generate(); // randomly generated, valid CNPJ
```

### License

[MIT License](https://gabrielizaias.mit-license.org) &copy; Gabriel Izaias
