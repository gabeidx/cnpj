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
import CNPJ from 'cnpj';

// Validation
const valid = CNPJ.validate('38.981.218/0001-47'); // true

// Format
const formatted = CNPJ.format(88415345000157) // 88.415.345/0001-57

// Generation
const generated = CNPJ.generate(); // randomly generated, valid CNPJ
```

### License

[MIT License](https://gabrielizaias.mit-license.org) &copy; Gabriel Izaias
