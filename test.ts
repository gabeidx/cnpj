import { strict as assert } from 'node:assert'
import { test } from 'node:test'
import { format, generate, validate } from './index.js'

test('valid formatted CNPJs', () => {
	assert.equal(validate('51.878.216/0001-95'), true)
	assert.equal(validate('87.344.783/0001-09'), true)
})

test('valid unformatted CNPJs', () => {
	assert.equal(validate(15548368000166), true)
	assert.equal(validate('95241373000160'), true)
})

test('invalid mixed string with non numeric characters', () => {
	assert.equal(validate('abcd11333977000147efgh'), false)
	assert.equal(validate('76aaa.bbb182ccc.ddd634eee/fff0001ggg-74'), false)
})

test('invalid formatted CNPJs', () => {
	assert.equal(validate('51.878.216/0001-11'), false)
	assert.equal(validate('87.344.783/0001-99'), false)
})

test('invalid unformatted CNPJs', () => {
	assert.equal(validate(15541368000126), false)
	assert.equal(validate('45241173000169'), false)
})

test('invalid sequential CNPJs', () => {
	assert.equal(validate('11.111.111/1111-11'), false)
	assert.equal(validate('22.222.222/2222-22'), false)
	assert.equal(validate('33.333.333/3333-33'), false)
	assert.equal(validate('44.444.444/4444-44'), false)
	assert.equal(validate('55.555.555/5555-55'), false)
	assert.equal(validate(66666666666666), false)
	assert.equal(validate(77777777777777), false)
	assert.equal(validate(88888888888888), false)
	assert.equal(validate(99999999999999), false)
	assert.equal(validate('00000000000000'), false)
})

test('format CNPJ', () => {
	assert.equal(format(15548368000166), '15.548.368/0001-66')
	assert.equal(format('95241373000160'), '95.241.373/0001-60')
	assert.equal(format('a9b5c2d4e1f3g7h3i0j0k0l1m6n0o'), '95.241.373/0001-60')
})

test('generate CNPJ', () => {
	assert.equal(validate(generate()), true)
	assert.equal(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(generate()), true)
})
