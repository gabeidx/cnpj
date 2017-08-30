# CNPJ

Format, validate and generate CNPJ numbers.

## Installation

```bash
npm install --save cnpj
```

Or, if you prefer using `yarn`, you can run

```bash
yarn add cnpj
```

## Usage

```js
import CNPJ from 'cnpj';

// Validation
const valid = CNPJ.isValid('38.981.218/0001-47'); // true

// Format
const formatted = CNPJ.format(88415345000157) // 88.415.345/0001-57

// Generation
const generated = CNPJ.generate(); // randomly generated, valid CNPJ
```

### License

[MIT License](https://gabrielizaias.mit-license.org) &copy; Gabriel Izaias
