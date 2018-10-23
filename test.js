import test from 'ava'
import { validate, format, generate } from './index.js'

test('valid formatted CNPJs', t => {
  t.is(validate('51.878.216/0001-95'), true)
  t.is(validate('87.344.783/0001-09'), true)
})

test('valid unformatted CNPJs', t => {
  t.is(validate(15548368000166), true)
  t.is(validate('95241373000160'), true)
})

test('valid mixed string with non numeric characters', t => {
  t.is(validate('abcd11333977000147efgh'), true)
  t.is(validate('76aaa.bbb182ccc.ddd634eee/fff0001ggg-74'), true)
})

test('invalid formatted CNPJs', t => {
  t.is(validate('51.878.216/0001-11'), false)
  t.is(validate('87.344.783/0001-99'), false)
})

test('invalid unformatted CNPJs', t => {
  t.is(validate(15541368000126), false)
  t.is(validate('45241173000169'), false)
})

test('invalid sequential CNPJs', t => {
  t.is(validate('11.111.111/1111-11'), false)
  t.is(validate('22.222.222/2222-22'), false)
  t.is(validate('33.333.333/3333-33'), false)
  t.is(validate('44.444.444/4444-44'), false)
  t.is(validate('55.555.555/5555-55'), false)
  t.is(validate(66666666666666), false)
  t.is(validate(77777777777777), false)
  t.is(validate(88888888888888), false)
  t.is(validate(99999999999999), false)
  t.is(validate('00000000000000'), false)
})

test('format CNPJ', t => {
  t.is(format(15548368000166), '15.548.368/0001-66')
  t.is(format('95241373000160'), '95.241.373/0001-60')
  t.is(format('a9b5c2d4e1f3g7h3i0j0k0l1m6n0o'), '95.241.373/0001-60')
})

test('generate CNPJ', t => {
  t.is(validate(generate()), true)
  t.is(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(generate()), true)
})
