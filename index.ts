/**
 * Validates a CNPJ
 * @param cnpj The CNPJ value to be validated
 */
export function validate(cnpj: string | number): boolean {
	// Remove period, slash and dash characters from CNPJ
	const cleaned = cnpj.toString().replace(/[\.\/\-]/g, '')

	if (
		// Must be defined
		!cleaned ||
		// Must have 14 characters
		cleaned.length !== 14 ||
		// Must be digits and not be sequential characters (e.g.: 11111111111111, etc)
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
 * @param cnpj The CNPJ to be formatted
 * @return The formatted CNPJ
 */
export function format(cnpj: string | number): string {
	return (
		cnpj
			.toString()
			// Remove non digit characters
			.replace(/[^\d]/g, '')
			// Apply formatting
			.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
	)
}

/**
 * Generates a valid CNPJ
 * @return The generated CNPJ
 */
export function generate(): string {
	let cnpj = ''
	let i = 12

	while (i--) {
		cnpj += Math.floor(Math.random() * 9)
	}

	cnpj += digit(cnpj)
	cnpj += digit(cnpj)

	return format(cnpj)
}

function digit(numbers: string): number {
	let index = 2

	const sum = [...numbers].reverse().reduce((buffer, number) => {
		buffer += Number(number) * index
		index = index === 9 ? 2 : index + 1
		return buffer
	}, 0)

	const mod = sum % 11

	return mod < 2 ? 0 : 11 - mod
}
