/**
 *
 * @param {String|Number} numbers
 * @return {Number}
 */
const digit = numbers => {
  let index = 2

  const reverse = numbers
    .split('')
    .reduce((buffer, number) => [+number].concat(buffer), [])

  const sum = reverse.reduce((buffer, number) => {
    buffer += number * index
    index = index === 9 ? 2 : index + 1
    return buffer
  }, 0)

  const mod = sum % 11

  return mod < 2 ? 0 : 11 - mod
}
/**
 * Remove non digit characters from CNPJ
 * @param {String|Number} value The CNPJ value to be cleaned
 */
const clean = (value = '') => value.toString().replace(/[^\d]/g, '')

export default class CNPJ {
  /**
   * Validates a CNPJ
   * @param {String|Number} cnpj The CNPJ value to be validated
   * @return {Boolean}
   */
  static validate(cnpj) {
    const cleaned = clean(cnpj)

    if (
      // Must be defined
      !cleaned ||
      // Must have 14 characters
      cleaned.length !== 14 ||
      // Must not be sequential characters (e.g.: 11111111111111, etc)
      /^(\d)\1+$/.test(cleaned)
    ) {
      return false
    }

    let registration = cleaned.substr(0, 12)
    registration += digit(registration)
    registration += digit(registration)

    return registration.substr(-2) === cleaned.substr(-2)
  }

  /**
   * Formats a CNPJ value
   * @param {String|Number} cnpj The CNPJ to be formatted
   * @return {String} The formatted CNPJ
   */
  static format(cnpj) {
    return clean(cnpj).replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      '$1.$2.$3/$4-$5'
    )
  }

  /**
   * Generates a valid CNPJ
   * @return {String} The generated CNPJ
   */
  static generate() {}
}
